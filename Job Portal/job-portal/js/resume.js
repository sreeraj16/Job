function upload(e){
const file=e.target.files[0];
const url=URL.createObjectURL(file);
document.getElementById("preview").src=url;
}
