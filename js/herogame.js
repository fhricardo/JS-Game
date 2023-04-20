const hero = document.querySelector('.hero');
const mushroom = document.querySelector('.mushroom');
const sky = document.querySelector('.sky');
const terrain = document.querySelector('.terrain');

console.log(hero);
// document.addEventListener('keydown', checkKey);

function checkKey(event) {
    var theKey = event.keyCode;
    // console.log(theKey);
    if (theKey == 32) {
        hero.classList.add('jump');
        console.log(hero.classList.add('jump'));
        setTimeout(() => {
            hero.classList.remove('jump');
        }, 500)

    }
}

const loop = setInterval(() => {
    const mushPos = mushroom.offsetLeft;
    const heroPos = +window.getComputedStyle(hero).bottom.replace('px', '');


    // console.log(heroPos);
    if (mushPos <= 100 && mushPos > 0 && heroPos <= 70) {
        mushroom.style.animation = 'none';
        mushroom.style.left = `${mushPos}px`;
    }
    if (mushPos <= 120) {
        hero.classList.add('jump');
        console.log(hero.classList.add('jump'));
        setTimeout(() => {
            hero.classList.remove('jump');
        }, 500)

    }
}, 10)
document.addEventListener('keydown', checkKey);