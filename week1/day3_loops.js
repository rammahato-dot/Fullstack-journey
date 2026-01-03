// for loops

// for (let i = 1; i<=5; i++) {
//     console.log(i);
// }

// print all odd numbers (1 to 15)

// for (let i = 1; i<=15; i= i+2) {
//     console.log(i);
// }

// print all even numbes (2 to 10)

// for (let i = 2; i<=10; i=i+2) {
//     console.log (i);
// }

// console.log("backwards");

// for (let i = 10; i>=2;i=i-2){
//     console.log(i);
// }

// print the multiplication table for any number

// let n = prompt("Write your number: ");
// n = parseInt(n);

// for (let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

// NESTED FOR LOOP

// for (let i = 1; i <= 3; i++) {
//   console.log(`Outer loop ${i}`);
//   for (let j = 1; j <= 3; j++) {
//     console.log(j);
//   }
// }

// WHILE LOOP

// let i =1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }

// let i = 0;

// while(i<=20) {
//     console.log(i);
//     i = i+2;
// }

// BREAK KEYWORD

// let i =1;
// while(i<=5) {
//     if(i == 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("we use break keyword");

// LOOPS WITH ARRAY

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];

// for (let i=1; i <fruits.length; i= i+2) {
//     console.log(i,fruits[i]);
// }

// LOOPS WITH ARRAYS

// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder woman", "flash"],
// ];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(i, heroes[i], heroes[i].length);
//   for (let j = 0; j < heroes[i].length; j++) {
//     console.log(`j=${j}, ${heroes[i][j]}`);
//   }
// }

// let student = [
//   ["ram", 89 ],
//   ["shanti", 95],
//   ["alisha", 94]
// ];

// for (let i = 0; i < student.length; i++) {
//   console.log(`info of student #${i}`);
//   for (let j = 0; j < student[i].length; j++) {
//     console.log(student[i][j]);
//   }
// }

// FOR OF LOOP

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(fruit of fruits) {
//     console.log(fruit);
// }

// for (char of "apnacollege") {
//     console.log(char);
// }

// let heroes = [
//   ["ironman", "spiderman", "thor"],
//   ["superman", "wonder woman", "flash"],
// ];

// for (list of heroes) {
//   for (name of list) {
//     console.log(name);
//   }
// }
