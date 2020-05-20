/**
 * 
 * actions and reducer files should just be named index.js
 * 
 * Select song action creator file: used to create an action creator that returns an action to select_song from a user event click (on the button of the app design)
 * 
 * the action will basically have the type of select_song and then a payload of the song name and duration
 * 
 * we return this action and then use it in our reducers! All reducers receive the action, therefore, depending on the reducers 
 * meaning, it will determine how to handle the state
 * 
 */

//action creator
export const selectSong = song => {
  //returns an action [which is an object] -> payloads are optional but type is MANDATORY
  return {
    type: 'SONG_SELECTED',
    payload: song,
  };
};

//we need to use named exports for actions (used for returning many things in js) SO SEE LINE 12 which we export the whole thing itself
