import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

// obviously not a default export so we will need to use {} for the export object when importing
export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 tracks",
  };

  // fetch the tracks from the API
  async componentDidMount() {
    // using dotenv for securing the api key - see .env => we had to pass this as a http parameter in our wuery string (As we know,
    //we can use params in a query string with &key=val to start then preceeding & for others too) also notice the heroku call. This api has cors
    // enabled so we are using a proxy to send requests to the api and bypass cors - cool trick for frontend apps.. not good for production froontend apps (e.g: coffeeconnect issue with yelp)
    const endpoint = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_API_KEY}`;
    try {
      const res = await axios.get(endpoint);
      const trackListings = await res.data;
      //console.log(trackListings);

      //set the state here
      this.setState({
        track_list: trackListings.message.body.track_list,
      });
    } catch (err) {
      console.log(err);
    }
  }

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

// export the consumer to allow access to the state - similar to 'connect()' in redux
export const Consumer = Context.Consumer;

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
