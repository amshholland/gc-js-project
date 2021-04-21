let hour = 0;
let minute = 0;
let second = 0;

const timeStart = document.getElementById("start");

timeStart.addEventListener("click", ()=>{
    setTimeout(() => {
        document.body.classList.toggle("switch");
    }, 1000); // 1000ms = 1s
})