const containerDiv = document.getElementById("container");
console.log(containerDiv);

const uls = document.querySelectorAll("ul.list");
uls[0].children[1].textContent = "Richard";

uls[1].children[1].remove(); // removes "Sarah"

for (const ul of uls) {
    ul.children[0].textContent = "Emily";
}

for (const ul of uls) {
    ul.classList.add("student_list");
}

uls[0].classList.add("university", "attendance");