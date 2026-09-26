const c=document.getElementById("chart");
const ctx=c.getContext("2d");
const data=[40,70,30];

ctx.fillStyle="#38bdf8";
data.forEach((v,i)=>{
ctx.fillRect(100+i*120,300-v*3,60,v*3);
});
