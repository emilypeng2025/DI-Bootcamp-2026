const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const tasksFilePath = path.join(__dirname, "../data/tasks.json");

// Helper function: read tasks from JSON file
function readTasks() {
  const data = fs.readFileSync(tasksFilePath, "utf-8");
  return JSON.parse(data);
}

// Helper function: write tasks to JSON file
function writeTasks(tasks) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

// GET /tasks
router.get("/", (req, res) => {
  try {
    const tasks = readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to read tasks file" });
  }
});

// GET /tasks/:id
router.get("/:id", (req, res) => {
  try {
    const tasks = readTasks();
    const task = tasks.find(t => t.id === Number(req.params.id));

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Failed to read tasks file" });
  }
});

// POST /tasks
router.post("/", (req, res) => {
  try {
    const { title, completed } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const tasks = readTasks();

    const newTask = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      completed: completed === undefined ? false : completed
    };

    tasks.push(newTask);
    writeTasks(tasks);

    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// PUT /tasks/:id
router.put("/:id", (req, res) => {
  try {
    const { title, completed } = req.body;

    if (title === undefined && completed === undefined) {
      return res.status(400).json({
        error: "Please provide title or completed"
      });
    }

    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === Number(req.params.id));

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    if (title !== undefined) {
      tasks[taskIndex].title = title;
    }

    if (completed !== undefined) {
      tasks[taskIndex].completed = completed;
    }

    writeTasks(tasks);

    res.json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

// DELETE /tasks/:id
router.delete("/:id", (req, res) => {
  try {
    const tasks = readTasks();
    const taskIndex = tasks.findIndex(t => t.id === Number(req.params.id));

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    const deletedTask = tasks.splice(taskIndex, 1);

    writeTasks(tasks);

    res.json({
      message: "Task deleted successfully",
      task: deletedTask[0]
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

module.exports = router;