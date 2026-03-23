// Star Wars Web App Using AJAX API
// Last Updated: October 8th, 2025

//AJAX (Asynchronous JavaScript and XML) is a set of web development techniques allowing websites to send and receive data from a server in the background without reloading the entire page. By using JavaScript to update specific page parts, it makes web applications faster, more interactive, and responsive. 
//AJAX means your webpage can ask a server for data without reloading the whole page. In modern JavaScript, that usually means using fetch() or async/await to request JSON from an API and then updating the DOM with the result. For this project, you’ll use the SWAPI Tech API, and the docs show a People resource with endpoints like /people/ and /people/:id/.



// What you will learn
// async/await
// Fetch API


// What you will create
// Star Wars Web App Using AJAX API
// In this project you will have to build a single page application that uses AJAX to retrieve information and display it on your website as follows:






// Here is a demo. (https://di-star-wars-ajax.surge.sh/)



// Instructions
// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// Create your HTML file, and add the relevant elements.

// In your JS file, create your functions :
// to retrieve the elements from the DOM.
// to get the data from the API (star wars characters).
// to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// Display the data using AJAX. Make sure to display a loading message as follows:
// You can use any of these animation icons for the loading message.
// Fontawesome link :
// https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css






// If there is an error getting the data, display a message as follows:




// You can use your own css to style the website as you see fit


//JS second
// In swapi.js, make small steps:
// 1.	get DOM elements (1. first the button ID-"btn" to click and fetch character ID randomly, which is using button to )
// 2.	generate a random character id
// 3.	fetch that character
// 4.	fetch that character’s homeworld
// 5.	display everything
// 6.	handle loading
// 7.	handle errors

// A very important detail: 
// the API has people endpoints, and the character object includes a homeworld URL, 
// so this project is naturally a two-fetch problem: first fetch the person, then fetch the homeworld URL from that person’s data. 

const button = document.getElementById("btn");
const container = document.getElementById("container");



// 2) Create a function to generate a random id
function generateID(min, max) {
    // later: return a number
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// 3) Create an async function to get one character
async function getCharacter() {
    try {    
        // show loading
        // container.textContent = "Loading...";
        container.innerHTML = `
            <p><i class="fa fa-circle-notch fa-spin fa-2x"></i></p>
            <p>Loading...</p>
        `;
        //fa-spinner → icon
        //fa-spin → animation
            // <p><i class="fa fa-circle-notch fa-spin"></i> Loading...</p>
            // <p><i class="fa fa-rocket fa-spin"></i> Loading...</p>
            // <p><i class="fa fa-spinner fa-pulse"></i> Loading...</p>

        // fetch person 
        const id = generateID(1, 83);
        console.log("Random ID:", id);

        const response = await fetch(`https://www.swapi.tech/api/people/${id}/`); //fetch(url) sends the request, await pauses inside the async function until the response comes back
                                                    // The docs show the API root as /api, and people are under /api/people/:id/. 
        if (!response.ok) {         
            throw new Error("Failed to fetch data");
          }
    
        // convert response to json
        const data = await response.json();
        console.log(data);
        const character = data.result.properties;
        // console.log(character.name);
        // console.log(character.homeworld);

        // fetch homeworld, where the value of character.homeworld is a link: https://www.swapi.tech/api/planets/23, NOt the planet name. So the API is saying: “If you want the planet info, go ask THIS URL”
        const homeworldResponse = await fetch(character.homeworld);
        if (!homeworldResponse.ok) {         
            throw new Error("Failed to fetch homeworld");
          }
    
        // convert response to json
        const homeworldData = await homeworldResponse.json();
        // console.log(homeworldData);        // display data
        
        // console.log(character.name)
        // console.log(character.height)
        // console.log(character.gender)
        // console.log(character.birth_year)
        // console.log(homeworldData.result.properties.name)
        
        const planet = homeworldData.result.properties;
        const homeworldName = planet.name;

        container.innerHTML = `
            <h2>${character.name}</h2>
            <p><strong>Height:</strong> ${character.height}</p>
            <p><strong>Gender:</strong> ${character.gender}</p>
            <p><strong>Birth Year:</strong> ${character.birth_year}</p>
            <p><strong>Home World:</strong> ${homeworldName}</p>
        `;

        // catch errors
    } catch (error){
        console.log(error);
        container.innerHTML = `
            <p style="color:red;">⚠️ Oh no! That person is not available.</p>
        `;
    }                                                  
  }

button.addEventListener("click", getCharacter);


//differences between .innerHTML and .textContent: 
// container.innerHTML = `
//   <p>Name: ...</p>
//   <p>Height: ...</p>
// `;
// formatted UL(HTML), it renders tags and treats content as HTML
// while textContent: just shows text, treats everything as plain text. 
