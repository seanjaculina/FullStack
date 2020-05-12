//STEP 1: Import react, react dom, base styling and our App main component: 
//the aliases can be anything but by convention we name the import the same as the library. We use 
//es6 imports to import modules and functions, etc. CommonJS uses the require system (depends on the module system and design
//pattern for the app (express uses require))
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';  //<--- ES6 import of the app component we default exported from components folder


//STEP 2: Render our app component using reactdom.render()
ReactDOM.render(
  //passing props: named variables in mount that can pass data down as a property to that component
  <App name='Tanner' age='24' />,
  document.getElementById('root')
);

