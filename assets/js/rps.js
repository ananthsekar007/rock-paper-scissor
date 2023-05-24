// the js code goes here

let score = 0;

function resetGame() {
    score = 0;
    document.getElementById("userChoice").textContent = "";
    document.getElementById("compChoice").textContent = "";
    document.getElementById("result").textContent = "";
    document.getElementById("scoreNum").textContent = score;
}

function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        displayResult(userChoice, computerChoice, "It's a tie!");
        
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        score++;
        displayResult(userChoice, computerChoice, "You win!");
    } else {
        score--;
        displayResult(userChoice, computerChoice, "Computer wins!");
    } 
}

function displayResult(userChoice, compChoice, result) {
    document.getElementById("userChoice").textContent = `Your choice : ${userChoice}`;
    document.getElementById("compChoice").textContent = `Computer choice : ${compChoice}`;
    document.getElementById("result").textContent = result;
    document.getElementById("scoreNum").textContent = score;
}