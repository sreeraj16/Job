const jobsDiv = document.getElementById("jobs");

// show loaders
for(let i=0;i<4;i++){
  jobsDiv.innerHTML += `<div class="skeleton"></div>`;
}

// fake API delay
setTimeout(loadJobs,1500);

function loadJobs(){
  jobsDiv.innerHTML = "";
  const jobs=[
    {title:"Frontend Developer",company:"Google",skills:["React","JS"]},
    {title:"Backend Intern",company:"Amazon",skills:["Node","MongoDB"]},
    {title:"UI Engineer",company:"Meta",skills:["UX","CSS"]}
  ];

  jobs.forEach(j=>{
    jobsDiv.innerHTML+=`
      <div class="job-card">
        <div>
          <h3>${j.title}</h3>
          <p>${j.company}</p>
          ${j.skills.map(s=>`<span class="tag">${s}</span>`).join("")}
        </div>
        <button class="btn">Apply</button>
      </div>
    `;
  });
}
