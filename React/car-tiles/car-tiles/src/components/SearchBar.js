//import react (different for class based)
import React, { Component } from "react";

class SearchBar extends Component {
  // No need for constructor if not using instance variables / inheritance
  state = {
    car_input: "", // will be changed with the onChange() handler which will index the state here with the name attribute in that form element
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // handle the form submission
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.userSubmission(this.state.car_input.trim());
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="img-search"></label>
            <input
              type="text"
              id="img-search"
              placeholder="Enter car"
              name="car_input"
              value={this.state.term} // always must re-update the value to the current state of the controlled input
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
