const timeStart = document.getElementById("start");

timeStart.addEventListener("click", ()=>{
    setTimeout(() => {
        document.body.classList.toggle("switch");
    }, 3000);
})