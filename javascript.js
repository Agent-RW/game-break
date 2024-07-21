const DISPLAY = document.querySelector("#display");
const CONTROLS = document.querySelector("#controls");
const TARGET_SCORE = 5;
let playerScore;
let computerScore;

function getComputerChoice() {
  let choice = parseInt(Math.random() * 99) % 3;

  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
    default:
      return "ERROR: Invalid Choice";
  }
}

function playRound(playerChoice) {
  let victor;
  let computerChoice = getComputerChoice();

  bestOption = compareOptions(playerChoice, computerChoice);

  if (bestOption === "ERROR") {
    return "Error handling needs to be added | Have player replay";
  }

  if (bestOption === "draw") {
    victor = "Nobody";
  } else if (bestOption === playerChoice) {
    victor = "Player";
    playerScore++;
  } else {
    victor = "Computer";
    computerScore++;
  }

  SCORE_DISPLAY.textContent = `(Player) ${playerScore} : ${computerScore} (CPU)`;
  ROUND_DISPLAY.textContent = `${playerChoice} vs. ${computerChoice} | ${victor}'s Point`;

  if (playerScore >= TARGET_SCORE || computerScore >= TARGET_SCORE) {
    //Called setTimeout otherwise alert will interrupt DOM rendering before score updates
    setTimeout(() => {
      alert(`GAME OVER | ${victor} Wins!!!`);
    }, 1);
    startNewGame();
  }
}

function compareOptions(a, b) {
  let bestOption;

  if (a === b) {
    bestOption = "draw";
  } else if (a === "rock") {
    if (b === "scissors") {
      bestOption = a;
    } else {
      bestOption = b;
    }
  } else if (a === "paper") {
    if (b === "rock") {
      bestOption = a;
    } else {
      bestOption = b;
    }
  } else if (a === "scissors") {
    if (b === "paper") {
      bestOption = a;
    } else {
      bestOption = b;
    }
  } else {
    bestOption = "ERROR";
  }

  return bestOption;
}

function onSelect(event) {
  let playerChoice = event.target.textContent.toLocaleLowerCase();
  playRound(playerChoice);
}

function startNewGame() {
  playerScore = 0;
  computerScore = 0;

  SCORE_DISPLAY.textContent = `(Player) ${playerScore} : ${computerScore} (CPU)`;
  ROUND_DISPLAY.textContent = "Choose Rock/Paper/Scissors to Begin"
}

const SCORE_DISPLAY = document.createElement("div");
const ROUND_DISPLAY = document.createElement("div");
DISPLAY.appendChild(SCORE_DISPLAY);
DISPLAY.appendChild(ROUND_DISPLAY);

const ROCK_BTN = document.createElement("button");
const PAPER_BTN = document.createElement("button");
const SCISSOR_BTN = document.createElement("button");
ROCK_BTN.textContent = "Rock";
PAPER_BTN.textContent = "Paper";
SCISSOR_BTN.textContent = "Scissors";
[ROCK_BTN, PAPER_BTN, SCISSOR_BTN].forEach((button) => {
  button.addEventListener("click", onSelect);
  CONTROLS.appendChild(button);
});

startNewGame();
