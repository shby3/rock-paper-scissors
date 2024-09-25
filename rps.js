let humanScore = 0;
let computerScore = 0;

choices = ['rock', 'paper', 'scissors'];
const getRandomInt = max => Math.floor(Math.random() * max);

// Variables to change in the DOM
const humanScoreElem = document.querySelector("#humanScoreElem");
const computerScoreElem = document.querySelector("#computerScoreElem");
const roundChoice = document.querySelector("#roundChoice");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameResult");
const restartBtn = document.querySelector("#restartBtn");
const overlay = document.querySelector("#overlay");
const endContainer = document.querySelector(".endContainer");

// Win/loss images to add to the DOM (in the overlay) on win/loss
const winImg = document.createElement("IMG");
winImg.setAttribute("src", "./images/human-win.jpg");
winImg.setAttribute("alt", "Man comforting tense father at desk with laptop");
winImg.setAttribute("class", "medMargin");
winImg.setAttribute("height", "310px");
winImg.setAttribute("width", "520px");

const lossImg = document.createElement("IMG");
lossImg.setAttribute("src", "./images/computer-win.jpg");
lossImg.setAttribute("alt", "Business woman pumping fists in air at desk with laptop");
lossImg.setAttribute("class", "medMargin");
lossImg.setAttribute("height", "310px");
lossImg.setAttribute("width", "520px");

// Function to return 'rock', 'paper', or 'scissors'
const getcomputerChoice = () => choices[getRandomInt(3)];

// Take a player choice and a computer choice and determine the winner.
function playRound(humanChoice, computerChoice) {
    roundChoice.textContent = (`You play ${humanChoice} and the computer plays ${computerChoice}\r\n`);
    if (humanChoice === computerChoice) {
        roundResult.textContent = ("It's a tie!");
        return;
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors'
&& computerChoice === 'paper') || humanChoice === 'paper' && computerChoice === 'rock') {
        roundResult.textContent = (`${humanChoice} beats ${computerChoice}. You win!`);
        _updateScore('human');
        return;
}
    roundResult.textContent = (`${computerChoice} beats ${humanChoice}. You lose... too bad.`);
    _updateScore('computer');
}

// Update the score and declare a winner if a player reaches 5 points.
function _updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
        humanScoreElem.textContent = (`Human: ${humanScore}`);
    } else {
        computerScore++;
        computerScoreElem.textContent = (`computer: ${computerScore}`);
    }

    // If there is a winner, turn on the overlay with the win/loss image.
    if (humanScore === 5 || computerScore === 5) {
        const endImg = document.querySelector(".endContainer img");
        if (winner === 'human') {
            gameResult.textContent = ("Wow, you won! You are really good at this game.");
            endContainer.replaceChild(winImg, endImg);
        } else {
            gameResult.textContent = ("You lose. Sorry. Remember it's just a game.");
            endContainer.replaceChild(lossImg, endImg);
        }
        overlayOn();
    }
}

// Event listeners for clicking rock button
const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => playRound("rock", getcomputerChoice()));

// Event listener for clicking paper button
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => playRound("paper", getcomputerChoice()));

// Event listener for clicking scissors button
const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => playRound("scissors", getcomputerChoice()));

// Functions to turn the overlay element on/off.
function overlayOn() {
    overlay.style.display = "flex";

}
function overlayOff() {
    overlay.style.display = "none";
}

// Function to restart the game after the overlay has been turned on.
function restart() {
    humanScore = 0;
    computerScore = 0;
    humanScoreElem.textContent = (`Human: ${humanScore}`);
    computerScoreElem.textContent = (`computer: ${computerScore}`);
    roundChoice.textContent = ("");
    roundResult.textContent = ("");
    overlayOff();
}
restartBtn.addEventListener("click", restart);