// array of images to be inserted into HTML
let cardImgs = ['<img src="images/picture1.jpg" />', '<img src="images/picture2.jpg" />', '<img src="images/picture3.jpg" />', '<img src="images/picture4.jpg" />', '<img src="images/picture5.jpg" />', '<img src="images/picture6.jpg" />', '<img src="images/picture7.jpg" />', '<img src="images/picture8.jpg" />', '<img src="images/picture9.jpg" />', '<img src="images/picture1.jpg" />', '<img src="images/picture2.jpg" />', '<img src="images/picture3.jpg" />', '<img src="images/picture4.jpg" />', '<img src="images/picture5.jpg" />', '<img src="images/picture6.jpg" />', '<img src="images/picture7.jpg" />', '<img src="images/picture8.jpg" />', '<img src="images/picture9.jpg" />'];

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

// Flip cards after they're clicked
const cardsDiv = document.querySelector('.cards');

cardsDiv.addEventListener('click', (e) => {
    if (e.target.className === 'card') {
        // Simulate card being flipped
        e.target.classList.toggle('flipCard');
        // Modify src to different photo
        e.target.src = 'images/picture2.jpg';
    }
});
