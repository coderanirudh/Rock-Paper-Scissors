

function getComputerChoice() {
    let outputChoice = Math.random();

    if(outputChoice < 2/3 && outputChoice > 1/3) {
        console.log("Rock");
    } else if (outputChoice < 1/3) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}

getComputerChoice();

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice between (Rock / Paper / Scissors) to play: ");

}