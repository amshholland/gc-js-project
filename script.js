// // array of image objects, consists of back of card and front of card
// let cardImgs = [
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture1.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture2.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture3.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture4.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture5.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture6.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture7.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture8.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture9.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture1.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture2.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture3.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture4.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture5.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture6.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture7.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture8.jpg" />'
//     },
//     {
//         front: '<img src="images/cardFront.jpg"',
//         back: '<img src="images/picture9.jpg" />'
//     }
// ];

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
    "images/picture9.jpg"]

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
console.log(shuffleCards(cardImgs));

// Flip cards after they're clicked
const cardsDiv = document.querySelector('.cards');

cardsDiv.addEventListener('click', (e) => {
    let index = e.target.getAttribute('data-index');
    console.log(index);
    let src = shuffleCards(cardImgs);

    if (e.target.className === 'card') {
        // Simulate card being flipped
        e.target.classList.toggle('flipCard');
        // Modify src to different photo
        e.target.src = src;
    }
});

