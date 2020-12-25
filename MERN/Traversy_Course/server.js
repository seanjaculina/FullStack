const express = require('express');
const path = require('path');
require('colors');
const dbConnect = require('./db');
require('dotenv').config();

dbConnect(process.env.MONGO_URI); // connect to MongoDB

const app = express();

app.use(express.json()); // to parse body data in requests

// routes use/imports
app.use('/api/tasks', require('./routes/api/tasks')); // all routes starting with /api/items should use the routes in this file

// Serve static assets if in deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.bgMagenta.white),
);
