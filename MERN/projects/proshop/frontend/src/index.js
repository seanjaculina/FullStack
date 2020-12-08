import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './bootstrap.min.css'; // for lux bootswatch!
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import our store which does all the combine reducers, init state, etc.
import store from './store';

ReactDOM.render(
  // Provider provides the application state to the whole app. Takes
  // in one prop called store which is the store we created in store.js
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);

reportWebVitals();
