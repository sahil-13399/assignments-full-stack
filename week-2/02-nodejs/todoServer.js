/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs/promises');

const app = express();

let todos = [];
const dataFilePath = 'todosData.json';

app.use(bodyParser.json());

// Load data from file on server start
const loadDataFromFile = async () => {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    todos = JSON.parse(data);
  } catch (error) {
    // Ignore if the file doesn't exist or if there's an error reading it
    console.error('Error loading data from file:', error.message);
  }
};

// Save data to file after every modification
const saveDataToFile = async () => {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(todos, null, 2));
  } catch (error) {
    console.error('Error saving data to file:', error.message);
  }
};

// Load initial data from file
loadDataFromFile();

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todo = todos.find(todo => todo.id === parseInt(req.params.id));
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.post("/todos", (req, res) => {
  const { title, description } = req.body;
  const newTodo = {
    id: todos.length + 1,
    title,
    description,
    completed: false,
  };

  todos.push(newTodo);
  saveDataToFile(); // Save data to file after adding a new todo

  res.status(201).json({ id: newTodo.id });
});

app.put("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const updatedTodo = req.body;

  const index = todos.findIndex(todo => todo.id === todoId);

  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    saveDataToFile(); // Save data to file after updating a todo
    res.json({ message: 'Todo updated successfully' });
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

app.delete("/todos/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  const index = todos.findIndex(todo => todo.id === todoId);

  if (index !== -1) {
    todos.splice(index, 1);
    saveDataToFile(); // Save data to file after deleting a todo
    res.json({ message: 'Todo deleted successfully' });
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Handle undefined routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
