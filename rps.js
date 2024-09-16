choices = ['rock', 'paper', 'scissors']
getRandomInt = max => Math.floor(Math.random() * max)

// Function to return 'rock', 'paper', or 'scissors'
getComputerChoice = () => choices[getRandomInt(3)]

// Prompt the user for a valid choice and return it.
function getHumanChoice() {
    let choice = prompt("Rock, paper, or scissors?")
    while (!choices.includes(choice.toLowerCase())) {
        choice = prompt("You can only choose rock, paper, or scissors.")
    }
    return choice
}