//action creator: takes in some song that is going to be the payload to the action we want to perform (Selecting song) [the actions creators are what are called on events!
//thats why we expect data (a song for this case) because the flow is:
/**
 *
 *    create action creators that take data and returns an action type and payload which will change state
 *    we make reducers that take in actions (all reducers take in the actions)
 *
 */
export const selectSong = (song) => {
  //returns an action [which is an object] -> payloads are optional but type is MANDATORY
  return {
    type: "SONG_SELECTED",
    payload: song, // will be the song selected in the UI which we can get data on that song through the redux store connection with mapstatetoprops because remember, the list of songs is actually apart of our state! So, when we map over it and display it
    // in the UI, whenever we attach a button to it, we get access to that data
  };
};
