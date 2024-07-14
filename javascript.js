
/* 
Rock, Paper, Scissors Game in which the user plays against a bot

GET user selection between rock, paper, and scissor
COMPUTE computer rock, paper, and scissors selection using a random number
IF the user's input is beats the computer's selection, the user wins
ELIF the computer's input beats the user's input, the computer wins
ELSE nobody wins
*/

function getComputerChoice() {
    let choice = (parseInt(Math.random() * 99) % 3);

    switch (choice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "ERROR: Invalid Choice"
    }

}

function getHumanChoice() {
    return prompt('Choose', 'Rock / Paper / Scissors');

}

function playRound() {

}

console.log(`Computer's Choice: ${getComputerChoice()}`);
console.log(`Player's Choice: ${getHumanChoice()}`)