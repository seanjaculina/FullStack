const express = require('express');
const socket = require('socket.io');
const http = require('http');
const colors = require('colors');

// Init application
const app = express();

app.get('/', (req, res) => {
  res.json({ msg: 'Opened connection.' });
});

// Create a server
const server = http.createServer(app);

// Express server startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever listening on port ${PORT}`.magenta));

// Instantiate a new web socket
const io = socket(server);

// Listen for a socket connection
io.on('connection', (socket) => {
  console.log(`Socket connection opened: ${socket.id}`);
});
