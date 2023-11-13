let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let img1Element = document.querySelector('.img1');
img1Element.setAttribute('src', '/images/dice' + randomNumber1 + '.png');

let randomNumber2 = Math.floor(Math.random() * 6) + 1;  // Generate a new random number
let img2Element = document.querySelector('.img2');
img2Element.setAttribute('src', '/images/dice' + randomNumber2 + '.png');

if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = '🚩 Player One Wins';
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').textContent = 'Player Two Wins 🚩';
} else {
    document.querySelector('h1').textContent = 'Draw';
}
