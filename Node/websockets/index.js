import express from 'express';

// App initialization
const app = express();

// Middlewares

// Init a port number
const PORT = process.env.PORT || 3000;

// Create a server
const server = app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`),
);
