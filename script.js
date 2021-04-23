// Array of images to be shuffled
const cardImgs = ["images/picture1.jpg",
    "images/picture2.jpg",
    "images/picture3.jpg",
    "images/picture4.jpg",
    "images/picture5.jpg",
    "images/picture6.jpg",
    "images/picture7.jpg",
    "images/picture8.jpg",
    "images/picture9.jpg",
    "images/picture1.jpg",
    "images/picture2.jpg",
    "images/picture3.jpg",
    "images/picture4.jpg",
    "images/picture5.jpg",
    "images/picture6.jpg",
    "images/picture7.jpg",
    "images/picture8.jpg",
    "images/picture9.jpg"];

let openedCards = [];
// const cards = document.querySelectorAll('.card');
const cardsDiv = document.querySelector('.cards');
let cards = document.querySelectorAll('.card');
let matchCount = 0;
const reset = document.getElementById('reset');

document.body.onload = shuffleCards(cardImgs);

// function to shuffle the order of the image array
function shuffleCards(array) {
    var currentIndex = array.length, tempValue, rndmNum;

    while (currentIndex !== 0) {
        rndmNum = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = array[currentIndex];
        array[currentIndex] = array[rndmNum];
        array[rndmNum] = tempValue;
    }
    return array
};

// Shows shuffled cards for 4 seconds after player pushed start
function showAllCards(card) {
    for (card of cards) {
        card.src = cardImgs[card.getAttribute('data-index')];
    }
    setTimeout(() => {
        for (card of cards) {
            card.classList.remove('flipCard');
            card.src = 'images/cardFront.jpg';
            setTimeout(() => {
            }, 100);
        }
    }, 4000);
}

// Compare cards flipped with src
function compare() {
    let card1 = openedCards[0];
    let card2 = openedCards[1];

    if (cardImgs[card1.getAttribute('data-index')] === cardImgs[card2.getAttribute('data-index')]) {
        return matched(cardImgs[card1.getAttribute('data-index')]);
    }
    else {
        return noMatch();
    }
}

function matched(card) {
    matchCount++;
    let src = card;
    setTimeout(() => {
        for (card of openedCards) {
            card.classList.add('matched');
            document.getElementById('matchedCards').insertAdjacentHTML("afterend", `<img class="card" src="${src}" />`);
        }
    }, 1500);

    if (matchCount === 9) {
        gameOver();
    }
    setTimeout(() => {
        emptyArray();
    }, 1510);
}

function noMatch() {
    let src = 'images/cardFront.jpg'
    setTimeout(() => {
        for (card of openedCards) {
            card.classList.remove('flipOver');
            card.classList.add('flipBackOver');
        }
    }, 1500);
    setTimeout(() => {
        for (card of openedCards) {
            card.src = src;
        }
    }, 1500);

    setTimeout(() => {
        emptyArray();
    }, 1510);
}


function emptyArray() {
    openedCards = [];
}

cardsDiv.addEventListener('click', (e) => {
    // Gets index set in data-index attribute from img's in HTML doc
    let index = e.target.getAttribute('data-index');
    // Reference array based on index defined by card clicked's data-index attribute
    let src = cardImgs[index];

    if (e.target.className === 'card') {
        if (openedCards.length === 2) {
            return;
        }
        // Simulate card being flipped
        e.target.classList.toggle('flipCard');
        // Delay card src being changed until after card is flipped
        // Modify src to different photo
        setTimeout(() => {
            e.target.src = src;
        }, 100)
        openedCards.push(e.target);
        setTimeout(() => {
            var len = openedCards.length;
            if (len === 2) {
                return compare();
            }
        }, 200)
    }
});

function gameOver() {
    stopTimer();
    finalTime();
    addScore(useName, useTime);
}

reset.addEventListener('click', (e) => {
    flipBackOver()
    match = 0;
    stopTimer();
    shuffleCards(cardImgs);
});