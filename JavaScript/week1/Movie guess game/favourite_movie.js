// Simple Favourite Movie guess game for loop practice

let favMovie = "avatar";
let guess = prompt("Guess my favourite movie");

while (guess != favMovie) {
  if (guess == "quite") {
    console.log("you quit!");
    break;
  }
  guess = prompt("Wrong guess. please try again!");
}

if (guess === favMovie) {
  console.log("Congrates!");
}
