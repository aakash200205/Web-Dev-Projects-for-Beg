let editedPlayer=0;

let players=[
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');

const openPlayer1EditBtn = document.getElementById('edit-player-1-btn');
const openPlayer2EditBtn = document.getElementById('edit-player-2-btn');
const cancelConfigBtnElement = document.getElementById('cancel-btn');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('error-para');

openPlayer1EditBtn.addEventListener('click', openPlayerConfig)
openPlayer2EditBtn.addEventListener('click',openPlayerConfig)

cancelConfigBtnElement.addEventListener('click',closePlayerConfig);
formElement.addEventListener('submit',savePlayerConfig);