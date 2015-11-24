console.log("Welcome to Guess the Number");

function greeting() {
	var name = prompt("What's your name?");
	console.log("Hello, " + name + ". Nice to meet you.");
}

var compNumber = 5;
console.log("I'm thinking of a number between 1 and 10");

var guess = prompt("Take a guess:");

var result = guess == compNumber;

console.log("Have you won? " + result);