import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      {
        track: {
          track_name: "abc",
        },
      },
      {
        track: {
          track_name: "123",
        },
      },
      {
        track: {
          track_name: "fvevve",
        },
      },
    ],
  };

  render() {
    return (
      // we need to tell our context provider what state to provide visibility to in every component. In this case,
      // we want all our state in our Provider to be given to all our components
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

/**
 * No default export for this file: we are going to be exporting the Provider and a consumer
 *
 * The provider will wrap all app components to provide app level state to our application. THis is basically a faster, but less
 * advanced redux. This is good for small projects like this: a client side music app that needs more state than local state but less than
 * a full fledged , dense app that could use redux
 *
 * In our provider class, we essnetially have state. This is just like the 'store' in redux which we can
 * store state any moment in time within our app and basically change it through actions and receive it with a context consumer
 *
 *
 *
 */
