// Exercise 4.5
let prize = Number(prompt("Enter any number between 0 to 10"))
let message = "You selected number " + prize + ": ";
switch (prize) {
    case 0:
        message += "You won a toy car!";
        break;
    case 1:
    case 2:
        message += "You won a small teddy bear!";
        break;
    case 3:
    case 4:
        message += "You won a box of cookies!";
        break;
    case 5:
        message += "You won a box of chocolates!";
        break;
    case 6:
    case 7:
        message += "You won a gift card!";
        break;
    case 8:
    case 9:
        message += "You won a dollhouse!";
        break;
    case 10:
        message += "Jackpot! You won a vacation trip!";
        break;
    default:
        message += "Invalid selection. Please choose a number between 0 and 10.";
}
console.log(message);
// Project 01: Evaluating a number Game.
let dynamicNumber = 35;
let userNumber = Number(prompt("Guess the dynamic number in the code"))
if (userNumber > dynamicNumber) {
    console.log("The number you entered is greater than dynamic number in the code.");
} else if (userNumber === dynamicNumber) {
    console.log("The number you entered is equal to dynamic number in the code.");
} else {
    console.log("The number you entered is less than dynamic number in the code.");
}
// Project 02: Friend checker Game.
let friend = prompt("Enter your good name.")
    friend = friend.charAt(0).toUpperCase() + friend.slice(1).toLowerCase();
switch (friend) {
    case "Anila":
        console.log("User is a friend of mine.")
        break;
    case "Naureen":
        console.log("User is a friend of mine.")
        break;
    case "Afshan":
        console.log("User is a friend of mine.")
        break;
    case "Bushra":
        console.log("User is a friend of mine.")
        break;
    default:
        console.log("I don't know this person.")
}
// Project 03: Rock Paper Scissors Game.
let object = ["Rock", "Paper", "Scissor"]
let playerChoice = prompt("Please enter your choice (Rock, Paper, or Scissors):");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (!object.includes(playerChoice)) {
        console.log("Invalid choice. Please refresh and enter Rock, Paper, or Scissors.");
    } else {
        let computerChoiceIndex = Math.floor(Math.random() * 3);
        let computerChoice = object[computerChoiceIndex];
        let message = `Player's choice: ${playerChoice}\nComputer's choice: ${computerChoice}\n`;
    
        if (playerChoice === computerChoice) {
            message += "It's a tie!";
        } else if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            message += "Player wins!";
        } else {
            message += "Computer wins!";
        }
        console.log(message);
    }

