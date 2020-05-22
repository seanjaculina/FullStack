import {combineReducers} from 'redux'; //must import: used to combine reducers to pass to store

//import our external reducers:
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

//must combine reducers for redux store: key is the alias we will reference, and it will call the reducer
export default combineReducers ({
  posts: postsReducer,
  users: usersReducer,
});

/**
 * so far we've seen examples of all reducers being in one file. This is fine for small projects like this, but, in reality,
 * this does not scale well! So, we will go forward making a separate file for all reducers, name export them and then import 
 * them here as destructured functions, and then combine them all with aliases in the combine reducers!
 */
