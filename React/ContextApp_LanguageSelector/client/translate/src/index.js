import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

ReactDOM.render (
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.querySelector ('#root')
);

/**
 * react.ref will reference an already rendered dom element
 * react.fragment will render multiple DOM elements withiout the mandatory root wrapper on it which it essentially makes a black element that wont actually exist
 */

/**
  * this app is a basic app that will change the state of the submit button and all the text to the selected language a user selects on the flag buttons in the UI
  * 
  * I have decided to use US and Portugal
  */
