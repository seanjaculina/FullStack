const express = require('express');
const socketIO = require('socket.io');

const app = express();

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server started on port ${PORT}`));

// Default router
app.get('/', (req, res) => {
  res.send('<h1>Hello, world</h1>');
});
