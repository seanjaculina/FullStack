import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render (
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById ('root')
);

/**
 * react.ref will reference an already rendered dom element
 * react.fragment will render multiple DOM elements withiout the mandatory root wrapper on it which it essentially makes a black element that wont actually exist
 */
