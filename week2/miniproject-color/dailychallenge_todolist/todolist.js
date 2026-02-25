// Step 1: create empty array
const tasks = [];

// Step 2: get elements from HTML
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.querySelector(".listTasks"); //.listTasks .means this is a class name: find the element with class = "listTasks" . means “Select by class name”, .sth: class; #sth: id

// Step 3: when form is submitted
form.addEventListener("submit", function(event) {
  event.preventDefault(); // stop page refresh
  const text = input.value.trim();
    //when the form is submitted/submit is the event type: run this function(event: the event is information about what just happened):
    //.trim()removes extra spaces

// Step 4: check if empty
  if (text === "") {
    return;
  }



  // Step 5: add to array
  tasks.push(text);

  // Step 6: create a div for the task
  const taskDiv = document.createElement("div");

  // Step 7: create delete button (X)
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "X"; // innerHTML means 标签里面的内容 “The HTML content inside an element.” It controls what is inside the opening and closing tag.<button></button> deleteBtn.innerHTML = "X"; =><button>X</button>

  // when clicking X → remove task from screen
  deleteBtn.addEventListener("click", function() {
    list.removeChild(taskDiv);
  });

  // Step 8: create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox"; //type is a property of input elements, It defines what kind of input it is. now it becomes <input type="checkbox">

  // Step 9: create label (task text)
  const label = document.createElement("span");
  label.innerText = text;

  // when checkbox is clicked → cross out text
  checkbox.addEventListener("change", function() {
    if (checkbox.checked) {
      label.style.textDecoration = "line-through";
      label.style.color = "red";
    } else {
      label.style.textDecoration = "none";
      label.style.color = "black";
    }
  });

  // Step 10: put everything inside taskDiv
  taskDiv.appendChild(deleteBtn);
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(label);

  // Step 11: add taskDiv to page
  list.appendChild(taskDiv);

  // Step 12: clear input
  input.value = "";
});