import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'; // can leave off the index.js as if you import a foilder, JS looks automatically for an index.js

const initialState = {};

const middlewares = [thunk];

/**
 * Ths is what createStore takes in: root combined reducers, initial state and composeWithDevTools middleware
 */
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export default store;
