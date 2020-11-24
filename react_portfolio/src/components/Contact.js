import React, { useState } from 'react';

import Fade from 'react-reveal/Fade'; // fade in effect

const Contact = () => {
  // Handle the input elements
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    submission: '',
  });

  // will not mutate the old state, but will make a new state with whatever state was last seen + the new state
  const onChange = (e) => {
    setState((oldState) => ({ ...oldState, [e.target.name]: e.target.value }));
  };

  return (
    <Fade>
      <div className="section_container">
        <h1 className="section__heading">Contact Me</h1>
        <form
          className="form-inp"
          action="https://formspree.io/xaypqgjn"
          method="POST"
          style={{ width: '70%', margin: '0 auto' }}
        >
          <div className="form-group">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="firstName"
              value={state.firstName}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last"
              name="lastName"
              value={state.lastName}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="submission">Send me a message</label>
            <textarea
              name="submission"
              className="form-control"
              onChange={onChange}
              value={state.submission}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Fade>
  );
};

export default Contact;
