import React, { Component } from "react";
import { Consumer } from "../../context"; // Bring in our global state = our consumer

// Components
import Spinner from "../layout/Spinner";
import Track from "./Track";

// class based component : we are going to use pure state/lifecyle methods (no hooks)
class Tracks extends Component {
  render() {
    return (
      // we want this component to 'consume' our global state from our Provider we made, so,
      // we need to insert it as a component into the return method
      // and then inside write a JS function that will send all the state into whatever we render as JSX now for this component
      <Consumer>
        {(value) => {
          // pull out just the track list array state and the heading state
          const { track_list, heading } = value;

          // conditionally render the spinner based off of if the api request is being requested and parsed still or not
          return !track_list || track_list.length === 0 ? (
            <Spinner />
          ) : (
            <>
              <h3 className="text-center mb-4">{heading}</h3>
              <div className="row">
                {track_list.map((tk) => (
                  // pass it the trackid as the key and the whole track object down as props
                  <Track key={tk.track.track_id} track={tk.track} />
                ))}
              </div>
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default Tracks;
