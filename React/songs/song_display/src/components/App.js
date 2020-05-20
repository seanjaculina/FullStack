import React from 'react';
import '../App.css';

//always destructure if we are trying to import named exports (function, etc. exported from a file)
import {selectSong} from '../actions'; //imports our actions [webpack knows to give us the file in this folder] (this goes for anythng)

//Top level app functional component
const App = () => {
  return (
    <div className="App">
      <h1>Hello, world</h1>
    </div>
  );
};

export default App;

//as we know, we want to only use class components when we need state (until we learn hooks)
