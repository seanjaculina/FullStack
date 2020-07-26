import React from "react";
import { connect } from "react-redux"; //we need to hook components into connect so that we can have access to our global provider to send us state

//this component just displays the current state (the song we selected!) so,, we do not work with action creators (so no need to pass the named
//export in. Also, we do hwoever know that components hook into connect, therefore we will need to import connect named export and call it when we export
//it mapping some state to props on the component itself (connect(mapstatement) is called returning state to the component by second () containing the
//component name itself)

//we can pull out song as thats the prop we return from maptostate. duh
const SongDetail = ({ song }) => {
  //we know that the state of a song is null initially (which is why we did default value of null in our reducer) so, if we try to display the song
  //fromt he first render, we will get na error because we cannot render null data! [Initial render issues exist like this for any react app so this is important notes]
  //To get around the initial null renders in react on props, as we know,
  //we should check for null, etc by doing a conditional render of if(!song) in this case :in general it could be whatever we destructured our props into variables
  //to be incase they may be null at any point

  //!song says "if song is not defined with data" then we return some ui helper

  if (!song) {
    return (
      <div>
        <h3> Select a song </h3>
      </div>
    );
  }

  //else, song data is not null as a button was pressed, so display all that info we have in the object that defines a song
  return (
    <div>
      <h3> Song Detail </h3> <h3> Song Title: {song.title} </h3>
      {/*dont get confused with {} versus `${}` {} is JSX to show expressions, the other is VanillaJS*/}
      <h5> Duration: {song.duration} </h5>
    </div>
  );
};

//this function is how we get the current state: remember we aliased the cobination our reducers with keys? Well, that is how we get the certain property of that reducer
// object we made to combine all them! We are returning this selectedSong state [i destructured in the mapStateToprops but usually you would just do state and then get the state.keyInState]
const mapStateToProps = ({ selectedSong }) => {
  return {
    song: selectedSong,
  };
};

//component exports in redux/react apps aree exported this way and with a second param in connect IF that component works with events to invoke actions:
//redux is not magive, so unless we import the named export (destructueing again) and pass it to connect so connect can hook into our action creator (see diagram from class and ipad!!!))
//and pass the actioncreator the expected data to change state so an action can be returned and put into reducers which will evaluate the action, and change state if needed
//and we know the state we need to change is initially null, which is why we do default state params in our reducers
export default connect(
  mapStateToProps /*no action creator here as we are in read only state component: no write to*/
)(SongDetail);
