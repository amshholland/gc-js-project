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
console.log(cardsDiv);
let matchCount = 0;
const reset = document.getElementById('reset');

for (car in cardsDiv) {
    console.log(car);
}

console.log(document.body.onload = shuffleCards(cardImgs));

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
    // showAllCards();
};

// Shows shuffled cards for a brief moment after player pushed start ********************* on start button
// function showAllCards() {
//     for (card in cards) {
//         for (cardImg in cardImgs) {
//             card.classList.add('flipCard');
//             cards.src = cardImgs[cardImg];
//         }
//     }
// }

function compare() {
    let card1 = openedCards[0];
    let card2 = openedCards[1];
    // Compare cards flipped with src
    console.log(cardImgs[card1.getAttribute('data-index')]);
    console.log(cardImgs[card2.getAttribute('data-index')]);

    if (cardImgs[card1.getAttribute('data-index')] === cardImgs[card2.getAttribute('data-index')]) {
        return matched(cardImgs[card1.getAttribute('data-index')]);
    }
    flipBackOver();
}

function matched(card) {
    matchCount++;
    let src = card;
    console.log(matchCount);
    setTimeout(() => {
        for (card of openedCards) {
            card.classList.add('matched');
            console.log(document.getElementById('matchedCards').innerHTML = `<img class="card" src="${src}" />`);
        }
    }, 1500);

    if (matchCount === 9) {
        stopTimer();
        finalTime();
    }
    setTimeout(() => {
        emptyArray();
    }, 1510);
}

function flipBackOver() {
    let src = 'images/cardFront.jpg'
    setTimeout(() => {
        for (card of openedCards) {
            card.src = src;
            card.classList.remove('flipCard');
        }
    }, 1500);
    setTimeout(() => {
        emptyArray();
    }, 1510);
}

function emptyArray() {
    console.log(openedCards);
    openedCards = [];
    console.log(openedCards);
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

reset.addEventListener('click', (e) => {
    flipBackOver()
    match = 0;
    stopTimer();
    return shuffleCards(cardImgs);
});


