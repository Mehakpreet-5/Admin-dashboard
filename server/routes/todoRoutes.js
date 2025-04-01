// const express = require('express');
// const Todo = require('../models/Todo');
// const router = express.Router();

// // Get all todos
// router.get('/todos', async (req, res) => {
//   try {
//     const todos = await Todo.find();
//     res.json(todos);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Create a new todo
// router.post('/todos', async (req, res) => {
//   const { text } = req.body;
//   const newTodo = new Todo({ text });

//   try {
//     await newTodo.save();
//     res.status(201).json(newTodo);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Update a todo
// router.put('/todos/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);
//     todo.completed = req.body.completed;
//     await todo.save();
//     res.json(todo);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Delete a todo
// router.delete('/todos/:id', async (req, res) => {
//   try {
//     const todo = await Todo.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Todo deleted', todo });
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;


// routes/todoRoutes.js
const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Get all todos with optional filter
router.get('/todos', async (req, res) => {
  try {
    const { filter } = req.query;
    let todos;
    if (filter === 'completed') {
      todos = await Todo.find({ completed: true });
    } else if (filter === 'pending') {
      todos = await Todo.find({ completed: false });
    } else {
      todos = await Todo.find();
    }
    res.json(todos);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Create a new todo
router.post('/todos', async (req, res) => {
  const { text } = req.body;
  const newTodo = new Todo({ text });

  try {
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a todo
router.put('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (req.body.text) todo.text = req.body.text;
    if (req.body.completed !== undefined) todo.completed = req.body.completed;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a todo
router.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: 'Todo deleted', todo });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
