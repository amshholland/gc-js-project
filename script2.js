
// grabbing 'start' and 'reset' buttons from html
const start = document.getElementById("start");

// adjusting the labels for seconds/minutes in the html
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = -1;
var myVarInterval = 0;

start.addEventListener("click", (e) => {
  myVarInterval = setInterval(setTime, 1000);
});

//setting the time to add seconds, then when reaching 60 seconds, start adding minutes.
function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}

function stopTimer() {
  clearInterval(myVarInterval);
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  }
    return valString;
  }
