import express from 'express';
import colors from 'colors';

// App initialization
const app = express();

// Middlewares

// Init a port number
const PORT = process.env.PORT || 5000;

// Create a server
app.listen(PORT, () =>
  console.log(
    `Server started on ${PORT}`.magenta, // colors from npm
  ),
);
