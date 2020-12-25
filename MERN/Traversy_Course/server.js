const express = require('express');
require('colors');
const dbConnect = require('./db');
require('dotenv').config();

dbConnect(process.env.MONGO_URI); // connect to MongoDB

const app = express();

app.use(express.json()); // to parse body data in requests

// routes use/imports
app.use('/api/tasks', require('./routes/api/tasks')); // all routes starting with /api/items should use the routes in this file

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.bgMagenta.white),
);
