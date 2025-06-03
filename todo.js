let todos = [];
let currentId = 1;

function getTodos() {
  return todos;
}

function addTodo(task) {
  const todo = { id: currentId++, task, completed: false };
  todos.push(todo);
  return todo;
}

function deleteTodo(id) {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    return true;
  }
  return false;
}

function toggleTodo(id) {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    return todo;
  }
  return null;
}

module.exports = { getTodos, addTodo, deleteTodo, toggleTodo };