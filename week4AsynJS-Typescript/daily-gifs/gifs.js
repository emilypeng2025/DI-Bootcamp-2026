// Daily Challenge: Gifs
// Last Updated: October 8th, 2025

// What You will learn :
// Fetch Api
// Async/Await
// Try/Catch


// Instructions
// Use this Giphy API Random documentation. Use this API Key : hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

// console.log("JS loaded");

const form = document.getElementById("gif-form");
const input = document.getElementById("search-input");
const container = document.getElementById("gif-container");
const deleteAllBtn = document.getElementById("delete-all");

const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch random GIF
async function fetchGif(category) {
  try {
    const url = `https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch GIF");
    }

    const data = await response.json();
    // console.log(data); //to inspect the url link
    return data.data.images.original.url; //Extract URL: this is the actual GIF link: API 数据是多层结构

  } catch (error) {
    console.log("Error:", error);
  }
}

// Add GIF to page
function addGif(gifUrl) {
  const div = document.createElement("div");

  const img = document.createElement("img");  // show GIF on page
  img.src = gifUrl;
  img.style.width = "200px";

  const btn = document.createElement("button");
  btn.textContent = "DELETE";

  // delete one gif
  btn.addEventListener("click", () => {
    container.removeChild(div); //removes only that GIF
  });

  div.appendChild(img);
  div.appendChild(btn);

  container.appendChild(div);
}

// Form submit: 
form.addEventListener("submit", async (e) => {      //stops page refresh 
  e.preventDefault();
 
  const category = input.value.trim();          //and gets input value

  if (!category) return;

  const gifUrl = await fetchGif(category);

  addGif(gifUrl);

  input.value = "";
});

// Delete all
deleteAllBtn.addEventListener("click", () => {
  container.innerHTML = ""; //clears everything
});


