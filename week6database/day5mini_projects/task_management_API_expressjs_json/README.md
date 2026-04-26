Week 6 Day 5 Mini Project: Task Management API #1

Create a Task Management API with Express.js and JSON File Storage


Instructions
1. Set up a new Express.js application.
2. Implement the following routes using express.Router:

GET /tasks: Retrieve a list of all tasks from a JSON file.
GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
POST /tasks: Create a new task and store it in the JSON file.
PUT /tasks/:id: Update a task by ID in the JSON file.
DELETE /tasks/:id: Delete a task by ID from the JSON file.
3. Create a JSON file (e.g., tasks.json) to store task data. Initialize it with an empty array [].
4. Use appropriate validation to ensure the user provides necessary data when creating or updating tasks.
5. Implement error handling for file read/write operations and route validation.
6. Test your API using tools like Postman or curl.


📌 Task Management API (Express.js + JSON Storage)

📖 Project Overview

This project is a simple Task Management API built using Express.js.
Instead of using a database, it stores data in a local JSON file (tasks.json).

The API supports full CRUD operations:

* Create tasks
* Read tasks
* Update tasks
* Delete tasks

This project demonstrates basic backend development concepts including routing, file handling, and API design.

⸻

🛠️ Technologies Used

* Node.js
* Express.js
* File System Module (fs)
* JSON file as data storage

⸻

📂 Project Structure
task_management_API_expressjs_json/
│
├── server.js
├── routes/
│   └── tasksRouter.js
├── data/
│   └── tasks.json
├── package.json
└── README.md


⚙️ Installation & Setup

1. Clone or download the project
2. Navigate to the project folder:

code: 
cd task_management_API_expressjs_json

3. Install dependencies:
code:
npm install

4. Start the server:
code:
node server.js

Server will run on:
http://localhost:3000


🚀 API Endpoints

1. Get All Tasks
code: 
GET /tasks

2. Get Task by ID
code: 
GET /tasks/:id

3. Create a New Task
code: 
POST /tasks

Body example:
JSON:
{
  "title": "Study Express",
  "completed": false
}

4. Update a Task
code:
PUT /tasks/:id

Body example:
JSON:
{
  "completed": true
}

5. Delete a Task
code:
DELETE /tasks/:id

🧪 Testing the API

The API was tested using:

* curl (Terminal)
* Browser (for GET requests)

Example:

Create task:
code:
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Study Express","completed":false}'

Get all tasks:
code:
curl http://localhost:3000/tasks

⚠️ Error Handling

* Returns 400 if required fields are missing
* Returns 404 if task is not found
* Returns 500 for server/file errors

⸻

📌 Notes

* Data is stored in a JSON file instead of a database
* IDs are generated automatically
* File operations use synchronous methods (fs.readFileSync, fs.writeFileSync)

⸻

🌱 Future Improvements

* Replace JSON storage with PostgreSQL
* Add authentication (login/register)
* Add more fields (priority, due date)
* Use async file handling
* Deploy the API

⸻

👩‍💻 Author

Emily Peng