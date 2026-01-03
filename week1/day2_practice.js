// =====================
// Problem 1: Odd, Even, or Zero
// =====================
let num = -4; 
if (num === 0) {
    console.log("Zero");
} else if (num % 2 == 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// =====================
// Problem 2: Grade Calculator
// =====================
let marks = 52;
if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("Fail");
}

// =====================
// Problem 3: Eligibility Checker
// =====================
let age = 10;
let hasVoterID = true;
if ((age >= 18) && hasVoterID ) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// =====================
// Problem 4: Largest of Three Numbers
// =====================
let a = 10;
let b = 35;
let c = 52;
if ((a>b) && (a>c)) {
    console.log("a is largest");
} else if ((b>a) && (b>c)) {
    console.log("b is largest");
} else {
    console.log("c is largest");
}

// =====================
// Problem 5: Temperature Advice
// =====================
let temp = 65; // change to test other temperatures
if (temp < 10) {
    console.log("Too Cold");
} else if (temp >= 10 && temp < 20) {
    console.log("Cold");
} else if (temp >= 20 && temp < 30) {
    console.log("Warm");
} else if (temp >= 30) {
    console.log("Hot");
}
