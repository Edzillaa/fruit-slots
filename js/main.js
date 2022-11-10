/*----- constants -----*/
const options = [
    '../images/fruitarr/fruit1.png', 
    '../images/fruitarr/fruit2.png',
    '../images/fruitarr/fruit3.png',
    '../images/fruitarr/fruit4.png',
    '../images/fruitarr/fruit5.png',
    '../images/fruitarr/fruit6.png',
    '../images/fruitarr/fruit7.png',
    '../images/fruitarr/fruit8.png',
    '../images/fruitarr/fruit9.png',
    '../images/fruitarr/fruit10.png',
    '../images/fruitarr/fruit11.png',
    '../images/fruitarr/fruit12.png',
];

let slot1 = null;
let slot2 = null;
let slot3 = null;

/*----- app's sta0te (variables) -----*/
let credits = 150;

/*----- cached element references -----*/
let spinBtnEl = document.getElementById('spin-btn');
let resetBtnEl = document.getElementById('reset-btn');
let creditsDivEl = document.getElementById('credits-div');
let slotEls = document.querySelectorAll('.slot');
let messageEl = document.getElementById('message');


/*----- event listeners -----*/
spinBtnEl.addEventListener('click', handleSpin)
resetBtnEl.addEventListener('click', handleReset)

/*----- functions -----*/
function handleReset(evt) {
    credits = 150;
    slot1 = '?';
    slot2 = '?';
    slot3 = '?';
render()
}

function handleSpin(evt) {
    if (credits >= 10) {
        let randomInt1 = Math.floor(Math.random() * options.length);
        slot1 = options[randomInt1];
    
        let randomInt2 = Math.floor(Math.random() * options.length);
        slot2 = options[randomInt2];
    
        let randomInt3 = Math.floor(Math.random() * options.length);
        slot3 = options[randomInt3];
    
        if (slot1 == slot2 && slot2 == slot3) {
            credits = credits + 50;
        } else {
            credits = credits - 10;
        }
        render()
    }
}

function render() {
    slotEls.forEach(slot => {
        slot.textContent = "";
    })
    slotEls[0].style.backgroundImage = `url(${slot1})`;
    slotEls[1].style.backgroundImage = `url(${slot2})`;
    slotEls[2].style.backgroundImage = `url(${slot3})`;
    creditsDivEl.textContent = credits;
    if (credits == 0) {
        messageEl.textContent = 'Game Over, hit RESET';
    } else {
        messageEl.textContent = 'Spin to WIN';
    }
}


