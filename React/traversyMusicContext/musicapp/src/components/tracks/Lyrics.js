import React, { Component } from "react";

/**
 * Depending on the URL for when this component is routed, a different song ID is in the URLL.
 * Using react-router v4+, we can easily extract the params from the url using props as it will be passed automatically as props! So cool
 */

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
  };

  render() {
    return (
      <div>
        <h1>Lyrics</h1>
      </div>
    );
  }
}

export default Lyrics;
