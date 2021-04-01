//react and redux imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'; //needed to create store and use the middleware redux-thunk for reducers that were async
import thunk from 'redux-thunk'; //middleware needed to handle any and all asyncronous action creators

import App from './components/App';

import reducers from './reducers';

//apply thunk to our store to make the reducers async work correctly with it
const store = createStore (reducers, applyMiddleware (thunk));
//exactly how we create our global store: we need to pass it our root reducers import (which combines all reducers) and also
//only since we use async action creators, we need to add a second argument of applyMiddleware(thunk) which basically uses
//our imported thunk library see line 6 and 5 [this is a must do immediately for any app we know will need it]
//its easiest to just do all these imports right away

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById ('root')
);
