const express = require('express');
const app = express();
const PORT = 3000;

const todos = require('./todo');

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.get('/api/todos', (req, res) => {
  res.json(todos.getTodos());
});

app.post('/api/todos', (req, res) => {
  const { task } = req.body;
  const newTodo = todos.addTodo(task);
  res.status(201).json(newTodo);
});

app.delete('/api/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const success = todos.deleteTodo(id);
  if (success) {
    res.sendStatus(204);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.patch('/api/todos/:id/toggle', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = todos.toggleTodo(id);
  if (updatedTodo) {
    res.json(updatedTodo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});