//Array Methods
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

function sum(...args) {
  //arguments
  for (let i = 0; i < args.length; i++) {
    console.log("you gave us: ", args[i]);
  }
}
