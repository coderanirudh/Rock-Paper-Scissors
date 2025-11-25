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
    return humanChoice;

}

function playGame() {
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
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (
            (humanChoice === "Rock" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Rock")
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else {
            console.log("Invalid input");
            return false;
        }
        console.log(`Score - Human score: ${humanScore} Computer score: ${computerScore}`);
        return true;
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const validRound = playRound(humanSelection, computerSelection);
        if (!validRound) {
            console.log("Enter a valid input!");
            i--;
        }
    }
}

function displayGameResult() {
    if (humanScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (humanScore == computerScore) {
        console.log("Ooh! It's a tie! Play again!");
    } else {
        console.log("Shame! You lose! Play again!");
    }
}

playGame();
displayGameResult();



