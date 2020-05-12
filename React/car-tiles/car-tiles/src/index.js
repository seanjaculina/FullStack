//Must import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';

//static assets imports
import './static/index.css';

//component imports
import App from './components/App';

//root app render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
