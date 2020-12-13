import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

// Socket instance
let socket;

const Chat = ({ location }) => {
  const [name, setUserName] = useState('');
  const [room, setRoom] = useState('');

  // Socket connection endpoint
  const endpoint = '/';

  useEffect(() => {
    // pull out the username and room query string keys easily from location.search object
    // natively we cannot get query string keys like we can with params, so we use query-string library to help
    const { name, room } = queryString.parse(location.search);

    // Open a new socket connection between the client server and the backend at '/' (using proxy so this is okay)
    socket = io(endpoint);

    setUserName(name);
    setRoom(room);

    // emit an event from the client to the server for some new 'event' in this websocket channel
    // in this case we are 'join'ing and then sending the information to the server to tell it that
    // username just joined chatRoom. The third argument is a callback which is fired off only if the callbacks
    // in the server side that listend for this event is fired orr. In this case, if an error showed up, we'd fire the callback off with that error.
    // in the server side which would then cause this third arg. callback accepting that error to run
    socket.emit('join', { name: name, room: room }, (error) => {});

    // cleanup. Close up the connection and turn it
    return () => {
      socket.emit('disconnect');
      socket.off();
    };
  }, [location.search, endpoint]);

  return (
    <div>
      <h1>Chat</h1>
    </div>
  );
};

export default Chat;
