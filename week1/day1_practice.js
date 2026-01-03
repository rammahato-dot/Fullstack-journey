// Day 1

// Exercise 1 : Declare variables for your name, age, height, and isStudent. Print them in console.

let name = "Ram";
let age = 20;
let height = 5.7;
let isStudent = true;

console.log(
  "Name:",
  name,
  "\nAge",
  age,
  "\nHeight in FT.: ",
  height,
  "\nIs student?",
  isStudent
);

// Exercise 2 : Create an array of 3 favorite foods and print the second item.

let arr = ["Burger", "pizza", "MOMO"];

console.log(arr[1]);

//Exercise 3: Create an object for yourself with keys: name, age, city. Print all values

let obj = {
  name: "Ram",
  age: 20,
  city: "Kathmandu",
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.city);

//Exercise 4: Experiment with underfined and null variables and print their values

let x;
console.log(x);

let y = null;
console.log(y);

console.log(typeof x);
console.log(typeof y);
