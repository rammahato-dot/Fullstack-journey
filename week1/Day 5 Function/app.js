// Q1. Create a function that prints a poem

// function printPoem() {
//     console.log("Twinkle Twinkle,little star");
//     console.log("How I wonder what you are!")
// }

// printPoem();

// Q2. Create a funtion to roll a dice and always display the value of the dice(1 to 6)

// function rollDice() {
//     rand = Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();

// Function with arguments

// function printInfo(name, age) {
//     console.log(`${name}'s age is ${age}.`);
// }

// printInfo("Ram", 20);

// function sum(a,b) {
//     console.log(a+b);
// }
// sum(1,2);

// Q3. Create a function that gives us the average of 3 numbers.

// function calcAvg(a, b, c) {
//   console.log((a + b + c) / 3);
// }
// calcAvg(1, 2, 3);

// Q4. Create a function that prints the multiplication table of a number.

// function printTable (n){
//     for (let i = n; i <=n*10; i+=n){
//         console.log(i);
//     }
// }
// printTable(4);

// Return Keyword

// function sum(a,b) {
//     return a+b;
// }
// console.log(sum(sum(3,4),2));

// function sum (a,b) {
//     console.log("hello");
//     console.log("hello");
//     return a+b;
//     console.log("hello2"); // hello2 will not be printed
//     console.log("hello2"); // the function after return is ignored
// }

// console.log(sum(2,4));

// function isAdult(age) {
//   if (age >= 18) {
//     return "Adult!";
//   } else {
//     return "Not adult";
//   }
//   console.log("Bye!"); // this function will also be ignored because it comes after return funtion
// }

// Q5.Create a function that returns the sum of numbers from 1 to n

// function getSum(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(getSum(7));

// Q6. Create a Functions the concatenation of all strings in an array

// let str = ["hi", "hello", "bye", "!"];

// function concat(str) {
//     let result;

//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }

// Scope
// function scope

// let sum = 50; //Global scope
// function calSum(a, b) {
//   let sum = a + b; // function scope
//   console.log(sum);
// }
// calSum(1,2);

// Block Scope

// {
//     let a = 25;
// }

// console.log(a);

// for (let i=1; i<=5; i++) {
//     console.log(i); // block Scope
// }
// console.log(i);

// let age = 25;
// if(age>=18) {
//     let str = "adult";
// }
// console.log(str); // don't print due to block scope

//Lexical Scope

// function outerFunc(){
//     let x = 5;
//     let y= 6;
//     function innerFunc(){
//         let a = 10;
//         console.log(x);
//     }
//     console.log(a); // it shows error , lexical scope tells accessible outer function and oppsite is not true
//     innerFunc(); // accessible due to lexical scope
// }

// Q7. What will be the output?

// let greet = "Hello"; // Global scope

// function changeGreet() {
//     let greet = "namaste";
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);
//     }
// }

// console.log(greet);
// changeGreet();

// output will be : Hello namaste

// Function Expressions

// let name = "Ram";

// let sum = function(a,b) {
//     return a+b;
// }

// let hello = function(){
//     console.log("hello");
// }

// hello = function(){
//     console.log("hello");
// }

// High Order Functions
// - one or multiple functions as arguments

// function multipleGreet(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }

// let greet = function () {
//   console.log("hello");
// };
// multipleGreet(greet, 2);

// - returns a function

// function oddEvenTest(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(n % 2 == 0);
//     };
//   } else {
//     console.log("wrong request");
//   }
// }

// METHODS
//Actions that can be performed on an object

// const calculator = {
//     add: function(a,b) {
//         return a+b;
//     },
//     sub: function(a,b) {
//         return a-b;
//     },
//     mul: function(a,b) {
//         return a*b;
//     }
// };

// shorthand

// const calculator = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
// }
// }

//-------------------------------
//PRACTICE QUESTIONS

//Q1. Writea Javascript function that returns array elements larger than a number

let arr = [7, 8, 10, 1, 2, 3, 4, 5];
let num = 5;

// elements larger than a number num
function getElements(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}

getElements(arr, num);

// Qs2.Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output

let country = ["Germany", "United States of America", "Australia"];

function longestName(country) {
  let ansIdx = 0;
  for (let i = 0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLen = country[i].length;
    if (currLen > ansLen) {
      ansIdx = i;
    }
  }
  return country(ansIdx);
}

// Q3. Write a Js function to generate a random number within a range(start,end).

let start = 100;
let end = 200;

function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}
