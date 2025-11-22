let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let outputChoice = Math.random();
    let choice = '';

    if(outputChoice < 2/3 && outputChoice > 1/3) {
        return choice = "Rock";
    } else if (outputChoice < 1/3) {
        return choice = "Paper";
    } else {
        return choice = "Scissors";
    }
}


function getHumanChoice() {
    let humanChoice = prompt("Enter your choice between (Rock / Paper / Scissors) to play: ");
    console.log(humanChoice);
}

