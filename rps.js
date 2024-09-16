choices = ['rock', 'paper', 'scissors']

getRandomInt = max => Math.floor(Math.random() * max)

getComputerChoice = () => choices[getRandomInt(3)]

console.log(getComputerChoice())