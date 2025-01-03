
// Defining the required variables
let userScore = 0;
let computerScore = 0;
let message = document.querySelector('#msg');
let user = document.querySelector('#user-score');
let computer = document.querySelector('#computer-score');
const choices = document.querySelectorAll('.choice');

// function to generate the computer's choice
const genComputerChoice = () => { 
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// Function to change the text and background color based on the game outcome
const changeText = (num) => {
    if (num === 0) {
        message.textContent = "It's a tie!";
        message.style.backgroundColor = "#83B5D1";
    } else if(num === 1) {
        message.textContent = "You win!";
        message.style.backgroundColor = "green";
        userScore++;
        user.textContent = userScore;
    } else {
        message.textContent = "You lose!";
        message.style.backgroundColor = "red";
        computerScore++;
        computer.textContent = computerScore;
    }
};

// Function to check the winner and update the scores and message
const checkWin = (userChoice, computerChoice) => { 
    if ((userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")) {
            return 1;
    }  else {
        return -1;
    }
}


// Function to handle the game logic and update the scores and message
const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();
    if (userChoice === computerChoice) {
        changeText(0);
    } else {
        changeText(checkWin(userChoice, computerChoice));
    }

}

// Event listener for user's choice
choices.forEach((choice) => { 
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    })
});