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

const buttons = document.querySelectorAll("#container button");

const rock = buttons[0];
const paper = buttons[1];
const scissors = buttons[2];

rock.addEventListener("click", () => {
    playRound("rock");
    console.log("rock is clicked");
})

paper.addEventListener("click", () => {
    playRound("paper");
    console.log("paper is clicked");
})

scissors.addEventListener("click", () => {
    playRound("scissors");
    console.log("scissors is clicked");
})


const div = document.createElement("div");
document.body.appendChild(div);

function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

        div.textContent += `Human Choice: ${humanChoice}, Computer Choice: ${computerChoice}\n`;
        console.log("Human Choice: ", humanChoice);
        console.log("Computer Choice: ", computerChoice);

        if (humanChoice === computerChoice) {
            div.textContent += `It's a tie\n`;
            console.log("It's a tie")
        } else if (
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") ||
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ) {
            div.textContent += `You Win! ${humanChoice} beats ${computerChoice}\n`;
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else if (
            (humanChoice === "Rock" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Rock")
        ) {
            div.textContent += `You lose! ${computerChoice} beats ${humanChoice}\n`;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        } else {
            div.textContent += `Invalid input\n`;
            console.log("Invalid input");
            return false;
        }
        div.textContent += `Score - Human score: ${humanScore} Computer score: ${computerScore}\n`
        console.log(`Score - Human score: ${humanScore} Computer score: ${computerScore}`);
        return true;
    }

function displayGameResult() {
    if (humanScore > computerScore) {
        div.textContent += `Congratulations! You Win!`;
        console.log("Congratulations! You win!");
    } else if (humanScore == computerScore) {
        div.textContent += `Ooh! It's a tie! Play again!`;
        console.log("Ooh! It's a tie! Play again!");
    } else {
        div.textContent += `Shame! You lose! Play again!`
        console.log("Shame! You lose! Play again!");
    }
}

displayGameResult();



