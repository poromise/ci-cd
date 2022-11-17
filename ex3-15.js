require('dotenv').config()
const mongoose = require('mongoose')
const express = require("express");

const app = express();

app.use(express.json());

//
const Person = require('./models/person')

//
app.get('/api/persons', (request, response) => {
    // Your code here
})

app.get('/api/persons/:id', (request, response) => {
  console.log(request.params.id);
  // Your code here
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  console.log(body.name)

  if (!body.name) {
    return response.status(400).json({
      error: "content missing",
    });
  }

   // Your code here
})

app.delete('/api/persons/:id', (request, response, next) => {
    // Your code here
})

//
app.listen(3001, () => {
  console.log(`Server running on port 3001`);
});