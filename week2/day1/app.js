// Array Methods
// 1. MAP

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//   return el * 2;
// });

// let students = [
//   {
//     name: "Ram",
//     marks: 96,
//   },
//   {
//     name: "Shyam",
//     marks: 86,
//   },
//   {
//     name: "Hari",
//     marks: 90,
//   },
// ];

// let gpa = students.map((el) => {
//   return el.marks / 10;
// });

// 2. FILTER

// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

// let even = nums.filter((num) => num % 2 == 0);

// 3. EVERY -> Returns true if every element of array gives true for some function. Else returns false.

// let num1 = [1, 2, 3, 4].every((el) => el % 2 == 0); //false

// let num2 = [2, 4].every((el) => el % 2 == 0); // true

// 4. SOME -> Returns true if some element of array gives true for some function. Else returns false.

// let num1 = [2, 1, 4].some((el) => el % 2 == 0); // true
// let num2 = [1, 3].some((el) => el % 2 == 0); // false

// 5. REDUCE -> Reduces the array to a single value

// let num = [1, 2, 3, 4].reduce((res, el) => {
//   console.log(res);
//   return res + el;
// }); //10
// console.log(num);

// Practice Q1. Finding maximum in an array

// let nums = [4, 18, 4, 5, 3, 4, 7, 8, 1, 3];

// let result = nums.reduce((max, el) => {
//   if (el > max) {
//     return el;
//   } else {
//     return max;
//   }
// });
// console.log(result);

// Practice Q2. Check if all numbers in our array are multiples of 10 or not.

// let nums = [30, 30, 60, 30, 10];

// let result = nums.every((el) => el % 10 == 0);
// console.log(result);

// Practice Q3. create a function to find the min number in an array

// let num = [2, 5, 1, 8];

// function getMin(num) {
//   let min = num.reduce((min, el) => {
//     if (min < el) {
//       return min;
//     } else {
//       return el;
//     }
//   });
//   return min;
// }

// DEFAULT PARAMETERS -> giving a default value to the arguments

// function sum(a, b = 3) {
//   return a + b;
// }
// sum(1,3); // 4
// sum (1); //a = 1, b = undefined -> when we give a single num then by default it will go for a not b

// SPREAD -> Expands an iterable into multiple values

// console.log(..."apnacollege");

// spread (with array literals)

// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];

// let chars = [..."hello"];

// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8];

// let nums = [...odd, ...even];
// console.log(nums);

// spread (with object literals)

// let data = {
//   email: "spiderman@gmail.com",
//   password: "abcd",
// };
// let dataCopy = { ...data, id: 123 };

// REST -> Allows a function to take an indefinite of arguments and buddle them in an array

// function sum(...args) {
// arguments
//   for (let i = 0; i < args.length; i++) {
//     console.log("you gave us: ", args[i]);
//   }
// }

// function sum(...args) {
//   return args.reduce((sum, el) => sum + el);
// }

// Destructuring -> Storing values of array into multiple variables

// let names = ["tony", "bruce", "steve", "peter"];
// let [winner, runnerup, ...others] = names;
// console.log(winner, runnerup, others);

// destructuring (objects)

// const student = {
//   name: "karan",
//   age: 19,
//   class: 12,
//   subjects: ["english", "nepali", "math", "science"],
//   username: "karan@123",
//   password: "abcd",
// };

// let { username: user, password: secret } = student;

// PRACTICE QUESTIONS

// Q1. Square and sum the array elements using the arrow function and then find the average of the array

// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// console.log(avg);

// Q2. Create a new array using the map function whose each element is equal to the original element plus 5.

// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.map((number) => number + 5));

// Q3. Create a new array whose elements are in uppercase of words present in the original array.

// let strings = ["adam", "bob", "joy", "steve", "eve"];
// console.log(strings.map((string) => string.toUpperCase()));

// Q4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

// const doubleAndReturnArgs = (arr, ...args) => [
//   ...arr,
//   ...args.map((v) => v * 2),
// ];

// doubleAndReturnArgs([1, 2, 3], 4, 4);
// doubleAndReturnArgs([12], 10, 4);

// Q5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 });
