// This Keyword
// - "This" keyword refers to an object that is executing the current piece of code

// const student = {
//   name: "Ram",
//   age: 20,
//   math: 79,
//   science: 90,
//   english: 89,
//   getAvg() {
//     console.log(this);
//     let avg = (this.math + this.science + this.english) / 3;
//     console.log(`${this.name} got avg marks = ${avg}`);
//   },
// };

// TRY AND CATCH
// - the try statement allows you ti define a block of code to be tested for errors while it is being executed
// - the catch statement allows you to define a block of code to be executed, if an error occurs in the try block

console.log("hello");

try {
  console.log(a);
} catch (err) {
  console.log("catch an error.. a is not defined!");
  console.log(err);
}

console.log("hello2");

// Miscellaneous Topics

// Arrow Functions

// - syntax...
// const func = (arg1, arg2..) => {function definition}

const sum = (a, b) => {
  console.log(a + b);
};

const pow = (a, b) => {
  console.log(a ** b);
};

const hello = () => {
  console.log("Hello Friends!");
};

// Arrow Functions -- Implicit return (automatic return)

// const func = (arg1,arg2..) => (value)

const mul = (a, b) => a * b;

// Set Timeout
// - syntax
// setTimeout(function, timeout)

console.log("Hi there!");

setTimeout(() => {
  console.log("Nepal");
}, 4000);

console.log("Welcome to");

// Set Interval
// - syntax
// setInterval(fucntion, interval)

console.log("Hi there!");

// setInterval(() => {
//   console.log("Nepal");
// }, 2000);

console.log("Welcome to");
// to stop setInterval, type clearInterval(id)

// THIS WITH ARROW FUNCTIONS

const student = {
  name: "Ram",
  marks: 90,
  prop: this, // global scope
  getName: function () {
    console.log(this);
    return this.name;
  },

  getMarks: () => {
    console.log(this); // parent's scope -> window
    return this.marks;
  },
  getInfo1: function () {
    setTimeout(() => {
      console.log(this); // student (arrow function call parent)
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
      console.log(this); // window (normal function call window or object)
    }, 2000);
  },
};

// Q1. Write an arrow function that returns the square of a number 'n'.

const square = (n) => n * n;
console.log(square(4));

// Q2. Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id = setInterval(() => {
  console.log("Hello World");
}, 2000);

setTimeout(() => {
  clearInterval(id);
  console.log("clear interval ran");
}, 10000);

// PRACTICE QUESTIONS

// Q1. Write an arrow function names arrayAverage that accepts an array of numbers and returns the average of those numbers.

const arrayAverage = (arr) => {
  let total = 0;
  for (let number of arr) {
    total += number;
  }
  return total / arr.length;
};

let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));

// Q2. Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not

const isEven = (n) => {
  if (n % 2 == 0) {
    return "Even";
  } else {
    return "Not Even";
  }
};

// Q3. what is the output of the following code:

// const object = {
//   message: "hello, World!",

//   logMessage() {
//     console.log(this.message);
//   },
// };

// setTimeout(Object.logMessage, 1000);
// ans: After a delay of 1 second, undefined is logged to the console.

// Q4. What is the output of the following code:

let length = 4;
function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method(callback) {
    callback();
  },
};

object.method(callback, 1, 2);

// ans: 0
// Because in browsers, window.length is the number of frames in the window.
// - If there are no frames, it’s 0.
// - If you had, say, 2 iframes in the page, it would log 2.
