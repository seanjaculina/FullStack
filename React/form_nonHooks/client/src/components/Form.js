import React, { Component } from "react";

class Form extends Component {
  state = {
    username: "",
    password: "",
  };

  // Takes in the currently entered character and changes the state for the particular
  // input element
  handleFormChange = (e) => {
    console.log(e.target.value);
    this.setState({
      // get the name attribute of the input field we are typing in and index the state and take the current character entered and add that in
      [e.target.name]: e.target.value,
    });
  };

  // Will prevent the default behavior of form submission, and send the state result - simulates what we would maybe
  // do for a sign in and send a request to as server to sign in to an application
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onFormSubmit(e)}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={(e) => this.handleFormChange(e)}
          />
          <label htmlFor="password">Username</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={(e) => this.handleFormChange(e)}
          />
          <button type="submit" onSubmit={(e) => this.handleFormChange(e)}>
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
