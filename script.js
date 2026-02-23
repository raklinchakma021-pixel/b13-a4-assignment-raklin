let currentTab = "Not Applied";


let jobs = [
    {id:1, company:"TechNova", position: "Frontend Developer", location: "Dhaka", type: "Full Time", salary: "$130,000 - $175,000", description: "Develop responsive web interfaces.", status: "Not Applied"},
     {id:2, company:"SkySoft", position:"Backend Developer", location:"Chattogram", type:"Full Time", salary:"$80,000 - $120,000", description:"Build secure APIs.", status:"Not Applied"},
  {id:3, company:"CloudNet", position:"UI Designer", location:"Remote", type:"Contract", salary:"$80,000 - $120,000", description:"Design clean user interfaces.", status:"Not Applied"},
  {id:4, company:"BrightCode", position:"QA Engineer", location:"Dhaka", type:"Full Time", salary:"$80,000 - $120,000", description:"Test web applications.", status:"Not Applied"},
  {id:5, company:"InnoTech", position:"React Developer", location:"Remote", type:"Full Time", salary:"$80,000 - $120,000", description:"Build scalable apps.", status:"Not Applied"},
  {id:6, company:"DataEdge", position:"Data Analyst", location:"Dhaka", type:"Full Time", salary:"$80,000 - $120,000", description:"Analyze business data.", status:"Not Applied"},
  {id:7, company:"AppCore", position:"Mobile Developer", location:"Chattogram", type:"Contract", salary:"$80,000 - $120,000", description:"Develop Android apps.", status:"Not Applied"},
  {id:8, company:"CyberTech", position:"DevOps Engineer", location:"Remote", type:"Full Time", salary:"$80,000 - $120,000", description:"Manage cloud systems.", status:"Not Applied"}
]

function renderJobs(){
    const jobsContainer = document.getElementById("jobsContainer");
    jobsContainer.innerHTML = "";

    let filteredJobs = currentTab === "Not Applied"
    ? jobs 
    : jobs.filter(job => job.status === currentTab);



    document.getElementById("sectionCount").innerText = filteredJobs.length + " Jobs";


    if(filteredJobs.length === 0){
        jobsContainer.innerHTML = 
        `
           <div class="col-span-full text-center p-10 bg-white rounded shadow">
        <div class="text-5xl mb-4"> <img src="./jobs.png" alt="" class="mx-auto mb-4 w-32 h-32 object-contain">
</div>
        <h2 class="text-2xl font-semibold">No jobs available</h2>
        <p class="text-gray-500">Check back soon for new job opportunities.</p>
      </div>
        `;
        return;
    }

    filteredJobs.forEach(job => {
        jobsContainer.innerHTML += 
        `
        <div class="bg-white p-4 rounded shadow ">
        <div class="flex justify-between ">
        <h2 class="text-xl font-bold ">${job.position}</h2>
        <img onclick="deleteJob(${job.id})" src="./delete.png" class=" w-8 h-7   text-white rounded">
        </div>
        
        <p class="text-gray-600 py-2">${job.company}</p>
        <p class="text-sm text-gray-500 py-2">${job.location} • ${job.type} • ${job.salary}</p>
     
        <button class="mt-2 bg-gray-300 font-semibold px-3 py-1 rounded uppercase">${job.status}</button>
           <p class="text-gray-700 mt-2 ">${job.description}</p>
        <div class="flex gap-2 mt-4 my-2">
          <button onclick="updateStatus(${job.id}, 'Interview')" class="uppercase px-3 py-1 border border-green-500 text-green-500 rounded">Interview</button>
          <button onclick="updateStatus(${job.id}, 'Rejected')" class="px-3 uppercase py-1 border border-red-500 text-red-500 rounded">Rejected</button>
        </div>
      </div>
        `
    })

    const buttons = document.querySelectorAll(".tabBtn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("bg-blue-500", "text-white"));
    btn.classList.add("bg-blue-500", "text-white");
  });
});
 updateDashboard();
    
}



function updateStatus(id, newStatus){
  jobs = jobs.map(job => job.id === id ? {...job, status:newStatus} : job);

  renderJobs();
}


function deleteJob(id){
  jobs = jobs.filter(job => job.id !== id);
  updateDashboard();
  renderJobs();
}


function changeTab(tab){
  currentTab = tab;
  renderJobs();
}


function updateDashboard(){
  document.getElementById("allCount").innerText = jobs.length;
  document.getElementById("interviewCount").innerText = jobs.filter(job => job.status === "Interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(job => job.status === "Rejected").length;
}
renderJobs();