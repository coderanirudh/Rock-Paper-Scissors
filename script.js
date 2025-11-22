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
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You win!");
        humanScore++;
    } else if (
        (humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Rock")
    ) {
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("Invalid input");
    }
}

for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const validRound = playRound(humanSelection, computerSelection);
    
}

