// What we will learn:
// Variables
// Conditionals
// Loops
// Objects


// 🌟 Exercise 1 : List of people
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review about arrays
// Write code to remove “Greg” from the people array.
// let constPeople = ["Greg", "Mary", "Devon", "James"]
// constPeople.shift()
// console.log(constPeople)

// delete: does NOT reduce array length.
// let constPeople = ["Greg", "Mary", "Devon", "James"]
// delete constPeople[0]
// console.log(constPeople)

//splice: remove by index
let constPeople = ["Greg", "Mary", "Devon", "James"]
let deletedItem = constPeople.splice(0, 1)
console.log(deletedItem)
console.log(constPeople)

// Write code to replace “James” to “Jason”.
let replaceItem = constPeople.splice(2, 1, "Jason")
console.log(constPeople)

// Write code to add your name to the end of the people array.
// let addItem = constPeople.splice(3, 0, "Emily")
// console.log(constPeople)
let addItem = constPeople.push("Emily")
console.log(constPeople)

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(constPeople.indexOf("Mary"))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

let anotherPeople = constPeople.slice(1, -1)
console.log(anotherPeople)

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(constPeople.indexOf("Foo"))
// "Foo" does not exist in the array, if it does not exist, it returns -1.

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let howMany = constPeople.length
console.log(howMany)
let last = constPeople[3]
console.log(last)
// let last = constPeople.slice(-1)[0]
// or let last = constPeople.pop()

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let name of constPeople) {
    console.log(name)
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (let name of constPeople) {
    if (name === "Devon"){
        break;
    }
    console.log(name)
}

// 🌟 Exercise 2 : Your favorite colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

let colors = ["blue", "red", "green", "yellow", "white"] //use const by default, unless you need to change the value, then use let
for (let index in colors) {
    console.log(`My #${Number(index) + 1} choice is ${colors[index]}`)
}

// 🌟 Exercise 3 : Repeat the question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
//let number = Number(prompt("type a number"))
//console.log(typeof number)

let number = Number(prompt("Enter a number greater than 10"))
do {
    number = Number(prompt("Enter a number greater than 10"))
} while(number <= 10);

console.log("You entered:", number);

// 🌟 Exercise 4 : Building Management
// Instructions:
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}


// Review about objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.
console.log(building.numberOfFloors)
// Console.log how many apartments are on the floors 1 and 3.
let numApt1 = building["numberOfAptByFloor"].firstFloor
let numApt3 = building.numberOfAptByFloor.thirdFloor
let total = numApt1 + numApt3
console.log(total)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahRent = building.numberOfRoomsAndRent.sarah[1]
let davidRent = building.numberOfRoomsAndRent.david[1]
let twoRent = sarahRent + davidRent
if (twoRent > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] = 1200
}

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

const family = {
    father: "baba",
    mother: "mama",
    sister: ["jiě jiě", "mèi mèi"]
}
for (let key of Object.keys(family)){
    console.log(key)
}
// for (let key in family) {
//     console.log(family[key]);
// }

// for (let value of Object.values(family)){
//     console.log(value)
// }
for (let value in family) {
    console.log(family[value]);
}

// Exercise 6 : Rudolf
// Instructions
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the reindeer”
for (let [key, value] of Object.entries(details)){
    console.log(key, value)
}

// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let firstLetters = [];

for (let name of names) {
    firstLetters.push(name[0]);
}

firstLetters.sort();

let societyName = firstLetters.join("");

console.log(societyName);

// using .map（）cleaner version
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let societyName = names
//     .map(name => name[0])
//     .sort()
//     .join("");

// console.log(societyName);