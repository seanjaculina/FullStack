import React from 'react';

//css imports
import '../App.css';

//always destructure if we are trying to import named exports (function, etc. exported from a file) and just a variable name for default exports
import SongList from './SongList';
import SongDetail from './SongDetail';

//Top level app functional component
const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
      <div>
        <SongDetail />
      </div>
    </div>
  );
};

export default App;

//as we know, we want to only use class components when we need state (until we learn hooks)
