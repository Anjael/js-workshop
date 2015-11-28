slidenumbers: true

# Let's make a game with JavaScript

A gentle push into programming

![inline](http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg)

---

# Goals of this workshop

- Dip your toes in the pool of programming.
- Learn the basic building blocks of **any** computer program.
- Start thinking like a programmer.
- Get the tools and motivation to start experimenting and exploring **on your own** (my favourite way to learn).


---

![left](buddha.png)

# A bit about me

- Mauro Gestoso. Pronounced however you like.
- From Buenos Aires, Argentina.
- Geeky person.
- Self-taught programmer. Makes things for fun. Definitely **not** an expert.
- Works at MadLab.

<--- That's me learning JavaScript through meditation.

---

![left fit 75%](madlab-logo.png)

# A bit about MadLab

- Manchester Digital Laboratory
- Not-for-profit grassroots digital innovation organisation.
- Courses, workshops, events, community groups on technology, arts and making.
- Two spaces: Northern Quarter and Salford. Projects all around Greater Manchester.
- [madlab.org.uk](http://madlab.org.uk)


---

# Progra-what?!

- The ancient art of giving instructions to a computer.
- Instructions are written in a text file, commonly refered to as 'code'. Computer later translates to ones and zeros.
- Camputers are only as smart as the code we write for them.
- Programming is about taking big problems and breaking them into small, more manageable ones.

^- Facebook example: how do you program friendship?

---

# Why JavaScript?

- Programming languages are just tools. Hundreds of different ways of doing the same thing.
- JavaScript is the language of the Web. It makes websites interactive. It's **everywhere**. Random examples: web apps, [ElevatorJS](http://tholman.com/elevator.js/), [P5](http://p5js.org/examples/)
- Popularity, it's expanding outside the web. People are using it for apps, games, art, robots, drones, etc.
- Similarly written to other popular languages. Easier to switch later on.

---

# The Setup

- There is no setup!
- Your computer already has everything you need: 
    - A plain text editor to write the code (Notepad, TextEdit).
    - A web browser to run and view the code (Chrome, Firefox, Safari).

---

# Download the empty project

[https://github.com/maurogestoso/js-workshop](https://github.com/maurogestoso/js-workshop)
or
[https://goo.gl/hACAAy](https://goo.gl/hACAAy)

![inline fit](github.png)

---

# Let's write some code

- Importance of having an objective to keep us on track.
- Let's make a **"Guess the number"** game! Now we have a problem.
- Understand the problem.
- Pseudo code: describe what the program does, step by step, in your own words.
- Break problems into smaller ones. Think one task at a time.

---

# Values and Data Types

- **Numbers**
- **Strings**
- **Booleans**
- Functions
- Objects
- Undefined

^
- Computers store information (or data) in ones and zeroes, or bits. Computers have billions of bits in memory and GAZILLIONS in hard drives. 
- In order to make sense of them, we represent information in chunks of bits we call values. 
- Values are used for different purposes, so we need different types to differentiate them.

---

# Numbers

- Integers ("whole" numbers) and floating point numbers (decimals).
- Basic mathematical operations are included in JavaScript.
- Remember order of operations! (use PEMDAS as mnemonic device).

```javascript
20 + 10 - 15        // Addition and subtraction
3 * 4 / 2           // Multiplication and division
(2 + 3) * 2         // Change order of operations
```

---

# Strings

- Represent text. "String of characters".
- Wrapped in 'single' or "double" quotation marks.
- Behave different to numbers: it makes no sense to subtract, multiply or divide text.
- Escape characters. Look them up!

```javascript
"Hello, I'm a string."
'I am also a string. I cannot use apostrophes with single quotation marks.'
"But with escape characters I can do whatever I want.\nQuotation marks for days! \"\"\"\"\""
"You can concatenate strings" + ", which means adding them together."
```

---

# Booleans

- They represent binary states: yes/no, 1/0, presence/absence.
- They are the result of comparisons and other logical statements, which have an absolute answer: true or false.
- Homework: look up logical operators. What do '&&', '||' and '!' do?

```javascript
3 == 3          // This is true, no doubt about it
2 > 1000        // This is false, clearly
4 < 4           // What do you think this is?
4 <= 4          // And this?
```

^
- Why not use text? Text is imprecise, can be misinterpreted.
- Is this shirt grey?
---

# JavaScript, the weird parts

- When you mix different value types, JS automatically converts types to make sense of it. It doesn't meant it will make sense to a human.
- Try these:

```javascript
true + 2        // What does this even mean?
"5" + 1         // The string '5' is different to the number 5, but JavaScript don't care!
"7" - 3         // Guess what's going to happen. What? Why?
"Hello" / 42    // NaN means you just went metaphysical.
```

- Just to be safe: don't mix apples and oranges (until you know what you're doing).

---

# Variables

- Remember values by giving them a name.

```javascript
// 'var' is a keyword, a special word for JS. It says 'we are about to define a variable'.
var name = "Mauro";
// The '=' operator means assignment of a value to a variable. 
var yearOfBirth = 1989;
```

- Variables behave **exactly** the same as values.

```javascript
// Don't confuse with the '==' operator, which means comparison.
var age = 2015 - yearOfBirth;
console.log("Hello, " + name + ". You are " + age + "years old.");
```

---

>You should imagine variables as tentacles, rather than boxes. They do not contain values; they grasp them—two variables can refer to the same value.
-- Marijn Haverbeke, "Eloquent JavaScript"

^
- Variables don't own values, they just point to them.
- Assign a variable to another variable, then change it.

---

# Let's save our program!

- Console vs. running a program.
- Expression: a piece of code that returns a value.
- Statement: a 'full sentence' of code. I doesn't have to return a value (it can), but it changes the state of your program. It carries meaning.

^- Our code so far was "in the air", it disappears when we refresh. Not really a program.
^- Explain workflow: edit, save, refresh.
^- Explain comments

---

# Functions

- A series of instructions wrapped inside a value. Give them a name and use it as many times as you want.
- Remember to call them!
- Functions can do 2 things:
    + Return a value
    + Change the state of the program
- Arguments: inputs to our function (we can have zero, one or many).

^- Recipe analogy. Boil water example.
- Go home function analogy.
- Make a greeting function.
- Make an average function.

---

# JavaScript's own functions

- We've seen one already:

```javascript
// console.log shows values to the user
console.log("I'm logging stuff into the console!");  
```

- User input functions:

```javascript
// 'prompt' asks the user to input a value, saves it as text
var name = prompt("What's your name?");
// 'confirm' asks the user for a boolean value
var hungry = confirm("Are you hungry?");
```

^-Stop to make v0.0 of the game.

---

# Making our program smarter

- So far our game runs in a straight line. That's boring.
- What are we missing?
    + Ability to make decisions.
    + Ability to do things many times automatically.

---

# Conditionals

- If a certain condition is met, we do something. If not (else), we do somethign different.
- Fork in the road. Our program's path splits, some pieces of code get ignored.

```javascript
var hungry = confirm("Are you hungry?");
if (hungry == true) {
    console.log("Me too! Let's go grab a slice of pizza.")
}
else {
    console.log("Stay here while I go get an entire pizza just for myself.")
}
```

---

# Nesting conditionals

- We can put conditions inside conditions to make more complex decisions:

```javascript
var hungry = confirm("Are you hungry?");
if (hungry == true) {
    var likesPizza = confirm("Do you like pizza?");
    if (likesPizza == true) {
        console.log("Pizza place around the corner. NOW.");
    }
    else {
        console.log("You monster!");
    }
}
else {
    console.log("Come watch me eat an entire pizza!");
}
```

---

# 'while' loops

- Repeat a block of code over an over again while a condition is met.
- Remember:
    + Change the state of the program inside the loop.
    + Think about the "exit condition". Avoid infinite loops.

```javascript
var counter = 10;
while (counter > 0) {
    console.log(counter);
    counter = counter - 1;
}
console.log("Launch!");
```

---

# 'for' loops

- Repeat a block of code a predefined amount of times.

```javascript
for (var counter = 10; counter > 0; counter = counter - 1) {
    console.log(counter);
}
console.log("Launch!");
```

---

# while vs. for

- In programming there are many different ways of doing the same things.
- Generally interchangeable.
- Rule of thumb:
    + When amount of repetition is known: for loop.
    + When amount of repetition is unknown: while loop.

---

# What do I do now? (I)

- Now you are **dangerous** with a laptop and a WiFi connection!
- Make more stuff! Become fluent in the basics of JS.
    + Make "Rock, Papers, Scissors", "Hangman" or a text adventure.
    + [Codecademy](https://www.codecademy.com/): interactive tutorials, good to learn from scratch but try to leave quickly!


---

# What do I do now? (II)

- Expand your JS knowledge: learn about arrays and objects.
    + Make a simple app to solve a common problem.
    + [Eloquent JavaScript](http://eloquentjavascript.net/): challenging but very thorough.

- Learn some HTML and CSS and start making interactive websites.
    + Make a website for a friend or an application (calculator, to do lists, address book)
    + [FreeCodeCamp](http://www.freecodecamp.com/): great curriculum and community.


---

# What do I do now? (III)

- Into hardware and electronics? Get an Arduino or a Raspberry Pi. Learning Python, Java or Processing should be easy for you now.
- Get creative and play with [P5.js](http://p5js.org/), expand what JS can do.
    + Daniel Shiffman [YouTube channel](https://www.youtube.com/user/shiffman/playlists?sort=dd&shelf_id=14&view=50) and [books](http://shiffman.net/) <--- Brilliant

---

![original](space.jpg)

# Thank you!
You can email me any questions or feedback at:

mauro@madlab.org.uk

I'll be happy to help out a fellow programmer :)


