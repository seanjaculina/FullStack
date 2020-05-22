import React, {Component} from 'react'; // we know that names exports are functions, etc. froma  file and we need to destructure, so, thats what Component is

import {connect} from 'react-redux';
// in the architecture of a redux handled react app, we know that all components hook into the connect section which communicates with the
//Provider to access our store and handle state changes based off some action invokation (reducers take in an action, and we already
// have action creator..but how the heck does the app know when to use an action creator? Well, it would need to be fired off from some interaction on the front end!
//so to get the components to hook in, we need to actually point this component and any subsequence at connect

//connect also works with the action creators for our app! This is how an action can be invoked and sent data to be passed to a reducer to handle the state
//we pass in the action we wish to oinvoke for a particular component that would need to change the state  of the application: this MUST be passed into connect() also
//because redux connect block also takes in action creators so they can basically be invoked on events to change state: connect wont know what line 37 is doing if we dont also pass the {actionCreatorNames...}
//destructure into its call also: its just what is required!
import {selectSong} from '../actions';

class SongList extends Component {
  //if we do not use the constructor or local vars [typical potentially for reduux based apps unless of course our component need aux data]
  //we can just negate it
  // constructor (props) {
  //   super (props);

  //   //props comes from the connect configuration mapStateToProps which

  //   //this.state = {};  no state: using redux!
  // }

  renderList () {
    //the props comes from our maptostate which allows us to see any state we want (connect gets that function call which is how we hook connect
    //to our provider which is our middleman here that wraps our whole app)
    return this.props.songs.map (song => {
      //of course we could refactor our code to map list elements (this is how id do it but this app is to show us how redux works with handling state for us)
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              //onclick event: this is what is used to select the song! selectSong is the named import action creaqtor that takes in a song to return the action for the reducer to parse!!!!!
              // props is given from the map state
              onClick={() => this.props.selectSong (song)} //invoke an action here (takes in the song we selected) and returns an action to the reducer selectedSong to basically change state of the current song selected
              //that state being updated will then allow us to hook into the reducer again with mapstate to pros and show the most recent state of the selected song becase we know,
              //unless the type of the action a reducer gets is the action type we are defining/building for our apps events to handle that state, we default return the current state and alias
              //it so we can call it later (in our case, we call it into an h1 in the detail )
            >
              Select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render () {
    // () makes a multi-line JS extension
    return (
      <div className="ui divided list">

        {this.renderList ()}
      </div>
    );
  }
}

//connect() returns a function, and as we know, to call a nested function by only calling the parent function, we put a secont pair parens, with any
//params that the inner method would take: we call these closures

/**
 * 
 * example of a trivial closure: we need to make n subsequent calls depending how deep our nested callbacks are, i this case we made a call to add
 * and then to the inner anon. function (can be named) and passed it the data it was waiting to see!
 * function add(){
 *  return (a,b) => {
 *       return a + b
 *     }
 * }
 * 
 * add()   <-- will output nothing! Because we returned a fucntion call, but never passed anything to it or called the inner one so we can do
 * add()(10,2)   and this is how we call a function that returns some other function
 * 
 * this is how connect works we call connect()(passingItTheComponentRefHere) and connnect will return a call that hooks in songlist
 * 
 * 
 * connect(mapStateToProps,{actionCreator}) is actually also TECHNICALLY a react component, thus, it needs to be configured to work and hook up to the provider so we can even see the state!
 * 
 * Below, right above our default export and call to connect, we actually must build configure the connect to talk to the provider and get some specific data to work in this song list
 * 
 * the name of this function MUST have the name of mapStateToProps = () = > (by convention its called thisTECHNICALLY it doesnt need to be, but good practice)
 * 
 */

//passed into connect: will take the state from connect (which is directly connected to provider as the app is wrapped in it) and allow us
//to see the state simply by it being mapped to the props of this component: we alias it with a key so we can simply use it later
const mapStateToProps = state => {
  console.log (state); //should show all of our state (the reducers)
  return {
    songs: state.songs,
  };
  //ASLWAYS return data to represent the state and prop (which is the props we expect our react component to take):
  //in our case, this component renders the list of songs in our app (static list we made, but typically we's be working with data from http requests and what not of ocurse)
  //remember in our combine reducers state, we gave the calls to reducers a key! This key is how we access the reducers to change state,
  //thus, this is what we did: state.songs  where songs called the reducer for the array of songs! asnd we just returned an object because thats convention
};

//only pass action creator if your component needs it: the song detail component where we display the whole somng title and duration
//for example is read only, and never changes state: jsut shows updated, so, we will not pass a second argument! Only pass if you need to change state
//because the action creator is the invocation of that.... also, connect works in functional components too
export default connect (mapStateToProps, {selectSong}) (SongList);
