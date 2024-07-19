
/* 
Rock, Paper, Scissors Game in which the user plays against a bot

GET user selection between rock, paper, and scissor
COMPUTE computer rock, paper, and scissors selection using a random number
IF the user's input is beats the computer's selection, the user wins
ELIF the computer's input beats the user's input, the computer wins
ELSE nobody wins
*/
let playerScore;
let computerScore;

function getComputerChoice() {
    let choice = (parseInt(Math.random() * 99) % 3);

    switch (choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "ERROR: Invalid Choice"
    }

}

function getPlayerChoice() {
    let playerChoice = prompt('Rock / Paper / Scissors');
    return playerChoice.trim().toLocaleLowerCase();

}

function playRound(computerChoice, playerChoice) {
    let choices = `Choice | Player ${playerChoice} : ${computerChoice} CPU | `;
    let winAlert = 'Not too bad';
    let loseAlert = 'You suck';
    let drawAlert = 'Until next time';
    let victor;

    if (playerChoice === computerChoice) {
        alert(choices + drawAlert);
    }else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            alert(choices + winAlert)
            victor = "player";
        }else {
            alert(choices + loseAlert);
            victor = "cpu";
        }
    }else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            alert(choices + winAlert);
            victor = "player";
        }else {
            alert(choices + loseAlert);
            victor = "cpu";
        }
    }else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            alert(choices + winAlert);
            victor = "player";
        }else {
            alert(choices + loseAlert);
            victor = "cpu";
        }
    }else {
        alert('Have you never player rock, paper, scissors?');
    }

    return victor;
}

function onSelect(event) {
    let selected = event.target.textContent;

    playRound(getComputerChoice(), selected);
}

const rpsContainer = document.querySelector("div");
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";



[rockBtn, paperBtn, scissorsBtn].forEach((button) => {
    button.addEventListener("click", onSelect);
    rpsContainer.appendChild(button);
});
