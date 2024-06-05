// 2. Guessing Game (Using while loop )
// Objective: Create a simple number guessing game where the user tries to guess a randomly 
// generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number 
// guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a 
// random number between 1 and the maximum value. Log this value to the console for 
// development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set 
// it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the 
// correct guess is made.
// 6. Check the user's guess: Inside the loop, check if the current guess matches the random 
// number. Provide feedback if the guess is too high or too low.


// Set a maximum value

const maxValue: number = 6;

// Generate a random number

const randomNumber: number = Math.floor(Math.random()*maxValue) + 1;
console.log(`Random number: ${randomNumber}`);

// Track the guess status

let isCorrect: boolean = false;

// Simulate user guesses

const guesses: number[] = [1, 2, 3, 4, 5, 6];

// Iterate over guesses

let i : number = 0;

while (!isCorrect && i < guesses.length){
    const currentGuess: number = guesses[i];
    console.log(`User guess: ${currentGuess}`);

    if(currentGuess === randomNumber) {
        console.log("Congratulations! You guessed correct number ");
        isCorrect = true;
    }else if (currentGuess < randomNumber) {
        console.log("Your guess is too low");
    }else{
        console.log("Your guess is too high.");
    }
    i++
}
if(!isCorrect){
    console.log("Sorry, You have used all your guesses.Better luck next time");
    
}
