import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // react fragment <> can also use <Fragment/>
  <>
    <App />
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
