const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

// Instantiate new express instance + create a server
const app = express();
const server = http.createServer(app);

// Create a socket with our newly created socket
const io = socketIO(server);

// // Default router
// app.get('/', (req, res) => {
//   res.send('<h1>Hello, world</h1>');
// });

io.on('connection', (socket) => {
  console.log('Socket connected');

  // this event that we emitted in client sent a name and room so, on server we
  // need to accept the join event in this socket connection and do stuff with that data we sent (which is the second
  // argument which we pull out from the function .on(event, data) expects
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
  });

  // The socket that opened up can have events on it also.
  socket.on('disconnect', () => {
    console.log('User has left the chat');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server started on port ${PORT}`));
