import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context"; // we want to connect to our context using consumer

class Search extends Component {
  state = {
    trackTitle: "",
  };

  // arrow functions will bind event listeners to the context of this class for us. If not, use bind
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value, // dynamic state change - given the field targets name, we can change that state in the local state - real cool
    });
  };

  // will submit request to the music API based off the users search
  onSubmit = async (dispatch, e) => {
    e.preventDefault(); // prevent page reloading default behavior
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_API_KEY}`;
    try {
      const res = await axios.get(endpoint);
      const trackListings = await res.data;

      // dispatch the search action to change the app state of the set of search results
      dispatch({
        type: "SEARCH_TRACKS",
        payload: trackListings.message.body.track_list,
      });
      this.setState({ trackTitle: "" });
    } catch (err) {
      console.err(err);
    }
  };

  render() {
    return (
      //consume our app level state in our context that was 'provided' to us
      <Consumer>
        {(value) => {
          // pull out our dispatch method from our context which will send actions from here into reducer
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i> Search For A Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                {" "}
                {/* needed bind here so we can pass the dispatch as an argument to our onSubmit method to dispatch the search action to change the state of the song listings */}
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mb-5"
                >
                  Get Track Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
export default Search;
