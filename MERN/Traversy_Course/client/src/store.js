import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index'; // can leave off the index.js as if you import a foilder, JS looks automatically for an index.js

const initialState = {};

const middleware = [thunk];

/**
 * createStore takes three arguments:
 * the root reducer (which contains all combined reducers)
 * initial state (can be anything we want: user object for auth, empty shopping list, etc. but must be in a wrapped object as seen above)
 * and middleware (since we are using redux devtools, we wrap it in compose and spread out our middlewares array)
 */
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
