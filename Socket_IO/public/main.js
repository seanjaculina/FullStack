//grab the form
const chatArea = document.getElementById('chat-form');

//get username from the url query string using qs library (see the docs) [this is for the front end to render. On the back end we simply use destructuring on the joinRoom (and as seen oin the emit below)]
const { username } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

//make a new socket
const socket = io();

//join the chat
socket.emit('joinRoom', { username });

//this one function will listend for all message emissions on the backend handling our chat, and show them in the dom with the dom manipulation we did below! Super simple on the front end: this is how it should look for any app

//also, message is the event we are listening to. This MUST MATCH THE EMISSION io name we give the message to be sent to the client! I couls have called trhe message io's 'football' and then we would have to listen on 'football' to display the message passed up to use

socket.on('message', (message) => {
  outputMessage(message); //output the message to the DOM

  //grab the UL in the dom and auto scroll the UI to the last message seen
  const ul = document.getElementById('messages');
  ul.scrollTop = ul.scrollHeight;
});

//message submit
chatArea.addEventListener('submit', (e) => {
  e.preventDefault();

  //grab the form input: use the event param and target the input element(id'd as m which we can see below we are grabbing from the elements) and the value
  const message = e.target.elements.m.value;

  //emit the message to the server: remember that the emit event value can be called anything: we just need to make sure when we catch it using on, etc. we catch this exact event name for the server and client to see and use
  socket.emit('chatMessage', message);

  //clear the input field for clean UI
  e.target.elements.m.value = '';
  e.target.elements.m.focus(); //automatically focus to the empty imput for the next message to be typed
});

//output message to the DOM (we socket.on (show) this message with message as its event in the backend)
function outputMessage(message) {
  //we are using a list to display messages, so we will need to grab the ul
  const ul = document.getElementById('messages');

  const li = document.createElement('li'); //from here, we want to create a new li (which will hold a div of information about the message)
  li.classList.add('message-list-item'); //give the li a class for styling,e tc.
  const div = document.createElement('DIV'); //create the div that should show up inside th elist item which will hold message, users name, etc.

  //if this is simply the entry message, do not display a time or username again
  if (message.message === 'Welcome to the chat') {
    const messageText = `<p class="message-text-p">${message.message} ${username}</p>`;
    div.innerHTML = messageText;
    //append the div to the LI
    li.appendChild(div);
    ul.appendChild(li);
    return;
  }
  //if the user is entering or joining the chat, only display a message that they joined. Not a time and username! This is for simpler UI
  else if (
    message.message.substring(
      message.message.length - 19,
      message.message.length
    ) === 'has joined the chat' ||
    message.message.substring(
      message.message.length - 17,
      message.message.length
    ) === 'has left the chat'
  ) {
    const messageText = `<p class="message-text-p">${message.message}</p>`;
    div.innerHTML = messageText;
    //append the div to the LI
    li.appendChild(div);
    ul.appendChild(li);
    return;
  } else {
    const messageText = `<p class="message-text-p">${message.message}</p>`;
    const timeSpan = `<span class="time-span">Time: ${message.time}</span>`;
    const userName = `<span class="user-name-span">User: ${message.username}</span>`;

    div.innerHTML = messageText + timeSpan + userName;

    //append the div to the LI
    li.appendChild(div);
    ul.appendChild(li);
  }
}
