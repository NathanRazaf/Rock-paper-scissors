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

const buttons = document.querySelectorAll('button');
const result = document.querySelector('div[class="result"]');
const score = document.querySelector('div[class="score"]');

function playGame(e) { {
    
    const compChoice = getComputerChoice();
    const yourChoice = this.className;
    result.innerHTML = `${playRound(yourChoice,compChoice)}`;
    if (playerScore == 5) {
        result.innerHTML = "L'humain gagne... pour le moment."
        playerScore=0;
        compScore=0;
    }
    else if (compScore == 5) {
        result.innerHTML = "Le robot gagne et brise ton poignet."
        playerScore=0;
        compScore=0;
    }
    score.innerHTML = `${playerScore} - ${compScore}`;
}}


buttons.forEach(button => button.addEventListener('click', playGame));
