import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/*passing a prop to App component called name*/}
    <App name='Tanner' />
  </React.StrictMode>,
  document.getElementById('root')
);
