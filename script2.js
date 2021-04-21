
const start = document.getElementById("start");
const reset = document.getElementById("reset");

var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
start.onclick = () => setInterval(setTime, 1000);
reset.onclick = () => playing = false;
let playing;

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