// Create a program that generates a random number representing a dice roll.

const dice = Math.floor(Math.random() * 6) + 1;
let guess = prompt("Guess the number of dice roll");

while (true) {
  if (guess == "quit") {
    console.log("user quit!!");
    break;
  }
  if (guess == dice) {
    console.log("You guess it right. Congrates!! the number was", dice);
    break;
  } else if (guess < dice) {
    guess = prompt("Guess was too small. please try again");
  } else {
    guess = prompt("Guess was too large. please try again");
  }
}
