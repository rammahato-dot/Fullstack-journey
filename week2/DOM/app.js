// Practice Questions
// Add the following elements to the container using only js and the DOM methods

// i) a <p> with red text that says "Hey I'm red!"
// ii) an <h3> with blue text that says "I'm a blue h3!"
// iii) a <div> with a black border and pink background color with the following elements inside of it:
// . another <h1> that says "I'm in a div"
// . a <p> that says "ME TOO!"

// let para1 = document.createElement("p");
// para1.innerText = "Hello I'm!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let para1 = document.createElement("h3");
// para1.innerText = "Hello I'm blue h3!";
// document.querySelector("body").append(para1);

// para1.classList.add("blue");

// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// let para2 = documentElement("p");

// h1.innerText = "i'm in a div ";
// para2.innerTaxt = "";

// Practice questions (part 9)

// Q1. Create a new input and button element on the page using JavaScript only. Set the text of button to "Click me".

let button = document.createElement("button");
let input = document.createElement("input");

button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Q2. Add following attributes to the element :
// - Change placeholder value of input to "username"
// - Change the id of button of "btn"

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Q3. Access the btn using the quaryselector and button id. Change the button background color to the blue and text to white.

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Q4. Create an h1 element on the page and set its text to "DOM Practice" underlined. Change its color to purple.

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM Practice</u>";
document.querySelector("body").append(h1);

// Q5. Create a p tag on the page and set its text to "Apna College Delta Practice", where Delta is bold.

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);
