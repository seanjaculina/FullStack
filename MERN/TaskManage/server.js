const express = require('express');
const path = require('path');
const dbConnect = require('./db');

const app = express();

app.use(express.json()); // to parse body data in requests

// routes use/imports (using express router for de-coupling)
app.use('/api/tasks', require('./routes/api/tasks')); // for task related routes
app.use('/api/users', require('./routes/api/users')); // for registering a new user
app.use('/api/auth', require('./routes/api/auth')); // for login / authenticated routes

// Do not use dotenv package in production: check against this (for heroku / if planning to deploy only)
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
dbConnect(process.env.MONGO_URI); // connect to MongoDB

// Serve static assets if in deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 4040;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
