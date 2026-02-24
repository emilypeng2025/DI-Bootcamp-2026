// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

// 🎯 What You Need To Do

// When button is clicked:
// 1.	Start a setInterval
// 2.	Move the red box 1px to the right
// 3.	Repeat every 1 millisecond
// 4.	Stop when it reaches the right edge
// 5.	Use clearInterval

// •	Select the red box → #animate
// •	Keep track of position (a number)
// •	Change style.left
// •	Stop when position reaches max

function myMove() {

    const box = document.getElementById("animate");
    const container = document.getElementById("container");

    let position = 0;

    let interval = setInterval(frame, 1);

    function frame() {
        if (position >= 350) {
            clearInterval(interval);
        } else {
            position++;
            box.style.left = position + "px";
        }
    }
}