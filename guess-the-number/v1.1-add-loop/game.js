// A nice intruduction message.

var myName = "The Computer";

console.log("Hi, I'm " + myName + ". This is my first game!");
console.log("Welcome to Guess the Number");

// Let's define a simple greeting function.

function greeting() {
	// Ask the user for their name and save it into a name variable
	var name = prompt("What's your name?");
	// Say hi to the user, addressing the name we just got.
	console.log("Hello, " + name + ". Nice to meet you.");
}

// Now let's call the function.
greeting();

// Define the number the computer's "thinking" of.
var compNumber = 5;

// Define the guess variable
var guess;
var guessesLeft = 5;

while (guessesLeft > 0) {
	// Ask the user for a guess
	console.log("I'm thinking of a number between 1 and 10");
	guess = prompt("Take a guess:");
	guessesLeft = guessesLeft - 1;

	if (guess == compNumber) {
		console.log("Correct! You won with " + guessesLeft + " guesses left.")
		break;
	}

	else if (guess > compNumber) {
		console.log("Nope! Lower.");
		continue;
	}
	
	else if (guess < compNumber) {
		console.log("Nope! Higher.");
		continue;
	}

}

if (guess != compNumber) {
	console.log("You run out of guesses, I'm afraid.");
	console.log("The number I was thinking about was " + compNumber);
}



