//grab the form
const chatArea = document.getElementById('chat-form');

//make a new socket
const socket = io();

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
  e.target.elements.m.focus();
});

//output message to the DOM (we socket.on (show) this message with message as its event in the backend)
function outputMessage(message) {
  //get the time of submission
  const today = new Date();
  const hour = today.getHours();
  let mins = today.getMinutes();

  //minutes less than 10 do not accomodate for a 0 in front, so handle this
  if (mins < 10) {
    mins = '0' + mins;
  }

  const time = hour + ':' + mins;
  const postTime = time;

  //we are using a list to display messages, so we will need to grab the ul
  const ul = document.getElementById('messages');

  const li = document.createElement('li'); //from here, we want to create a new li (which will hold a div of information about the message)
  li.classList.add('message-list-item'); //give the li a class for styling,e tc.
  const div = document.createElement('DIV'); //create the div that should show up inside th elist item which will hold message, users name, etc.

  //add some html to this div: an article for the message, a span for the time and span for their username [do styling in the css of course]
  const messageText = `<p class="message-text-p">${message}</p>`;
  const timeSpan = `<span class="time-span">Time: ${postTime}</span>`;
  const userName = '<span class="user-name-span">Placeholder name</span>';

  div.innerHTML = messageText + timeSpan + userName;

  //append the div to the LI
  li.appendChild(div);
  ul.appendChild(li);
}
