// # Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)

// # Bersagliamo i dadi dell'user

const oneDiceUser = document.querySelector('.fa-dice-one.user');
const twoDiceUser = document.querySelector('.fa-dice-two.user');
const threeDiceUser = document.querySelector('.fa-dice-three.user');
const fourDiceUser = document.querySelector('.fa-dice-four.user');
const fiveDiceUser = document.querySelector('.fa-dice-five.user');
const sixDiceUser = document.querySelector('.fa-dice-six.user');

// # Bersagliamo i dadi della cpu

const oneDiceCpu = document.querySelector('.fa-dice-one.cpu');
const twoDiceCpu = document.querySelector('.fa-dice-two.cpu');
const threeDiceCpu = document.querySelector('.fa-dice-three.cpu');
const fourDiceCpu = document.querySelector('.fa-dice-four.cpu');
const fiveDiceCpu = document.querySelector('.fa-dice-five.cpu');
const sixDiceCpu = document.querySelector('.fa-dice-six.cpu');

// # Bersagliamo le scritte

const win = document.getElementById('win');
const lose = document.getElementById('lose');
const pari = document.getElementById('pari');

const allDice = ['oneDice', 'twoDice', 'threeDice', 'fourDice', 'fiveDice', 'sixDice'];

//Massimi e minimi per il lancio dei dadi

const max = 6;
const min = 1;

// # Chiediamo all'utente se vuole giocare: se si allora facciamo tirare il dado

const userChoice = prompt('Vuoi giocare a dadi? ("si" o "no")', 'si');

// # Abilitiamo il controllo

if (userChoice === 'si') {
    const userNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    const cpuNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(userNumber);
    console.log(cpuNumber);

    // Prendiamo il dado dell'user

    for (let i = 0; i < 6; i++) {
        if (userNumber === 1) {
            oneDiceUser.classList.remove('d-none');
            oneDiceUser.classList.add('d-block');
        } else if (userNumber === 2) {
            twoDiceUser.classList.remove('d-none');
            twoDiceUser.classList.add('d-block');
        } else if (userNumber === 3) {
            threeDiceUser.classList.remove('d-none');
            threeDiceUser.classList.add('d-block');
        } else if (userNumber === 4) {
            fourDiceUser.classList.remove('d-none');
            fourDiceUser.classList.add('d-block');
        } else if (userNumber === 5) {
            fiveDiceUser.classList.remove('d-none');
            fiveDiceUser.classList.add('d-block');
        } else if (userNumber === 6) {
            sixDiceUser.classList.remove('d-none');
            sixDiceUser.classList.add('d-block');
        }
    }

    for (let i = 0; i < 6; i++) {
        if (cpuNumber === 1) {
            oneDiceCpu.classList.remove('d-none');
            oneDiceCpu.classList.add('d-block');
        } else if (cpuNumber === 2) {
            twoDiceCpu.classList.remove('d-none');
            twoDiceCpu.classList.add('d-block');
        } else if (cpuNumber === 3) {
            threeDiceCpu.classList.remove('d-none');
            threeDiceCpu.classList.add('d-block');
        } else if (cpuNumber === 4) {
            fourDiceCpu.classList.remove('d-none');
            fourDiceCpu.classList.add('d-block');
        } else if (cpuNumber === 5) {
            fiveDiceCpu.classList.remove('d-none');
            fiveDiceCpu.classList.add('d-block');
        } else if (cpuNumber === 6) {
            sixDiceCpu.classList.remove('d-none');
            sixDiceCpu.classList.add('d-block');
        }
    }

    if (userNumber > cpuNumber) {
        win.classList.remove('d-none');
        win.classList.add('d-block');
    } else if (userNumber < cpuNumber) {
        lose.classList.remove('d-none');
        lose.classList.add('d-block');
    } else {
        pari.classList.remove('d-none');
        pari.classList.add('d-block');
    }

} else {
    alert('Alla prossima!');
}

