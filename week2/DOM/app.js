// Practice Questions
// Add the following elements to the container using only js and the DOM methods

// i) a <p> with red text that says "Hey I'm red!"
// ii) an <h3> with blue text that says "I'm a blue h3!"
// iii) a <div> with a black border and pink background color with the following elements inside of it:
// . another <h1> that says "I'm in a div"
// . a <p> that says "ME TOO!"

let para1 = document.createElement("p");
para1.innerText = "Hello I'm!";
document.querySelector("body").append(para1);

para1.classList.add("red");

let para1 = document.createElement("h3");
para1.innerText = "Hello I'm blue h3!";
document.querySelector("body").append(para1);

para1.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = documentElement("p");

h1.innerText = "i'm in a div ";
para2.innerTaxt = "";
