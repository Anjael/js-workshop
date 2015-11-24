// A nice intruduction message.

var myName = "Mauro"

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

// Let's put the code for one round inside a function so we can play many times.
function playRound(){
	// Ask the user for a guess
	console.log("I'm thinking of a number between 1 and 10");
	var guess = prompt("Take a guess:");

	// We compare the user's guess to the computer's number
	var result = guess == compNumber;

	if (result == true) {
		console.log("Correct! You are very good at this.");
	}
	else {
		if (guess > compNumber) {
			console.log("Nope! Lower.");
		}
		else if (guess < compNumber) {
			console.log("Nope! Higher.");
		}
	}
}

playRound();
