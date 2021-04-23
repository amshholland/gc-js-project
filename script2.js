
// grabbing 'start' and 'reset' buttons from html
const start = document.getElementById("start");

// adjusting the labels for seconds/minutes in the html
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var myVarInterval = 0;

let leaderboard = [];
let playerScore = document.getElementById("scores");

// variable to store name in at start of game
let useName = document.getElementById("name");
// variable to store time
let useTime = document.getElementById("gametime");

// When start clicked, user get peek of shuffled cards for 4 seconds, then timer starts
start.addEventListener("click", (e) => {
  showAllCards(cardImgs);
  totalSeconds = 0;
  secondsLabel.innerHTML = '00';
  minutesLabel.innerHTML = '00';

  setTimeout(() => {
    myVarInterval = setInterval(setTime, 1000);
    // when start is clicked, store name in variable
    useName = useName.value;
  }, 4000);
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

// function to assign variable with time after game ends
function finalTime() {
  useTime = useTime.innerText;
}

// class/constructor to make array of leaderboard
function NewScore(name, time) {
  this.name = name;
  this.time = time;
}
// function to add score to leaderboard
function addScore(name, time) {
  var score = new NewScore(name, time); // create instince of object
  leaderboard.unshift(score);
  playerScore.insertAdjacentHTML("afterend", `<div>${leaderboard[0].name} ${leaderboard[0].time}</div>`);
  // after push use Number(array.time).sort() to order array based on time
}
