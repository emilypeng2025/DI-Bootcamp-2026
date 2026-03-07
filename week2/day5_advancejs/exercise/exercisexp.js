// What you will learn:
// JS scope
// Ternary operator
// Template Strings
// Advanced functions
// Arrow functions


// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// // #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// // #1.1 - run in the console:
// funcOne()

// My answer: 
// if we run funcOne(), it will say alert: 
//  "inside the funcOne function 3"


// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
function funcOne() {
    const a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// My answer: 
// it will give typeError because constant variable cannot be reassigned







// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?

// my answer: #2.1 
// first funcThree() will alert `inside the funcThree function $0` 
//funcTwo will reasign a to value of 5
// second time funcThree() alert `inside the funcThree function $5'

const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree()
funcTwo()
funcThree()
//#2.2 if we use const a = 0;
// first funcThree() it will alert(`inside the funcThree function $0`)
// funcTWo() gives typeError because const variables cannot be reassigned
// funcThree() will not run because step 2 crashed: Because the program stops when the TypeError happens







// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// window is the global object in browsers, window.a creates a global variable. 
//when calling funcFour(), a = "hello"
// when calling funcFive, it alerts "inside the funcFive function hello". Because a now exists globally.




// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?

//my answer: when calling funcSix(), it will alert `inside the funcSix function test` because let only sees inside the function within the {}. 
// Even though let a = 1 is a variable, it exists outside the function as a global a. The inner a hides (shadows) the outer a.
// #4.2 even if let changes to const the result will be the same.




// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?

//#5.1 first the if inner alert is on first "in the if block 5", then the alert "outside of the if block 2".
//#5.2 it will run the same even after changing to const










// 🌟 Exercise 2 : Ternary operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// 🌟 Exercise 3 : Is it a string ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:

// console.log(isString('hello')); 
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

// function isString(value) {return typeof value === "string";}
const isString = (value) => {
    return typeof value === "string";
};


console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));

// 🌟 Exercise 4 : Find the sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// function sumUp (a, b) {return a + b};
// const sumUp = (a, b) => {return a + b};
const sumUp = (a, b) => a + b;
// implicit return: When you remove { }, the arrow function automatically returns the value.
//With braces → need return; Without braces → automatic return




// 🌟 Exercise 5 : Kg and grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

//function declaration: 
function weightInKg (kg) {
    return kg * 1000;
}

//function expression:
const weightInKgExp = function(kg) {
    return kg * 1000;
}

//// Function declarations are hoisted; function expressions are not.
// Hoisting means:
// JavaScript moves declarations to the top of the scope before execution.
const weightInKg = (kg) => kg * 1000; 


// 🌟 Exercise 6 : Fortune teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function(jobTitle, geographicLocation, partnerName, numberOfChildren){
    const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

    const p = document.createElement("p");
    p.textContent = sentence;

    document.body.appendChild(p);
})("Developer", "Paris", "Alex", 2);
// self-invoking function means IIFE(immediately invoked function expression)
// ✔ Create a function
// ✔ Make it execute immediately
// ✔ Create an element (like a <p>)
// ✔ Insert the sentence
// ✔ Append it to the page

// (function(){
//     const jobTitle = "Engineer";
//     const geographicLocation = "London";
//     const partnerName = "Sam";
//     const numberOfChildren = 3;

//     const sentence = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;

//     const p = document.createElement("p");
//     p.textContent = sentence;

//     document.body.appendChild(p);
// })();





// 🌟 Exercise 7 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// JS (Dynamic behavior)

// Self-invoking function that: (1️⃣ 找到 navbar)
// 	•	Receives username 2️⃣ 创建用户名 + 头像
// 	•	Creates a div //<div> → container (parent) It groups things together.
                                // the div includes: userName <span></span> and <img>
                                // why do we need the <span>? <span> → inline text element: used for small text parts, so the <div> holds multipule things
// 	•	Creates image
// 	•	Appends to navbar 3️⃣ 把它们放进 navbar

(function(userName) {       // Create a self-invoking function that receives the user's name as a parameter

    //(1️⃣ 找到 navbar)
    const navbar = document.getElementById("navbar");

    // in order to create username and image, inside a <div>, first you create an empty <div> so in memory it looks like: <div> </div>, later we will put <span>usernamne</span> and <ima>
    const userDiv = document.createElement("div");
    // Create a new <div> element that will contain the user info 

    const name = document.createElement("span");     // Create a <span> element to display the username
    name.textContent = userName;     // Put the user's name inside the <span>

    const img = document.createElement("img");     // Create an <img> element for the profile picture 创建一个 图片元素 但它需要一个 图片地址 才能显示。
    img.src = "https://via.placeholder.com/40";     //浏览器会去这个网址下载图片。
    img.style.width = "40px";       // Set the image width to 40 pixels
    img.style.borderRadius = "50%";         // Make the image round (circle profile picture)

    userDiv.appendChild(name);          // Put the username <span> inside the div
    userDiv.appendChild(img);           // Put the profile image inside the div

    navbar.appendChild(userDiv);            // Put the whole user div into the navbar

})("John");     // Immediately run the function and pass "John" as the username

//这段代码创建了 4个主要的变量（const），每个代表网页中的一个元素。
//Final structure:
//navbar
    // └── div
        // ├── span
        // │     John
        // └── img

//Final HTML structure (what the browser sees)

//<nav id="navbar">

    // <div>
        // <span>John</span>
        // <img src="https://via.placeholder.com/40">
    // </div>

// </nav>


//?Could we skip <span>? userDiv.textContent = userName;
//But using <span> is better practice, because you may want to style the name later: <span class="username">John</span>
// DOM is always:
// Parent
//    Child
//       Child

// nav
//    div
//       span
//       img

//Nothing appears on the page until it is attached to the DOM tree.create → modify → attach
//const div = document.createElement("div");The browser creates the element in memory only.
//Modify (add content): div.textContent = "Hello";
//Attach to the DOM: document.body.appendChild(div);


// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, 
// and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like 
// "The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. 
// Then invoke once the displayJuice function. 
// Finally, invoke the makeJuice function in the global scope.


//part I answer: 
// function makeJuice(size){
//     function addIngredients(ingredient1, ingredient2,ingredient3){
//         const sentence = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        
//         const p = document.createElement("p"); //create an element
//         p.textContent = sentence;   //Then insert text

//         document.body.appendChild(p); //Then attach to page
//     }

//     addIngredients("appple", "banana", "mango")
// }

// // call outer function
// makeJuice("large");

//part II answer: 
function makeJuice(size){

    const ingredients = [];   // 1️⃣ empty array

    function addIngredients(ing1, ing2, ing3){
        ingredients.push(ing1, ing2, ing3);   // 2️⃣ add ingredients to array
    }

    function displayJuice(){
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;

        const p = document.createElement("p");
        p.textContent = sentence;

        document.body.appendChild(p);
    }

    // 3️⃣ call addIngredients twice (6 ingredients total)
    addIngredients("apple", "banana", "mango");
    addIngredients("orange", "pineapple", "strawberry");

    // 4️⃣ display result
    displayJuice();
}

// 5️⃣ call outer function
makeJuice("large");

// makeJuice: Both inner functions share the same ingredients array.
// ├── ingredients
// ├── addIngredients()
// └── displayJuice()






