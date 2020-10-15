import React from "react";
import { Link } from "react-router-dom";

// takes in the track itself as a prop
const Track = ({ track }) => {
  return (
    <div className="col-md-6">
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i>Track
            </strong>
            : {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i>Album
            </strong>
            : {track.album_name}
          </p>
          <Link
            //this is a link to a route we establish in the router - a different ui will show up based on the id param passed in
            // see app.js
            to={`lyrics/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i
              className="fas fa-chevron-right"
              style={{ paddingRight: "1rem" }}
            ></i>
            View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
