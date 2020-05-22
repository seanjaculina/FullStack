/**
 * 
 * actions and reducer files should just be named index.js
 * 
 * used to create an action creator that returns an action to select_song from a user event click (on the button of the app design)
 * 
 * the action will basically have the type of select_song and then a payload of the song name and duration
 * 
 * we return this action and then use it in our reducers! All reducers receive the action, therefore, depending on the reducers 
 * meaning, it will determine how to handle the state
 * 
 * we always make a file for action creators and name export them using export const name... so that way we can use this whole file 
 * in an import and extract the action creators that we wish to invoke from some event
 * 
 */

//action creator: takes in some song that is going to be the payload to the action we want to perform (Selecting song) [the actions creators are what are called on events!
//thats why we expect data (a song for this case) because the flow is:
/** 
 * 
 *    create action creators that take data and returns an action type and payload which will change state
 *    we make reducers that take in actions (all reducers take in the actions)
 * 
*/
export const selectSong = song => {
  //redux thunk can manually dispatch an action some time in the future: which we know async functions will retuns something sometime later
  //so we want that behavior: if we return a function , then we use dispatch and get state, if not, we just return a an action object like usual: redux thunk is obly invoked when
  //using an action creator thats asyncronous and needs that dispatch step to take some time
  return function (dispatch, getState) {};

  //returns an action [which is an object] -> payloads are optional but type is MANDATORY
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

//we need to use named exports for actions (used for returning many things in js) SO SEE LINE 12 which we export the whole thing itself
