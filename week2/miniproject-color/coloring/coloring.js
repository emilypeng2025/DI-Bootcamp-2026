let selectedColor = null;
// State = current condition of the app: null=nothing selected yet
let isDrawing = false;

const board = document.getElementById("board");
const clearBtn = document.getElementById("clearBtn");


// 60–90 min: Build it in tiny steps 
// 	1.	create palette squares
// 	2.	click to select a color
// 	3.	create board cells
// 	4.	click one cell to paint
// 	5.	add drag painting with mousedown + mouseup + mouseover

// JS 做两件事：// 1️⃣ 生成颜色块 // 2️⃣ 生成画板格子


// step 1: make the colors in palette
//get the palette element from html file
const palette = document.getElementById("palette");
console.log(palette);
//now: palette is a variable, it represents that HTML div, we can add things, colors, inside it

//create the colors: (use an array, which is a list, we can loop through it, it is scalable可扩展性)
const colors = [  
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "black",
    "brown",
    "gray"
];

// 遍历颜色数组 Loop through colors and create boxes
//.forEach is a method that belongs to arrays.

colors.forEach(function(color) {

    // creates a new <div> in memory 创建一个新的 div /<div> 元素 （现在它还没有出现在页面上 only exists inside JavaScript）
    const colorBox = document.createElement("div");
  
    // add a CSS class 给它一个 class 名字/给这个 div 添加 class=“color”/ in CSS we have: .color{width:28px; height:28px;} 
    // this line connects JavaScript to CSS styling, Without this class, the div would have no size.
    colorBox.classList.add("color");
  
    // 设置它的背景颜色 colorBox is the object, .style is property, .backgroundColor is the property inside style
    colorBox.style.backgroundColor = color;
  
    // Add click event: to colorBox, so each color has its own listener. DOM .dot notation/property access operator: "access something inside this object": .style .classList
    // concept: object: everything in JS is an object. object has properties(data) and methods(functions inside objects)
    colorBox.addEventListener("click", function() {

        // Remove selected class from all color boxes: once chosen, not able to choose any more
        const allColors = document.querySelectorAll(".color");
        allColors.forEach(function(box) {
            box.classList.remove("selected");
        });

        // Add selected class to clicked one this 在这里代表“当前被点击的那个元素”。
        this.classList.add("selected");
        //update state: Now we remember the chosen color
        selectedColor = color;

    });

        // 把这个小方块放进 palette 里面 It takes that invisible div and inserts it into:<div id="palette"></div> in html
        palette.appendChild(colorBox);
  
  });

//   1.	Found the container to put the colors-- the <div> in html-- <div id="palette" aria-label="Color palette"></div> 
//   2.	Created 10 new elements: 10 different colors
//   3.	Styled them
//   4.	Inserted them into the DOM

// step 2: clicking a color: added addEventListener to colorBox

// step 3: create the board where the selected color can draw on
// Create the cells (the grid squares)
const totalCells = 1600; // 20 x 20

// for (let i = 0; i < totalCells; i++) {
//   const cell = document.createElement("div");
//   cell.classList.add("cell");
//   board.appendChild(cell);
// }
// add class "cell" (so CSS gives it size)

// Click to paint a cell: Now update the cell creation loop by adding a click listener:
for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Click to paint
    cell.addEventListener("click", function () {
        paintCell(this);
    });

    // Drag to paint (only when mouse is down)
    cell.addEventListener("mouseover", function () {
        if (!isDrawing) return;
        paintCell(this);
    });
  
    board.appendChild(cell);
} 

//step 4 add click and drag drawing using these events: mousedown, mouseup, mouseover

board.addEventListener("mousedown", function () {
    isDrawing = true;
});
  
document.addEventListener("mouseup", function () {
    isDrawing = false;
});

function paintCell(cellElement) {
    if (selectedColor === null) return;
    cellElement.style.backgroundColor = selectedColor;
  }

clearBtn.addEventListener("click", function () {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function (cell) {
      cell.style.backgroundColor = "white";
    });
  });