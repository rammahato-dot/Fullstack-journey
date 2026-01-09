let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
  // console.log(event.key);
  console.log(("code = ", event.code)); // ArrowUp, ArrowDown , ArrowRight, ArrowDown

  if (event.code == "ArrowUp") {
    console.log("character moves forward");
  } else if (event.code == "ArrowDown") {
    console.log("character moves backward");
  } else if (event.code == "ArrowRight") {
    console.log("character moves Right");
  } else if (event.code == "ArrowLeft") {
    console.log("character moves Left");
  } else {
    console.log("Invalid key!");
  }
});
