const u = JSON.parse(localStorage.getItem("currentUser"));

email.innerText = u.email;
av.innerText = u.email[0].toUpperCase();

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
let apps = JSON.parse(localStorage.getItem("applications")) || [];
let saved = JSON.parse(localStorage.getItem("savedJobs")) || [];

jobs.innerText = jobs.length;
apps.innerText = apps.filter(a=>a.studentId===u.id).length;
saved.innerText = saved.filter(s=>s.studentId===u.id).length;

rec.style.display = u.role==="recruiter"?"block":"none";
adm.style.display = u.role==="admin"?"block":"none";

function logout(){
localStorage.removeItem("currentUser");
location.href="index.html";
function toggleProfile(){
  const m=document.getElementById("profileMenu");
  m.style.display = m.style.display==="block"?"none":"block";
}

}
