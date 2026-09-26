let apps=JSON.parse(localStorage.getItem("applications"))||[];
let users=JSON.parse(localStorage.getItem("users"))||[];

apps.filter(a=>jobs.some(j=>j.id==a.jobId))
.forEach(a=>{
let stu=users.find(u=>u.id==a.studentId);
list.innerHTML+=`
<div class="card">
<p>${stu.email}</p>
<select onchange="update('${a.jobId}','${a.studentId}',this.value)">
<option>Applied</option>
<option>Shortlisted</option>
<option>Rejected</option>
</select>
</div>`;
});
