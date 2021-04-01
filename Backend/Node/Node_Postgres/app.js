const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config(); // must config to let nodejs use the environment variables

const db = require('./config/database');

// Middlewares
const app = express();
app.use(express.json());

// Connect to the database
(async function connectDB() {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.get('/', (req, res) => res.send('Index'));

// routes - like blueprints in flask - applies modularity to the routes in a server
app.use('/gigs', require('./routes/gigs'));

// Listen for requests on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
