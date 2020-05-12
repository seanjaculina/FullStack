const express = require('express'); //import express for our main rendering server
const http = require('http'); //import http for socket io to work
const path = require('path'); //import path to join dirname and public folder and also the html
const socketio = require('socket.io'); //import socketio
const formatMessage = require('./utils/messages'); //our utility function to gather the message info

const { userJoin, getCurrentUser } = require('./utils/users'); //for handling user name, etc) [destructuring these two functions fro the users module]

const app = express(); //new instance of express (by convention it is called app)
const server = http.createServer(app); //create a new server instance for socketio to run on that takes in the express app
const io = socketio(server); //create a new io instance that uses the server we made [used for sending io to the front end!]

//tell express to use static assets(css, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

const chatBot = 'Chat Bot';

//username enter route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/entry.html'));
});

//on username submission, route to this pagev (which uses all the socket code)
app.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

//listen for a connection event on incoming sockets and log that a new user connected when a connnection is successful an
io.on('connection', (socket) => {
  socket.on('joinRoom', ({ username }) => {
    const user = userJoin(socket.id, username);
    socket.join();

    //Welcome the current user
    socket.emit('message', formatMessage(chatBot, 'Welcome to the chat'));

    //Broadcast when a new user connects [broadcast emits the message to everyone in the chat]
    socket.broadcast.emit(
      'message',
      formatMessage(chatBot, `${username} has joined the chat`) //this utility function returns the message object with user name and time
    );

    //runs when user disconnects
    socket.on('disconnect', () => {
      io.emit(
        'message',
        formatMessage(chatBot, `${username} has left the chat`)
      );
    });
  });

  //listen for a chat message: we emitted chatmessage on front end, so listen for it here
  socket.on('chatMessage', (msg) => {
    //get the current user
    const user = getCurrentUser(socket.id);
    //output the users message
    io.emit('message', formatMessage(user.username, msg));
  });
});

//create a development port
const PORT = 3000 || process.env.PORT;

//listen (starts the server)
server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
