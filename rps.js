let humanScore = 0;
let computerScore = 0;

choices = ['rock', 'paper', 'scissors'];
getRandomInt = max => Math.floor(Math.random() * max);

// Function to return 'rock', 'paper', or 'scissors'
getComputerChoice = () => choices[getRandomInt(3)];

// Prompt the user for a valid choice and return it.
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?");
    while (!choices.includes(choice.toLowerCase())) {
        choice = prompt("You can only choose rock, paper, or scissors.");
    }
    return choice.toLowerCase();
}

// Take a player choice and a computer choice and determine the winner.
function playRound(humanChoice, computerChoice) {
    console.log(`You play ${humanChoice} and the computer plays ${computerChoice}`);
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return;
    }
    if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors'
&& computerChoice === 'paper') || humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        console.log(`${humanChoice} beats ${computerChoice}. You win!`);
        return;
}
    computerScore++;
    console.log(`${computerChoice} beats ${humanChoice}. You lose... too bad.`);
}

// Play 5 rounds and keep playing until a winner can be decalred.
function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    // Keep playing if there is a tie.
    while (humanScore === computerScore) {
        console.log("Sudden Death");
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(`Computer: ${computerScore} \n User: ${humanScore}`);
    console.log(humanScore > computerScore ? "You win! Congrats :)" : "You lost. Sorry :(");
    // Reset the scores.
    humanScore = 0;
    computerScore = 0;
}