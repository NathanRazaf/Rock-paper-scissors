let playerScore = 0;
let compScore = 0;

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);
    switch (randomInt) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(playerSel,compSel) {
    playerSel = playerSel.toUpperCase().substring(0,1)+playerSel.toLowerCase().substring(1);
    switch (playerSel+compSel) {
        case "RockPaper":
            compScore++
            return `You lose ! ${compSel} beats ${playerSel}`;
        case "PaperScissors":
            compScore++
            return `You lose ! ${compSel} beats ${playerSel}`;
        case "ScissorsRock":
            compScore++
            return `You lose ! ${compSel} beats ${playerSel}`;
    
        case "RockScissors":
            playerScore++
            return `You win ! ${playerSel} beats ${compSel}`;
        case "PaperRock":
            playerScore++
            return `You win ! ${playerSel} beats ${compSel}`;
        case "ScissorsPaper":
            playerScore++
            return `You win ! ${playerSel} beats ${compSel}`;

        case "RockRock":
            return "Tied up !";
        case "PaperPaper":
            return "Tied up !";
        case "ScissorsScissors":
            return "Tied up !";

        default:
            return `Please write a valid choice between Rock, Paper or Scissors. "${playerSel}" is not a valid choice.`
    }
}

function game(roundNumbers) {
    playerScore=0;
    playerScore=0;

    for (let i=0; i<roundNumbers; i++) {
        let playerSelection = prompt("Your choice?");
        let compSelection = getComputerChoice();
        console.log(`${playRound(playerSelection,compSelection)}, ${playerScore} - ${compScore}`)
    }

    if (playerScore > compScore) {
        return "You win the match !"
    }
    else if (compScore > playerScore) {
        return "Robot won, you're a failure."
    }
    else {
        return "...Well, that's embarassing"
    }
}