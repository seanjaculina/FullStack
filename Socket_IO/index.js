const express = require('express'); //import express for our main rendering server
const http = require('http'); //import http for socket io to work
const path = require('path'); //import path to join dirname and public folder and also the html
const socketio = require('socket.io'); //import socketio

const app = express(); //new instance of express (by convention it is called app)
const server = http.createServer(app); //create a new server instance for socketio to run on that takes in the express app
const io = socketio(server); //create a new io instance that uses the server we made [used for sending io to the front end!]

//tell express to use static assets(css, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

//create a simple route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//listen for a connection event on incoming sockets and log that a new user connected when a connnection is successful
io.on('connection', (socket) => {
  //Welcome the current user
  socket.emit('message', 'Welcome to the chat');

  //Broadcast when a new user connects [broadcast emits the message to everyone in the chat]
  socket.broadcast.emit('message', 'A user has joined the chat');

  //runs when user disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat');
  });

  //listen for a chat message: we emitted chatmessage on front end, so listen for it here
  socket.on('chatMessage', (msg) => {
    //emit message to everyones UI so we use IO [this again, we called message and in our main.js we listen for all emission of 'message'! so itr will also be accomodated for and used]
    io.emit('message', msg);
  });
});

//create a development port
const PORT = 3000 || process.env.PORT;

//listen (starts the server)
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
