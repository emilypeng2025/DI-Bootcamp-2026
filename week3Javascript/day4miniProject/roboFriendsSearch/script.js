// Mini-Project - Robo-Friends Search
// Last Updated: February 9th, 2026

// What you will learn
// Array and Object methods
// Array and Object destructuring
// Functions and arrow functions
// DOM tree


// What you will create
// A Robo-Friends Search with Advanced Javascript

// In this project you will have to create a robot website (you can use your own css to style your project):
// robot project #1



// Instructions
// PART I : The website
// The webpage displays Cards of Robots with their respective image and information.

// robot project #1



// 2. You have to create the cards by using the values from the array of objects provided in the ASSETS below.


// PART II : The filter
// When you search for a specific name in the search box, the webpage filters the cards displayed. For example is you write “nic” in the search box, you will display the robot which name contains “nic”, which means only one robot: “Nicholas”.
// robot project #2


// 2. Display the cards in the DOM, using DOM elements and selectors, and filter them with the search box.


// PART II : The style
// You can use your own images or use this website to generate a new Robot Image.

// Check out those links to generate the correct font
// cdnfonts
// dafont

// You can use those images for the background (click righ on the images below, and “Save image as…” )
// background imagebackground image






// Assets
const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

// Project Goal: Robo-Friends Search
// You will build a page that:
// •	shows robot cards
// •	has a search box
// •	filters robots while typing

// 中文：
// 你要做一个网页，它可以：
// •	显示机器人卡片
// •	有一个搜索框
// •	输入时实时筛选机器人

// 1.	build HTML
// 2.	add robot data
// 3.	render cards(which means from the array 10 robots data to show them on the pages 
//            including: js creating a function to display robots
                      // loop through each robot from array, create a card element for each robot, 
                      // insert robot info into the card, add card to page,call the function to show the robots)
// 4.	add search
// 5.	clean code with destructuring
// 6.	style it nicely

// Now: Display robot cards
//Use DOM and a function to put robot cards on the page.使用 DOM 和函数，把机器人卡片显示到网页上。

const cardContainer = document.getElementById("card-container");

// function displayRobots(robotArray) {
//   cardContainer.innerHTML = "";

//   robotArray.forEach(robot => {
//     const card = document.createElement("div");
//     card.className = "card";

//     card.innerHTML = `
//       <img src="https://robohash.org/${robot.id}?200x200" alt="${robot.name}">
//       <h2>${robot.name}</h2>
//       <p>${robot.email}</p>
//     `;

//     cardContainer.appendChild(card);
//   });
// }



// //next step: use destructuring to make the code cleaner by extracting value from each robot object
 //用解构让代码更简洁，把对象里的值直接取出来。

function displayRobots(robotArray) {
  cardContainer.innerHTML = "";

  robotArray.forEach(robot => {
    const { id, name, email } = robot; //object destructuring so later we can use values that created variables of id, name, email with ${id} instead of using ${robot.id}

    //create a card element(each robot being loop will be one card as one div tag)
    const card = document.createElement("div");
    card.className = "card";

    //insert robot information into the card
    card.innerHTML = `
      <img src="https://robohash.org/${id}?200x200" alt="${name}">
      <h2>${name}</h2>
      <p>${email}</p>
    `;
    //robohash.org/id generates images automatically whereas robot.image uses the image URL stored in the data, which is at 

    //add the card to the page
    cardContainer.appendChild(card);
  });
}

//now run the function to show the robots.
displayRobots(robots);


// Now: Add search functionality
//Listen to input changes, then use filter() to keep only matching robots.监听输入框内容变化，然后用 filter() 找出符合条件的机器人。

const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("input", function () {
  const searchText = searchBox.value.toLowerCase();

  const filteredRobots = robots.filter(robot =>   //robots.filter()Creates a new array with matching robots.Creates a new array with matching robots.
    robot.name.toLowerCase().includes(searchText)
  );

  displayRobots(filteredRobots);
});

// can use Arrow version for the search function
// searchBox.addEventListener("input", () => {
//   const searchText = searchBox.value.toLowerCase();

//   const filteredRobots = robots.filter(robot =>
//     robot.name.toLowerCase().includes(searchText)
//   );

//   displayRobots(filteredRobots);
// });

