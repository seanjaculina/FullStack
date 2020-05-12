import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

//this file is the entry point of react into the html: we render the root app component and grabn roor id to attach to 
ReactDOM.render(
  <React.StrictMode>
    <App name='Tanner' />
  </React.StrictMode>,
  document.getElementById('root')
);

