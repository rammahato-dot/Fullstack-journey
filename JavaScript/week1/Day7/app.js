// Day 7
// ARRAY METHODS

// forEach -> arr.forEach(some function definition or name);

// let arr = [1, 2, 3, 4, 5];

// function print(el) {
//   console.log(el);
// }

// arr.forEach(print);

// OR

// arr.forEach(function (el) {
//   console.log(el);
// });

// OR

// arr.forEach((el) =>{
//   console.log(el);
// });

let arr = [
  {
    name: "Ram",
    marks: 90,
  },
  {
    name: "Shanti",
    marks: 88,
  },
  {
    name: "Aashish",
    marks: 96,
  },
];

arr.forEach((student) => {
  console.log(student.marks);
});

// Map -> let newarr = arr.map (some function definition or name)

let num = [1, 2, 3, 4];

let double = num.map((el) => {
  return el *el;
});

