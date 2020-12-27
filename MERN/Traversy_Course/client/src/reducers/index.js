import { combineReducers } from 'redux';

// Reducer imports
import itemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  tasks: itemReducer, // holds task state
  error: errorReducer, // holds error state
  auth: authReducer, // holds auth state
});
