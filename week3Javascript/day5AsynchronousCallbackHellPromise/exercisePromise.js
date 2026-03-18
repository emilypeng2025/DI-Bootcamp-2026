// What you will learn:
// Promises


// 🌟 Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than or equal to 10
// the promise rejects if argument is greater than 10.
// Test:

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

function compareToTen(num) {
    return new Promise(function(resolve, reject) {
        if (num <= 10){
            resolve("Number is less than or equal to 10");
        } else {
            reject("Number is greater than 10");
        }
    });
} 

console.log("Start");

compareToTen(15)
  .then(result => console.log("Result 1:", result))
  .catch(error => console.log("Error 1:", error))

compareToTen(8)
  .then(result => console.log("Result 2:", result))
  .catch(error => console.log("Error 2:", error))

  console.log("End");

// 🌟 Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
        // reject("error") // optional
    }, 4000);
});

promise.then(result => console.log(result));

// 🌟 Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Boo!");
//There are 2 quick ways to create Promises:    1. Promise.resolve(value): creates a resolved promise immediately
//                                              2. Promise.reject(error): creates a rejected promise immediately



// Exercise 4: quizz - not mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.

