import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// spinner component
import Spinner from "../layout/Spinner";
/**
 * Depending on the URL for when this component is routed, a different song ID is in the URLL.
 * Using react-router v4+, we can easily extract the params from the url using props as it will be passed automatically as props
 * when using react-router! So cool
 */

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  async componentDidMount() {
    const trackID = this.props.match.params.id; // the params.id is the id param in the URL that we distinguished in our router in the App.js (if we called it :green or :apple, whatever
    // it would be this.props.match.params.apple . The last object in the call is the param we signify in the router )
    // these endpoints takes track ID and of course, the api key again - we are getting the track ID from the match object in the URl given to us throiugh react router
    const lyricEndpoint = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackID}&apikey=${process.env.REACT_APP_API_KEY}`;
    const trackEndpoint = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${trackID}&apikey=${process.env.REACT_APP_API_KEY}`;
    try {
      // retrieve lyrics
      const res = await axios.get(lyricEndpoint);
      const lyrics = await res.data;

      // retrieve track info
      const trackRes = await axios.get(trackEndpoint);
      const trackData = await trackRes.data;
      this.setState({
        track: trackData.message.body.track,
        lyrics: lyrics.message.body.lyrics,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    // pull the state out using destructuring : semantics , not a must
    const { track, lyrics } = this.state;
    //display spinner while stuff is loading (the objects are undefined) or else show the nice UI or all song info
    return !track ||
      !lyrics ||
      Object.keys(track) === 0 ||
      Object.keys(lyrics) === 0 ? (
      <Spinner />
    ) : (
      <>
        {/* Go back button to go back to home */}
        <Link to="/" className="btn btn-dark btn-sm mb-4">
          Go Back
        </Link>
        <div className="card">
          <h5 className="card-header">
            {track.track_name} by{" "}
            <span className="text-secondary">{track.artist_name}</span>
          </h5>
          <div className="card-body">
            <p className="card-text">{lyrics.lyrics_body}</p>
          </div>
        </div>
        <ul className="list-group mt-3">
          <li className="list-group-item">
            <strong>Album ID</strong>: {track.album_id}
          </li>
          <li className="list-group-item">
            <strong>Explicit Words</strong>:{" "}
            {track.explicit === 0 ? "No" : "Yes"}
          </li>
        </ul>
      </>
    );
  }
}

export default Lyrics;
