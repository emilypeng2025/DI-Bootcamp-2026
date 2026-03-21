// Exercises XP
// Last Updated: October 8th, 2025

// What we will learn
// Fetch API
// Async/Await


// 🌟 Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of the Fetch API lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.


// Output Example:

// output

fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Wrong gifs");
        }
    })
    //Console.log the Javascript Object that you receive.
    .then((data) =>{
        console.log(data);
    })
    //error handling
    .catch((error) => {
        console.log("Error:", error);
    });


// 🌟 Exercise 2 : Giphy API
// Instructions
// Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.

fetch("https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch gifs");
    }
  })
  .then((data) => {
    console.log(data); // 👈 required
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// 🌟 Exercise 3 : Async function
// Instructions
// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
// Create an async function, that will await for the above GET request.
// The program shouldn’t contain any then() method.
// Make sure to check the status of the Response and to catch any occuring errors.
//error handling: try { ... } catch (error) { ... }

// Expected Output:

// output

async function getStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/"); 

        if (!response.ok) {
            throw new Error("Failed to fetch starship");
        }
    
        const data = await response.json();
        console.log(data.result); //the API response looks like: data = { result: {...actual data...}}, so the useful info is inside .result 所以要用 .result 才能拿到内容
                                //If you want specific data: console.log(data.result.properties.name);
    } catch (error) {
        console.log("Error:", error);
    }
}

getStarship()

//api retures: 
//{
//   message: "ok",
//   result: {
//     properties: {
//       name: "Death Star",
//       model: "DS-1 Orbital Battle Station",
//       ...
//     }
//   }
// }
// //Structure (VERY IMPORTANT)
// data
//  └── result
//       └── properties
//            └── name, model, etc.






// 🌟 Exercise 4: Analyze
// Instructions
// Analyse the code provided below - what will be the outcome?

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds(); // this calls resolveAfter2Seconds(), returns a Promise, and promise resolves after 2 seconds
//     console.log(result);
// }

// "calling", because synchronous function runs first
//(resolved after 2 seconds)
// "resolved"

// asyncCall();