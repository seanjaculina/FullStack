import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignIn.css';

const SignIn = () => {
  // this is fine for small state however the convention is to use separate state for all inputs and everything else
  const [information, setInformation] = useState({
    username: '',
    room: '',
  });

  // Handles the state changes in the input to make this a controlled component
  const onHandleChange = (e) => {
    setInformation({
      ...information,
      [e.target.name]: e.target.value,
    });
  };

  // Haandles when the user is ready to 'sign-in'
  const onHandleSubmit = (e) => {
    if (!information.username || !information.room) {
      e.preventDefault();
    } else {
      return null;
    }
  };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Sign In</h1>
        <div>
          <input
            name="username"
            placeholder="Display Name"
            className="joinInput"
            value={information.username}
            type="text"
            onChange={onHandleChange}
          />
        </div>
        <div>
          <input
            name="room"
            placeholder="Room Name"
            className="joinInput mt-20"
            value={information.room}
            type="text"
            onChange={onHandleChange}
          />
        </div>
        {/*
                Go to the /chat which renders a room but we want to pass some query params in the URL so
                we can easily pull out the users name and room name they entered so that we can send this data to the backend to return
                to us some info in this connection + any UI stuff as well
         */}
        <Link
          className="button mt-20"
          type="submit"
          onClick={onHandleSubmit}
          to={`/chat?name=${information.username}&room=${information.room}`}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
