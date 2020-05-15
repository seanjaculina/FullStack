import React, { Component } from "react";

//component imports
import SearchBar from "./SearchBar";

//styles
import "../App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
