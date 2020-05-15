import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    //bind events to this
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //call back for the onchange evnt handler (of course could have been called in the event itself, but eh)
  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  //handles the submission of the search term
  //prevent the default enter to submit
  onFormSubmit(e) {
    e.preventDefault();

    //TODO: make sure to call from parent component
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-video">Video Search</label>
            {/*make a controlled input: that is, hook it to state to store the data (every char entered) for the search component and not the dom*/}
            <input
              type="text"
              id="serch-video"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
