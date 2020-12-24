import { combineReducers } from 'redux';

// Reducer imports
import itemReducer from './itemReducer';

export default combineReducers({
  items: itemReducer, // item is the key in our state object and the itemReducer contains a function that switches an action and returns state to this key
});
