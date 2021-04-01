import React, { Component } from "react"; // we know that names exports are functions, etc. froma  file and we need to destructure, so, thats what Component is

import { connect } from "react-redux";
// in the architecture of a redux handled react app, we know that all components hook into the connect section which communicates with the
//Provider to access our store and handle state changes based off some action invokation (reducers take in an action, and we already
// have action creator..but how the heck does the app know when to use an action creator? Well, it would need to be fired off from some interaction on the front end!
//so to get the components to hook in, we need to actually point this component and any subsequence at connect (which happens to be the object fter mapStateToProps)

//import any action creators we would need to use: in our case we want to select a song in the UI so we should use that action.. pass this to connect() so we can use the action to change state through props [see notes at bottom]
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    // map each song from our state arry of songs for this small app example [exists in props! Because we are storing all data in a global store, therefore, we used mapStateToProps and returned the
    // songs in our store where songs is the key in the object returned and the value is the state.songs where songs was the property of the reducer in combineReducers] this might be confusing, and it is, but this is the flow and once we get this whole idea,
    // this willc ome so so easy
    return this.props.songs.map((song) => {
      //of course we could refactor our code to map list elements (this is how id do it but this app is to show us how redux works with handling state for us)
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              //onclick event: invokes the selectSong action we built to select a song and show that in state: we have access to it in props because we used mapStateToProps! Since we use connect()
              // to connect our mapstatetoprops and the actions needed to change some global state, we get access through connect to any action creators we put in connect() REMEMBER - connect() connects us to the redux store! THAT IS HOW WE GET ACCESS TO THE ACTION CREATOR
              // CHANGE STATE, AND USE IT AS PROPS THROUG MAPSTATETOPROPS
              // props is given from the map state
              onClick={() => this.props.selectSong(song)} //invoke an action here (takes in the song we selected) and returns an action to the reducer selectedSong to basically change state of the current song selected
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//connect() returns a function, and as we know, to call a nested function by only calling the parent function, we put a secont pair parens, with any
//params that the inner method would take: we call these closures

//passed into connect: will take the state from connect (which is directly connected to provider as the app is wrapped in it) and allow us
//to see the state simply by it being mapped to the props of this component: we alias it with a key so we can simply use it later
const mapStateToProps = (state) => {
  return {
    songs: state.songs,
  };
};

//connect() takes in a mapstatetoprops to allow us to map the current state we are connecting to, by that key of that reducer in combine reducers, if we want
// in this file. Hence state.songs above.. songs is a key that represents the reducer of songs , and so on. this applies to all redux apps. And then second param is {actionCreators}
// which we import with {} from the files they reside. Since they are pure functions, we just import it if we need it [which is intuitive.. we know what we want our app to o, so for any point in the app
// we need actions/state change at some level] once passed in, mapStateToProps both maps the state we want to extract out to props to use in our ui but also, any action creator (selectedSong in this case)
// will be mapped into props as well! so cool
export default connect(mapStateToProps, { selectSong })(SongList);
