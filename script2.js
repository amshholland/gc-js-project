"use strict"
// let hour = 0;
// let minute = 0;
// let second = 0;
// let millisecond = 0;

// let begin;
// let playing = true;
// console.log(playing.value)
// const start = document.getElementById("start");
// console.log(start)


// // start.addEventListener("click",(e) => {
// //     timer();
// // });

// reset.onclick = function(){
//     return playing = false;
// };

// start.onclick = function(){
//     timer(playing)
// };


// function startTimer() {
//     begin = setInterval(() => {timer(); }, 10);
// }

// function reset() {
//     hour = 0;
//     minute = 0;
//     second = 0;
//     document.getElementById('hour').innerText = '00';
//     document.getElementById('minute').innerText = '00';
//     document.getElementById('second').innerText = '00';
//     document.getElementById('millisecond').innerText = '00';
// }



// function timer(playing) {
//     while (playing === true){

//     if ((millisecond += 10) == 1000) { // when millisecond is == 1000, it will move to second
//         millisecond = 0;
//         second++;
//     }
//     if (second == 60){ // when second == 60, then it will move to minute.
//         second = 0;
//         minute++;
//     }
//     if (minute ==60){
//         minute ==0;
//         hour ++;
//     }
//     document.getElementById('hour').innerText = returnData(hour);
//     document.getElementById('minute').innerText = returnData(minute);
//     document.getElementById('second').innerText = returnData(second);
//     document.getElementById('millisecond').innerText = returnData(millisecond); // changing the .innerText to show the millisecond
// } 
// }

// //   document.timer.start.onclick = () => startTimer();

//   function returnData(input){
//       return input > 10 ? input : `0${input}`
//   }
  


// const timeStart = document.getElementById("start");

// timeStart.addEventListener("click", ()=>{
//     setTimeout(() => {
//         document.body.classList.toggle("switch");
//     }, 1000); // 1000ms = 1s
// })



var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}