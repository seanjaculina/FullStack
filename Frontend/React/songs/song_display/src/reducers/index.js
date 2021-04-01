import { combineReducers } from "redux"; // <- used to combine all our reducers to throw into our store to handle state

// Typically this will be empty. I am replicating a list of songs here , but in reality we'd do network requests to a DB to get data, and change state andd show it here, etc.
const songs = () => {
  return [
    {
      title: "Millionaire",
      duration: "4:05",
    },
    {
      title: "Allstar",
      duration: "3:15",
    },
    {
      title: "Hello",
      duration: "4:10",
    },
  ];
};

// initial state is always empty/null/etc. depending on state: e.g a todo list initial state would be [] and so forth
const selectedSong = (selectedSong = null, action) => {
  //if action passed has matching type in reducers, we do soemthing with the state and we return the new state, else return the state as it was
  // we do not mutate the current state! We only return a new copy of the old state with changes
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//combine reducers: creates one large store of all our reducers (see notes on what a redux store looks like [just a bunch of combined up reducers which can store state and get actions from the UI to change it])
export default combineReducers({
  songs: songs,
  selectedSong: selectedSong,
});
// notice key/vals above match. In JS we can get rid of this redundancy and do
/**
 * export default combineReducers({
      songs,
      selectedSong,
});
 */
