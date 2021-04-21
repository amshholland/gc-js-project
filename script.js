let cardImgs = ['<img src="images/picture1.jpg" />', '<img src="images/picture2.jpg" />', '<img src="images/picture3.jpg" />', '<img src="images/picture4.jpg" />', '<img src="images/picture5.jpg" />', '<img src="images/picture6.jpg" />', '<img src="images/picture7.jpg" />', '<img src="images/picture8.jpg" />', '<img src="images/picture9.jpg" />', '<img src="images/picture1.jpg" />', '<img src="images/picture2.jpg" />', '<img src="images/picture3.jpg" />', '<img src="images/picture4.jpg" />', '<img src="images/picture5.jpg" />', '<img src="images/picture6.jpg" />', '<img src="images/picture7.jpg" />', '<img src="images/picture8.jpg" />', '<img src="images/picture9.jpg" />'];

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
    let imgIndex = e.target.getAttribute('data-Index')
    console.log(imgIndex);

    if (e.target.className === 'card') {
        // Simulate card being flipped
        e.target.classList.toggle('flipCard');
        // Modify src to different photo
        e.target.src = cardImgs[imgIndex];
        console.log(e.target.src);
    }
});

