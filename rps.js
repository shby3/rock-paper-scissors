let humanScore = 0;
let compScore = 0;

choices = ['rock', 'paper', 'scissors'];
const getRandomInt = max => Math.floor(Math.random() * max);

// Variables to change in the DOM
const humanScoreElem = document.querySelector("#humanScoreElem");
const compScoreElem = document.querySelector("#compScoreElem");
const roundChoice = document.querySelector("#roundChoice");
const roundResult = document.querySelector("#roundResult");
const gameResult = document.querySelector("#gameResult");

// Function to return 'rock', 'paper', or 'scissors'
const getcompChoice = () => choices[getRandomInt(3)];

// Take a player choice and a comp choice and determine the winner.
function playRound(humanChoice, compChoice) {
    roundChoice.textContent = (`You play ${humanChoice} and the comp plays ${compChoice}\r\n`);
    if (humanChoice === compChoice) {
        roundResult.textContent = ("It's a tie!");
        return;
    }
    if ((humanChoice === 'rock' && compChoice === 'scissors') || (humanChoice === 'scissors'
&& compChoice === 'paper') || humanChoice === 'paper' && compChoice === 'rock') {
        roundResult.textContent = (`${humanChoice} beats ${compChoice}. You win!`);
        _updateScore('human');
        return;
}
    roundResult.textContent = (`${compChoice} beats ${humanChoice}. You lose... too bad.`);
    _updateScore('comp');
}

// Update the score and declare a winner if a player reaches 5 points.
function _updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
        humanScoreElem.textContent = (`Human: ${humanScore}`);
    } else {
        compScore++;
        compScoreElem.textContent = (`Computer: ${compScore}`);
    }

    if (humanScore === 5 || compScore === 5) {
        gameResult.textContent = (`${winner} wins!`);
    }
}

// Event listeners for clicking rock button
const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
    playRound("rock", getcompChoice());
});
// Event listener for clicking paper button
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    playRound("paper", getcompChoice());
});
// Event listener for clicking scissors button
const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getcompChoice());
});