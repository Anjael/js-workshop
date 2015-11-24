Notes on first run:

- Don't go off topic, keep explanations shorter because time goes faster than you think.
- Have better links between topics.
- 


# Let's make a game with JavaScript

## Goal

The goal of this workshop is to give you a first experience with programming and teach the basic building blocks of any program in any language.

## Progra-what?
Programming is the ancient art of writing instructions (commonly referred to as "code") for a computer to perform operations. It's the human equivalent of giving someone a to-do list, with detailed instructions of how to do each task because they are not very bright. 

EXPLAIN BETTER

Computers are only as smart as the code we write. They will do EXACTLY what you tell them and they will do it well, but if there is an error, 99% of the times it will be the fault of the programmer.

Programming is about taking big problems, breaking them into smaller, more manageable problems, and solving them one by one. No one writes a program from beginning to end in one sitting. Programs are built, feature by feature, testing along the way until everything comes together. It won't work the first time, it won't work the second time, nor the third, nor the fourth, but it will work in the end.


## Why JavaScript:
Programming experts will argue all day long about what is the best programming language. The problem with arguing in front of people who don't know anything about programming is that you expose them to a level of complexity and to make decisions they are not ready for. This is why I'm doing this workshop, to get beginners to start experimenting with code and discover it at their own pace.

Analogy: When you go buy a car, you don't need to decide what is the best engine. After a lot of studying you can, but you need a car now, and you need one that works, not the best one.

JavaScript was invented to make websites interactive. Nowadays it's so popular and ubiquitous that people are making applications, videogames, art, flying drones, controlling robots... You can do pretty much anything you want nowadays.

MAKE SHORTER

Programming languages are tools, some of them are better for a certain task than others. There is no perfect programming language. Your goal should be to learn how to program, not how to program in a certain language. Your knowledge is transferrable from one language to another because it's the concepts that matter.

Since it's so ubiquitous, you are going to encounter JS sooner or later. Moreover, the JS syntax (i.e. how it is written) is very fairly similar to other popular languages, so it won't be hard to switch in the future.

Explain syntax.

ALMOST 15min --> Make shorter

## Setup:
There's no setup! Your computer already has everything you need to start programming in JavaScript. Convenient, huh?

You will need: 

- A simple text editor, Notepad or Textedit will do.
- A modern web browser (Chrome, Firefox, Safari, Edge)

[Explain project setup, HTML file, JS script]

Since JS is the language of the web, browsers have a JavaScript interpreter included in them.

[Access the console]
This is a console, it's a way to type one thing at a time into a computer and immediately get the computers answer back. They are super useful as a learning tool.

If it doesn't understand anything, it will throw an error and tell you why and where it happened (as best as it can).

Start getting used seeing errors as guidance and not as failure. Every single programmer gets numerous errors on a daily basis. Errors are not a stop sign that tell you "you are bad at programming", errors point you in the direction of the next problem you should solve. If you think about it, this is great advice for life, humans can learn a lot from computers.

## Goal: Guess the number game
When I started writing this workshop I was all over the place, getting distracted by every single topic and spending too much time in unnecessary details.

Experimentation with constraints: imposing limits to your experiments boosts creativity and prevents you from going on too many tangents (I definitely will do this).

The computer "thinks" of a number and the player takes a guess. The computer says "higher" or "lower" a limited number of times until the player guesses or runs out of guesses.

What's the first thing that we need for this game?

## Primitive values

### Numbers

Show numbers (integers and floats), basic operators.

### Text

Show strings, show difference with numbers, show some errors

Need a way to remember values:

### Variables

Variables are names we associate with values to keep track of them over time. They behave exactly the same as values, we can perform the same operations with them.

Explain how variables are not boxes, they just point to a value. Show what happens when we make a variable equal to another variable.

Importance of types! When we see the values it's easy to tell what type they are, but when they are stored in a variable we can't see it. 

Show type functions: typeof(), Number(), String()

Explain the difference between running lines of code in the console and running a whole program from a script.

What's a function?

### Functions

A function is like a variable, but instead of storing a value, we store instructions to do something. Think of a program as a recipe: we want to make a cup of tea. The recipe says "boil some water" but it doesn't tell you how to boil water. In your head ("your memory") you know the steps to boiling water.

There are generally 2 types of functions:
- Functions that do or change something in you program:
```javascript
function changeName(newName) {
    userName = newName;
}
```
- Functions that return a value:
```javascript
function average(a, b) {
    return (a + b) / 2;
}
```

### Booleans
Booleans are values that allow us to perform logical operations. They indicate is something true/false, good/bad, full/empty, etc. They will help our programs make decisions and store information in a more meaningful way.

Show true, false, and, or, comparison operators

### Nothingness
The last 2 primitive values represent nothing. "undefined" is JavaScript's way of saying that something hasn't been asigned a value yet. It's useful to never use it as a programmer so when you see it you know why it's there. "null" also represents nothingness but it's meant to be used by the user. 0 is not nothing, it's a value. Empty string "" is not nothing, it's a string. "null" is just "null".

## Making our programs smarter

So far our instructions have run one by one, from beginning to end, the computer hasn't missed a single one. This is great because our programs can do a lot of operations, really fast and it's pretty much 100% reliable. But we are making a game, and we want our program to react depending on the player's input.

### Conditionals

Conditionals allow your program to make decisions and execute different blocks of code depending on them. Example: if you are hungry, you eat, else you keep going. (use confirm)

Show if, else, else if

Show nested conditionals

### Loops

Loops allow us to execute a block of code many times and stop when something changes. Example: loop of eating with confirm.

Show while and for loops, difference, break




