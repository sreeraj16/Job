const sound = new Audio("assets/notify.mp3");

function getNotifications(){
  return JSON.parse(localStorage.getItem("notifications")) || [];
}

function saveNotifications(n){
  localStorage.setItem("notifications",JSON.stringify(n));
}

function notify(msg){
  const list = getNotifications();
  list.unshift({
    msg,
    time:new Date().toLocaleTimeString(),
    read:false
  });
  saveNotifications(list);
  updateBell();

  // toast popup
  const t=document.createElement("div");
  t.className="notify";
  t.innerText=msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

function updateBell(){
  const list=getNotifications();
  const unread=list.filter(n=>!n.read).length;
  const badge=document.getElementById("badge");
  if(badge){
    badge.innerText=unread;
    badge.style.display=unread? "block":"none";
  }
}
function clearAll(){
  localStorage.removeItem("notifications");
  updateBell();
  document.getElementById("notifyList").innerHTML="<p style='padding:10px'>No notifications</p>";
}

function toggleNotify(){
  const panel=document.getElementById("panel");
  const list=getNotifications();
  const box=document.getElementById("notifyList");
  box.innerHTML="";
  list.forEach(n=>{
    box.innerHTML+=`
      <div class="notify-item ${n.read?'':'unread'}">
        ${n.msg}<br>
        <small>${n.time}</small>
      </div>
    `;
    n.read=true;
  });
  saveNotifications(list);
  updateBell();
  panel.style.display = panel.style.display==="block"?"none":"block";
  document.addEventListener("DOMContentLoaded",()=>{
  updateBell();
});
document.addEventListener("click",e=>{
  const panel=document.getElementById("panel");
  const bell=document.querySelector(".bell");
  if(!panel || !bell) return;

  if(!panel.contains(e.target) && !bell.contains(e.target)){
    panel.style.display="none";
  }
});

}

// initialize
updateBell();
