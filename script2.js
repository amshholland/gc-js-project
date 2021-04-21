let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let begin;

document.timer.start.onclick = () => start();
document.timer.reset.onclick = () => reset();

function start() {
    begin = setInterval(() => {timer(); }, 10);
}

function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisecond').innerText = '00';
}

function timer() {
    if ((millisecond += 10) == 1000) { // when millisecond is == 1000, it will move to second
        millisecond = 0;
        second++;
    }
    if (second == 60){ // when second == 60, then it will move to minute.
        second = 0;
        minute++;
    }
    if (minute ==60){
        minute ==0;
        hour ++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElemetnById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond); // changing the .innerText to show the millisecond
  }

  function returnData(input){
      return input > 10 ? input : `0${input}`
  }
  


// const timeStart = document.getElementById("start");

// timeStart.addEventListener("click", ()=>{
//     setTimeout(() => {
//         document.body.classList.toggle("switch");
//     }, 1000); // 1000ms = 1s
// })