const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 1;
let gameWinner = "";

const playerScoreHtml = document.getElementById("playerScore");
const computerScoreHtml = document.getElementById("computerScore");
const resultsHtml = document.getElementById("resultsHtml")
const playerRock = document.getElementById("Rock");
const playerPaper = document.getElementById("Paper");
const playerScissors = document.getElementById("Scissors");


const getComputerChoice = () => {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
    }

function playRound (playerSelection) {
    const computerSelection = getComputerChoice();

    if (computerSelection == "rock"){
        if (playerSelection == "rock"){
            winner = "tie"
        } else if (playerSelection == "paper") {
            winner = "player"
        } else {
            winner = "computer"
        } 
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            winner = "computer"
        } else if (playerSelection == "paper") {
            winner = "tie"
        } else {
            winner = "player"
        }
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            winner = "player"
        } else if (playerSelection == "paper") {
            winner = "computer"
        } else {
            winner = "tie"
        }
    }

    if (winner == "computer") {
        resultsHtml.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`
        computerScore += 1;
        computerScoreHtml.innerHTML = `Computer: ${computerScore}`;
        if (computerScore == 5){
            return gameWinner = "Computer"
        }
    } else if (winner == "player") {
        resultsHtml.innerHTML = `You won! ${playerSelection} beats ${computerSelection}`
        playerScore +=1
        playerScoreHtml.innerHTML = `You: ${playerScore}`
        if (playerScore == 5){
            return gameWinner = "Player"
        }
    } else {
        resultsHtml.innerHTML = "It's a tie"
    }
    round += 1;
    return winner;
}


// Add eventlisteners to play a round.

playerRock.addEventListener("click", function(){
    const playerSelection = "rock";
    playRound(playerSelection);
    })

playerPaper.addEventListener("click", function(){
    const playerSelection = "paper";
    playRound(playerSelection);
    })

playerScissors.addEventListener("click", function(){
    const playerSelection = "scissors";
    playRound(playerSelection);
    })
    
    
        

    

        
    
    console.log(playerScore);
    console.log(computerScore);

    








