const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const bodyParser = require('body-parser');

const todos = [
  {
    id: 1,
    description: 'Write a book',
    completed: false,
  },
  {
    id: 2,
    description: 'Build an app',
    completed: false,
  },
  {
    id: 3,
    description: 'Meet a friend for lunch',
    completed: false,
  },
];
app.use(bodyParser.json());

app
  .get('/todos', function (req, res) {
    res.send(todos);
  })
  .post('/todos', function (req, res) {
    todos.push(req.body);
    res.send(todos);
  })
  .delete('/todos/:id', function (req, res) {
    let todoId = parseInt(req.params.id);
    let todoIndex = todos.findIndex(function (todo) {
      return todo.id === todoId;
    });
    if (todoIndex !== -1) {
      todos.splice(todoIndex, 1);
    }
    res.send(todos);
  })
  .put('/todos/:id', function (req, res) {
    let todoId = parseInt(req.params.id);
    let todoIndex = todos.findIndex(function (todo) {
      return todo.id === todoId;
    });
    if (todoIndex !== -1) {
      todos[todoIndex].description = req.body.description;
      todos[todoIndex].completed = req.body.completed;
    }
    res.send(todos);
  })
  .listen(3000, function () {
    console.log('Server started on port 3000');
  });
module.exports = app;
