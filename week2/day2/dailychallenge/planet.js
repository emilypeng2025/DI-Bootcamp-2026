const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 4 },
    { name: "Saturn", color: "gold", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 2 }
  ];

const section = document.querySelector(".listPlanets");

for (const planet of planets) {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
  
    // Set color
    planetDiv.style.backgroundColor = planet.color;
  
    section.appendChild(planetDiv);
  }

  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");
  
    // Position moons randomly around planet
    moon.style.top = Math.random() * 80 + "px";
    moon.style.left = Math.random() * 80 + "px";
  
    planetDiv.appendChild(moon);
  }