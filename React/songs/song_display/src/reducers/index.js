/**
 * 
 * Reducers file:
 * 
 *  contains all the reducers we would need to change state based off some action invoked by our user on the front end
 * 
 * and we will combine them into our redux store by design 
 * 
 * 
 */

import {combineReducers} from 'redux'; // <- used to combine all our reducers to throw into our store to handle state

//list of songs reducer: in this app example, we just use a static array.. in reality we would take in a current state of something if so, async stuff, etc
const songReducer = () => {
  //reducer takes in state and an action (in this case, we arent tracking state of songs simply because we want to show how redux works
  //so we simply return a static array and thatrs all this all will ever see/use (in an actual app, we would want to take in for example the lsit of
  // songs from a search for eacmple, and bascially add songs to it say if this app was implementing a playlist feature or somethiong))
  return [
    {
      title: 'Millionaire',
      duration: '4:05',
    },
    {
      title: 'Allstar',
      duration: '3:15',
    },
    {
      title: 'Hello',
      duration: '4:10',
    },
  ];
};

//always default inserted state because when the app first starts, no state exists therefore we always default the state we
//expect to be passed. and of course we are also passed an action to perform the reducer op on
const selectedSongReducer = (selectedSong = null, action) => {
  //always check the actions type in reducers of course! We want to know how to change state
  //in this case, again this app only uses a static list of songs so we are not gonna change state, we are simp,y going to
  //return the selected songs payload so we can pass that data to our display box in our UI design
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  //else, return the selected song
  return selectedSong;
};

//combine reducers: takes in object of key/value where key will be how we can fire a reducer and the value is the reucer itself which will
//be invoked whenever a dispatch is sent
export default combineReducers ({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});

//always export the combined set of reducers so anywhere in the project the app can get the combined reducers
