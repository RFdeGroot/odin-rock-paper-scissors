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
const weaponsTitleHtml = document.getElementById("weaponsTitle");
const startButton = document.getElementById("startButton")

const getComputerChoice = () => {
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice
    }

function playRound(playerSelection) {
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
            resultsHtml.innerHTML = "Too Bad...You lost... The galaxy is destroyed"
            endGame();
            return gameWinner = "Computer"
        }
    } else if (winner == "player") {
        resultsHtml.innerHTML = `You won! ${playerSelection} beats ${computerSelection}`
        playerScore +=1
        playerScoreHtml.innerHTML = `You: ${playerScore}`
        if (playerScore == 5){
            resultsHtml.innerHTML = "You won!! The galaxy lives another day"
            endGame();
            return gameWinner = "Player"
        }
    } else {
        resultsHtml.innerHTML = "It's a tie"
    }
    round += 1;
    return winner;
}

function playRock() {
    playRound("rock");
}

function playPaper() {
    playRound("paper");
}

function playScissors() {
    playRound("scissors");
}

function playGame() {
    // Rest Scores
    playerScore = 0;
    computerScore = 0;
    round = 1;
    gameWinner = "";

    playerScoreHtml.innerHTML = `You: ${playerScore}`
    computerScoreHtml.innerHTML = `Computer: ${computerScore}`;
    weaponsTitleHtml.innerHTML = "Choose your weapon"
    
    // Add eventlisteners to play a round.
    playerRock.addEventListener("click", playRock);
    playerPaper.addEventListener("click", playPaper);
    playerScissors.addEventListener("click", playScissors);
}

function endGame() {
    weaponsTitleHtml.innerHTML = "Play again?"
    
    // Remove eventlisteners
    playerRock.removeEventListener("click", playRock)
    playerPaper.removeEventListener("click", playPaper)
    playerScissors.removeEventListener("click", playScissors)
}

startButton.addEventListener("click", playGame)




    
    
        

    

        
    
    console.log(playerScore);
    console.log(computerScore);

    








