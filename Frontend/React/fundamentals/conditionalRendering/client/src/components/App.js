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
    this.state.text === "Show Hello"
      ? this.setState({
          showing: !this.state.showing,
          text: "Hide Hello",
        })
      : this.setState({
          showing: !this.state.showing,
          text: "Show Hello",
        });
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
