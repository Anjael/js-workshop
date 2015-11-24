slidenumbers: true

# Let's make a game with JavaScript

A gentle push into programming

---

# Goals of this workshop

- Dip your toes in the pool of programming.
- Learn the basic building blocks of **any** computer program.
- Start thinking like a programmer.
- Get the tools and motivation to start experimenting and exploring **on your own** (my favourite way to learn).


---

# A bit about me

- Mauro Gestoso. Pronounced however you like.
- From Buenos Aires, Argentina.
- Geeky person. Enjoys sci-fi novels, cycling and cups of tea.
- Self-taught programmer. Makes things for fun. Definitely **not** an expert.
- Works at MadLab.

---

# A bit about MadLab

- Manchester Digital Laboratory
- Not-for-profit grassroots digital innovation organisation.
- Courses, workshops, events, community groups on technology, arts and making.
- Two spaces: Northern Quarter and Salford.

---

# Progra-what?!

- The ancient art of giving instructions to a computer.
- Instructions are written in a text file, commonly refered to as 'code'. Computer later translates to ones and zeros.
- Camputers are only as smart as the code we write for them.
- Programming is about taking big problems and breaking them into small, more manageable ones.

---

# Why JavaScript?

- Programming languages are just tools. Hundreds of different ways of doing the same thing.
- JavaScript is the language of the Web. It makes websites interactive. It's **everywhere**. Examples: Gmail, [ElevatorJS](http://tholman.com/elevator.js/), [P5](http://p5js.org/examples/)
- Popularity, it's expanding outside the web. People are using it for apps, games, art, robots, drones, etc.
- Similarly written to other popular languages. Easier to switch later on.

---

# The Setup

- There is no setup!
- Your computer already has everything you need: 
    - A plain text editor to write the code (Notepad, TextEdit).
    - A web browser to run and view the code (Chrome, Firefox, Safari).
- Download project template and slides from:
    - [madlab.org.uk/workshops/make-a-game-with-javascript](#)

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
"But with escape characters I can do whatever I want.\nQuotation mark for days! \"\"\"\"\""
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

---



---
---
---
---
