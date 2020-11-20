const buttonRock = document.getElementById("rockButton");
const buttonPaper = document.getElementById("paperButton");
const buttonScissors = document.getElementById("scissorsButton");
const buttonReset = document.getElementById("resetButton");

const currentRound = document.getElementById("currentRound");
const roundResult = document.createElement("p");
roundResult.id = "roundResult";
const history = document.getElementById("history");

const roundNumber = document.getElementById("roundNumber");
roundNumber.innerText = `Round: ${currentTurn}`;

const scoreBoard = document.getElementById("scoreBoard");
scoreBoard.innerText = `Human: ${humanScore} | CPU: ${computerScore}`;


var handler = function(choice) {
    round(choice, computerPlay())
};

buttonRock.addEventListener("click", handler("ROCK"));

buttonPaper.addEventListener("click", handler("PAPER"));

buttonScissors.addEventListener("click", handler("SCISSORS"));

buttonReset.addEventListener("click", () => resetGame());