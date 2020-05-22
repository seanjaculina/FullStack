import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from './components/App';

import reducers from './reducers';

const store = createStore (reducers); //save a store reference before the render, simply for readability: this all could have been on
//line 14, but this makes life easier and the code nicer

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById ('root')
);
