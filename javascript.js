
/* 
Rock, Paper, Scissors Game in which the user plays against a bot

GET user selection between rock, paper, and scissor
COMPUTE computer rock, paper, and scissors selection using a random number
IF the user's input is beats the computer's selection, the user wins
ELIF the computer's input beats the user's input, the computer wins
ELSE nobody wins
*/

function getComputerChoice() {
    return (parseInt(Math.random() * 100) % 3);
}

function getHumanChoice() {

}

function playRound() {

}

console.log(`Computer's Choice: ${getComputerChoice()}`);