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
const cardsDiv = document.querySelector('.cards');

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
    console.log(array);
    return array;
};

// Shows shuffled cards for a brief moment after player pushed start
function peekShuffled() {

}

document.body.onload = shuffleCards(cardImgs);

// Shows all cards unshuffled
function unshuffled() {

}



function compare() {
    let card1 = openedCards[0];
    let card2 = openedCards[1];
    // Compare cards flipped with src
    console.log(cardImgs[card1.getAttribute('data-index')]);
    console.log(cardImgs[card2.getAttribute('data-index')]);

    if (cardImgs[card1.getAttribute('data-index')] === cardImgs[card2.getAttribute('data-index')]) {
        return matched();
    }
    else {
        flipBackOver();
    }
}

let matchCount = 0;
function matched() {
    matchCount++;
    console.log(`matchCount: ${matchCount}`); //*********** */
    setTimeout(() => {
        for (card of openedCards) {
            card.classList.add('matched');
        }
    }, 1500);
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

function endGame() {

}

// Flip cards after they're clicked
// Limit flipped cards to 2 -- absolutely stumped
// push to array
// Compare cards flipped with src, showing both while comparing
// Delay to allow user to compare cards
// If cards match, remove from board
// If cards do not match, flip back over 
// Remove classList flipcard
