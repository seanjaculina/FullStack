const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

//Helper imports
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

// Instantiate new express instance + create a server
const app = express();
const server = http.createServer(app);

// Create a socket with our newly created socket
const io = socketIO(server);

// Default router
app.get('/', (req, res) => {
  res.send('<h1>Hello, world</h1>');
});

io.on('connection', (socket) => {
  // this event that we emitted in client sent a name and room so, on server we
  // need to accept the join event in this socket connection and do stuff with that data we sent (which is the second
  // argument which we pull out from the function .on(event, data) expects
  socket.on('join', ({ name, room }, callback) => {
    // addUser can return an error or the user we just added so, destructure both possibilities
    const { error, user } = addUser(socket.id, name, room);

    // send up the error to the client initiating the join
    if (error) return callback(error);

    // emit an event from the server that will simply welcome the user to the room
    // we will get this data usin .on in client, put it into some state and then show it in the UI
    socket.emit('message', {
      user: 'admin',
      text: `Welcome ${user.name} to ${user.room}`,
    });

    // also broadcast a message to the room that this user has just joined (we can see that these verbs are so well named)
    socket.broadcast
      .to(user.room)
      .emit('message', { user: 'admin', text: `${user.name} has joined!` });
    // else no error so put this user in the particular room
    socket.join(user.room);
    callback();
  });

  // The socket that opened up can have events on it also.
  socket.on('disconnect', () => {
    console.log('User has left the chat');
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server started on port ${PORT}`));
