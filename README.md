 ## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

  ans no. 1:
  getElementById usually selects element by id, returns single element, only work with id and some say very fast.

  getElementsByClassName basically selects elements by class, returns HTMLcollection, returns multiple elements

  querySelector uses CSS selector and retruns first matching element , can use id , class, tag, attribute.

  querySelectorALL also a CSS selector , it returns NodeList , returns all matching elements instead of first match.

 ## How do you create and insert a new element into the DOM?

ans no. 2:
Create  an element:

const newDiv = document.createElement("div");


Adding content:

newDiv.textContent = "Hello World!";


Insert it into the DOM:

document.body.append(newDiv);

Or, 

document.body.prepend(newDiv);

 ## What is Event Bubbling? And how does it work?

ans no. 3:


Event Bubbling means when an event happens on a child element, it first runs on that element, then bubbles up to its parent, then to the parent's parent, and so on — up to document.


Here is a html div . Inside a button which is child of the div . 

<div id="parent">

  <button id="child">Click Me</button>

</div>


Let's apply js .


//First:

document.getElementById("parent").addEventListener("click", () => {

  console.log("Parent clicked");

});


//Second:

document.getElementById("child").addEventListener("click", () => {

  console.log("Button clicked");

});


If i click only the button then div the parent will be clicked too. Result:

Button clicked 

Parent clicked 


Because the event bubbles upward. That's how it's work.





 ## What is Event Delegation in JavaScript? Why is it useful?

ans no. 4:

Event Delegation is Instead of adding event listeners to multiple child elements, you add one listener to the parent and use bubbling to handle events.

 Suppose i have a ul . Inside ul there's so many li. So i should use event listener on the ul . Because it's the parent .



Why it's useful:


Better performance

Less memory usage

Works for dynamically added elements

Cleaner code.




 ## What is the difference between preventDefault() and stopPropagation() methods?

ans no. 5:


preventDefault()

Stops the default browser behavior.

Example in a tag : 


document.querySelector("a").addEventListener("click", (e) => {

  e.preventDefault();   // Link won't navigate

});

Prevents:


Form submission

Link navigation

Checkbox default behavior

..........................................

stopPropagation()

Stops the event from bubbling up to parent elements.


For example:


document.getElementById("child").addEventListener("click", (e) => {

  e.stopPropagation(); //Parent click listener will NOT run.

});
