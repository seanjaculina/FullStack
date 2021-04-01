import React from "react";

//css import
import "../App.css";

// components are not named exports. They are default exports therefore we can represent the whole file with a name here but if its a named export (like our actions)
// we always need to destrucutre those functions (same for node apps.. exports const app = ... needs to be const {S} = require(...) and so on)
import SongList from "./SongList";
import SongDetail from "./SongDetail";

// Always need an App component that would typically mount any top level sub components like navbar, react routers, etc
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
