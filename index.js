#! /usr/bin/env node
import inquirer from "inquirer";
// 10 computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show results
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number guessing game!");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1-6: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You Guessed Right Number!");
}
else {
    console.log("You Guessed Wrong Number!");
}
