import { combineReducers } from 'redux';

// Reducer imports
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  tasks: taskReducer,
  error: errorReducer, // holds error state
  auth: authReducer, // holds auth state
});
