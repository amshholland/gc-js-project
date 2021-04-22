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
    return array;
};

document.body.onload = shuffleCards(cardImgs);

// Flip cards after they're clicked
const cardsDiv = document.querySelector('.cards');

cardsDiv.addEventListener('click', (e) => {
    // Gets index set in data-index attribute from img's in HTML doc
    let index = e.target.getAttribute('data-index');
    // Reference array based on index defined by card clicked's data-index attribute
    let src = cardImgs[index];

    if (e.target.className === 'card') {
        // Simulate card being flipped
        e.target.classList.toggle('flipCard');
        // Delay card src being changed until after card is flipped
        setTimeout(() => {
            e.target.src = src;
        }, 100)
        // Modify src to different photo
        setTimeout(() => {
         e.target.classList.add('popOut');
        }, 100)

    }
});

// cardsDiv.addEventListener('click', (e) => {
//    if (e.target.className === 'card') {
//       e.target.classList.toggle('popOut');
//    }
// });