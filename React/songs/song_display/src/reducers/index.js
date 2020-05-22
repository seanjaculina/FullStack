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

//list of songs reducer: in this app example, we just use a static array.. in reality we would take in a data of something/source if so, async stuff, etc
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

//the initial state of a selected song is null because no user selected anything right the instance the app loaded, so, we need to pass it a default of null
//to avoid errors and if the selectedsong was undefined, we avoid this by a default to the data

//think of selectedSong as this.state = {
//   selectedSong: null
//}
//and it is basically changed wheneber the reducer sees a action type of song selected

//we just make state data/objects/etcc. we want to chnage in the parameter of reducers

//so this reducer takes in the selected sone from a button click to select it, and initially the stat is null (like normal state , its the same)
//here with default param but then all subsequent selections will send an action here to basically return the updated state of the currenly selected song
//the reducers are combined and put into store (which is made in the root index)
const selectedSongReducer = (selectedSong = null, action) => {
  //always check the actions type in reducers of course! If a button is pressed to select a song, we know that event will fire off a call to
  //selectSong action creator. That action creator then returns an object with an action type and payload. We check the type in all reducers to determine which
  //action was made, and what state to change. The state is the first param in a reducer (if we are tracking items in a car, it would be an empty array param (state should always be null,empty,e tc intiially)
  //and depending on which action type returns true based off its check (in this apps case, we only have one reducer of course, so it will always only go and update here),
  //the reducer returns the data sent from the action. This changes the state, and also allows us to see the newest state by using our connect and providers)

  //this check happens everytime the song is selected and will return the payload to update state and update the store (store knows this automatically [we just need to bundle the reducers])
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  //else, return the selected song (this is the case for when we want to basically see the current state by console logging somewhwere or show that
  //song name in the html)
  //we can simply use mapstatetoprops and that is passed into connect which connected to the provider to give us our store(state) and then return
  //an object there of a key and value which is the reducers name (which we alias below in the export)
  return selectedSong;
};

//combine reducers: takes in object of key/value where key will be how we can fire a reducer and the value is the reucer itself which will
//be invoked whenever a dispatch is sent
export default combineReducers ({
  songs: songReducer,
  selectedSong: selectedSongReducer,
});

//always export the combined set of reducers so anywhere in the project the app can get the combined reducers
// default export therefore it is not named which means that we simply do an es6 import without destructuring: the import will know that
//the name we give it, will reference the default exported object!

//in this case, the reducers index file must return a combineReducers and we reference it in the root index to pass as a bundle to createStore in our provider

/**
 * I was confused at first: we never call the reducers really. We only can get the state/change it in a component by using the mapStateToProps
 * as that takes in our global state (the store which wraps the whole app, so it is simply known everywhere)
 * and can use the current state as its mapped to the props object to the component we used the map on. Every component does this map logic,
 * so, every component has the ability to see the state and change it with action (look back on the code to see how everythign is wired up and our diagrams)
 */
