const express = require("express");
const tasksRouter = require("./routes/tasksRouter");

const app = express();
const PORT = 3000;

// Allows Express to read JSON body from requests
app.use(express.json());

// All task routes start with /tasks
app.use("/tasks", tasksRouter);

app.get("/", (req, res) => {
  res.send("Task Management API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});