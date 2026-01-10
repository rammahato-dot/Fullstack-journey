//Callback Hell

// function savetoDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// savetoDb(
//   "Apna College",
//   () => {
//     console.log(" Success: Your data was saved!");
//     savetoDb(
//       "Hello, World!",
//       () => {
//         console.log("success2: data2 saved");
//       },
//       () => {
//         console.log("failure2: data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: Weak connection, your data was not saved!");
//   }
// );

//Promises

// function savetoDb(data) {
//   return new Promise((success, failure) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       success("success: data was saved");
//     } else {
//       failure("failure: weak connections");
//     }
//   });
// }

// promise chaining

// savetoDb("apna college")
//   .then((result) => {
//     console.log("data1 saved.");
//     console.log("result of promise: ", result);
//     return savetoDb("hello world");
//   })
//   .then((result) => {
//     console.log("data2 saved");
//     console.log("result of promise: ", result);
//     return savetoDb("ram");
//   })
//   .then((result) => {
//     console.log("data3 saved");
//     console.log("result of promise: ", result);
//   })
//   .catch((error) => {
//     console.log("promise was rejected");
//     console.log("error of promise: ", error);
//   });

// callback hell

h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("blue", 1000, () => {
//     changeColor("purple", 1000, () => {
//       changeColor("green", 1000);
//     });
//   });
// });

// refactoring above code in Promises

// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed");
//     }, delay);
//   });
// }

// changeColor("red", 1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
// })
// .then(()=>{
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
// })
// .then(()=>{
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
// })
// .then(()=>{
//     console.log("blue color was completed");
// })

// ASYNC KEYWORD

// async function greet() {
//   throw "404 page not found";
//   return "hello";
// }

// greet()
//   .then(() => {
//     console.log("promise was resolved");
//     console.log("result was: ", result);
//   })
//   .catch((err) => {
//     console.log("promise was rejected with err: ", err);
//   });

// let demo = async () => {
//   return 5;
// };

// AWAIT KEYWORD

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       console.log(`color chnaged to ${color}!`);
//       resolve("color changed");
//     }, delay);
//   });
// }

// async function demo() {
//   await changeColor("red", 1000);
//   await changeColor("purple", 1000);
//   await changeColor("green", 1000);
//   await changeColor("yellow", 1000);

//   console.log();
// }

// Handling Rejections

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("promise rejected");
      }
      h1.style.color = color;
      console.log(`color chnaged to ${color}!`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("purple", 1000);
    await changeColor("green", 1000);
    await changeColor("yellow", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }

  console.log();
}
