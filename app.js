const guess = document.querySelector(".guess");
const message = document.querySelector(".message");
const scoreEl = document.querySelector(".score > span");
const highscoreEl = document.querySelector(".highscore > span");
const number = document.querySelector(".number");

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");


let score = 20;
let playGame = true;

const randomNo = Math.floor(Math.random() * 20) + 1;

const winGame = () => {
    let guessValue = parseInt(guess.value);
    if (playGame) {
        if (guessValue === randomNo) {
            message.textContent = "Congrats  !";
            document.querySelector("body").style.backgroundColor = "green";
            highscoreEl.textContent = score;
            number.textContent = randomNo;
        }
        else if (guessValue < randomNo) {
            message.textContent = "Too low..."
        }
        else if (guessValue > randomNo) {
            message.textContent = "Too high..."
        }
    }
}


const refresh = () => {
    scoreEl.textContent = 20;
    highscoreEl.textContent = 0;
    guess.value = " ";
    document.querySelector("body").style.backgroundColor = "#222";
    message.textContent = "Start guessing...";
    number.textContent = "?";

}

checkBtn.addEventListener('click', function () {
    score -= 1;
    scoreEl.textContent = score;
    winGame()
})

againBtn.addEventListener('click', refresh)
