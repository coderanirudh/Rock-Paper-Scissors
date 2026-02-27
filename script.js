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
div.style.whiteSpace = "pre-line";

function playRound(humanChoice) {
        humanChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();

        const computerChoice = getComputerChoice();

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
        
        checkGameOver();
    }

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {

        if (humanScore > computerScore) {
            div.textContent += `🎉 You win the game!\n`;
            alert("🎉 You win the game!");
        } else {
            div.textContent += `💻 Computer wins the game!\n`;
            alert("💻 Computer wins the game!");
        }

        div.textContent += `--- Game Over ---\n\n`;

        // Reset scores for next game
        humanScore = 0;
        computerScore = 0;
    }
}



