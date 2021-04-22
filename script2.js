
// grabbing 'start' and 'reset' buttons from html
const start = document.getElementById("start");
const reset = document.getElementById("reset");

// adjusting the labels for seconds/minutes in the html
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = -1;
var myVar = setTime();

//when you click on start, this well set the timer to start going.
let startTimer = start.onclick = () => setInterval(setTime, 1000);
reset.onclick = () => stopPlaying;
let playing;


//setting the time to add seconds, then when reaching 60 seconds, start adding minutes.
function setTime() {
  {++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));} 
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
//clearing the interval to stop the timer when pressing reset.
function stopPlaying(){
    clearInterval(myVar)
}