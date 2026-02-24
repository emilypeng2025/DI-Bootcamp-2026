// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

//syntax: setTimeout(function, milliseconds);
setTimeout(function() {
    alert("Hello World");
}, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// Now instead of alert, we:

// 1️⃣ Select the div
// 2️⃣ Create a <p>
// 3️⃣ Add text
// 4️⃣ Append it
setTimeout(function() {

    const container = document.getElementById("container");

    const p = document.createElement("p");
    p.textContent = "Hello World";

    container.appendChild(p);

}, 2000);


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// syntax: let intervalID = setInterval(function, 2000);
//step 1: start interval
const container = document.getElementById("container");
const button = document.getElementById("clear");

let intervalID = setInterval(function() {

    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    //Stop automatically after 5 paragraphs
    if (container.children.length === 5) {
        clearInterval(intervalID);
    }
}, 2000);

//Stop when button clicked
button.addEventListener("click", function() {
    clearInterval(intervalID);
});


