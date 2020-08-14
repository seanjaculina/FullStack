import React, { Component } from "react";
import "../App.css";
import Hello from "./Hello";

class App extends Component {
  state = {
    showing: false,
    text: "Show Hello",
  };

  // Handles state change in the component
  onHandleClick = () => {
    if (this.state.text === "Show Hello") {
      // change the state to the opposite of what it currently is
      this.setState({
        showing: !this.state.showing,
        text: "Hide Hello",
      });
    }
    if (this.state.text === "Hide Hello") {
      this.setState({
        showing: !this.state.showing,
        text: "Show Hello",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.onHandleClick}>
          {this.state.text}
        </button>
        {this.state.showing ? <Hello /> : null}
      </div>
    );
  }
}

export default App;
