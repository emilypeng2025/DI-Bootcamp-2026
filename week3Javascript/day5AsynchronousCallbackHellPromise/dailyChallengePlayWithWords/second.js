// 2nd daily challenge
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

function toJs() {
    return new Promise((resolve, reject) => {
        // step 1: convert JSON string to JS object
        const morseObj = JSON.parse(morse);
        
        // step 2: check if object is empty
        if (Object.keys(morseObj).length === 0) {
            reject("Morse object is empty");
        } else {
            resolve(morseObj);
        }
    });
}

toJs()
  .then(result => console.log(result))
  .catch(error => console.log(error));

function toMorse(morseObj) {
    return new Promise((resolve, reject) => {
    
        //step 2 get user input
        const userInput = prompt("Enter a word or a sentence");
        
        //step 3 normalize input because morse object keys are lowercase
        const chars = userInput.toLowerCase().split("");

        //step 4 loop and validate
        const result = [];

        for (let char of chars) {
          if (!morseObj[char]) {
            reject(`Character "${char}" not found`);
            return;
          }
          result.push(morseObj[char]);
        }
    
        resolve(result);
    });
}

toJs()
  .then(morseJS => toMorse(morseJS))
  .then(result => console.log(result))
  .catch(error => console.log(error));


  function joinWords(morseTranslation) {
    return new Promise((resolve, reject) => {
      const outputDiv = document.getElementById("output");
  
      if (!outputDiv) {
        reject("No output element found");
        return;
      }
  
      const joined = morseTranslation.join("<br>"); //	<br> = line break in HTML
  
      outputDiv.innerHTML = joined;
  
      resolve(joined);
    });
  }

  toJs()
  .then(morseJS => toMorse(morseJS, "hello"))
  .then(joinWords)
  .catch(console.log);

  