import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };

    //bind events to this
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //callback for the onchange event handler: everytime a character is pressed, onchange calls this method to reset the state capture of the current search term
  onInputChange(e) {
    this.setState({term: e.target.value});
  }

  //handles the submission of the search term
  //prevent the default enter to submit
  onFormSubmit(e) {
    e.preventDefault();

    //call the onsearchsubmit method from app component which takes the search term state, and uses the axios library to call it and search youtube
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="search-video">Video Search</label>
            {/*make a controlled input: that is, hook it to state to store the data (every char entered) for the search component and not the dom
            and assign the value of the input node the state term for efficiency*/}
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
