let startBtn = document.querySelector(".startBtn");
let startPage1=document.querySelector(".pageCont");

console.log("start button", startBtn)

startBtn.addEventListener("click", function(){
    startPage1.style.display="none";
});