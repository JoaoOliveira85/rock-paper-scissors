const POSSIBLEMOVES = ["ROCK", "PAPER", "SCISSORS"];
let numberOfTurns = 5;
let currentTurn = 0;
let computerScore = 0;
let humanScore = 0;

function computerPlay() {
    return POSSIBLEMOVES[Math.floor(Math.random() * 3)];
}

function round(humanChoice, computerChoice){
    currentTurn++;
    if (currentTurn < numberOfTurns) {
        if (evaluateWinner(computerChoice, humanChoice) === 1) {
            computerScore++;
            printResult("Computer Wins: " + computerChoice + " beats " + humanChoice + "!");
        } else if (evaluateWinner(computerChoice, humanChoice) === 2) {
            humanScore++;
            printResult("Human Wins: " + humanChoice + " beats " + computerChoice + "!");
        } else {
            printResult("Draw! Let's try again!");
        }
    } else {
        if (computerScore > humanScore) {
            printResult("GAME OVER! COMPUTER WINS!")
        } else {
            printResult("GAME OVER! HUMAN WINS!")
        }
    }
}

function printResult(gameText) {
    roundResult.innerText = gameText;
    currentRound.appendChild(roundResult);
    const historyLine = document.createElement("p");
    historyLine.id = `round${currentTurn}`;
    historyLine.innerText = gameText;
    history.appendChild(historyLine);
    roundNumber.innerText = `Round: ${currentTurn}`;
    scoreBoard.innerText = `Human: ${humanScore} | CPU: ${computerScore}`;
}


function evaluateWinner(player1, player2) {
    if (((POSSIBLEMOVES.indexOf(player1) + 1) % 3) > ((POSSIBLEMOVES.indexOf(player2) + 1) % 3)) {
        return 1;
    } else if (((POSSIBLEMOVES.indexOf(player1) + 1) % 3) < ((POSSIBLEMOVES.indexOf(player2) + 1) % 3)) {
        return 2;
    } else {
        return 3;
    }
}

function resetGame(){
    for (let i = currentTurn; i >= 1; i--) {
        let historyToRemove = document.getElementById(`round${i}`);
        historyToRemove.remove();
    };
    let resultToRemove = document.getElementById("roundResult");
    roundResult.remove();
    numberOfTurns = 5;
    currentTurn = 0;
    humanScore = 0;
    computerScore = 0;
    roundNumber.innerText = `Round: ${currentTurn}`;
    scoreBoard.innerText = `Human: ${humanScore} | CPU: ${computerScore}`;  
}