import { combineReducers } from 'redux';

// Reducer imports
import itemReducer from './itemReducer';

export default combineReducers({
  items: itemReducer,
});
