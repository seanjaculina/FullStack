/**
 * This component is used for the search bar of our app
 *
 */

//import react (different for class based)
import React, { Component } from "react";

//static imports

class SearchBar extends Component {
  //must make const. with props and pass super props
  constructor(props) {
    super(props);

    //this components state handles the current users text entry to update the inputs value and set the state for logic purposes
    this.state = {
      term: ""
    };

    //bind our event listeners to the context of this class so we can access the context of this objects data, anytime, in a method!!!! This is a MUST(see docs) OR
    // we can turn those methods into arrow functions, thus would change the behavior and allow it to be defined in the context
    //and the last way is pass an arrow fucntion into the event itself as a callback, and return the call to the method (which kind of reverses that whole idea
    //of only reference methods in attributes of a element. By default for the course, we will just make our event handlers and methods all arrow functions)
    //this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputClick = this.onInputClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  //ran everytime a user types a character: must be mounted to this
  //event methods take in the event object, which we can call e,
  //and we can track the target input as followed: this method is called
  //everytime the input changes, thus, will track every character type (which of course is a change!)
  //when we make methods that are one liners, we can avoid making the function and just write the function as an
  //arrow fucntion callback in the event. See the input props how i did this. We can do it either way
  //but the community agrees the arrow fucntion callback is clean and makes sense
  onInputChange(e) {
    //for every char types, reset the state to contain the most recent input from the user
    //we did this as an arrow function in our input but i am doing it here for demonstration too if we had
    //not passed an arrow as our call back, but this method itself
    this.setState({ term: e.target.value });
  }

  //demonstrate click event: not meaningful to this app
  onInputClick(e) {
    console.log("clicked");
  }

  //this works without bind becuase it is an arrow method
  //custom search logic when user submits their form (we named it this function: it is not built in! only the even property name is)
  onFormSubmit = e => {
    //prevent the default behavior of the event object (will not reload page when the user presses enter)
    e.preventDefault();

    //search based off the current states term data: userSubmission is a callback method passed as props! This is a way of using a child to invoke
    //methods of a parent: passing a parent method down, which will be called in a child, and then that data can be passed back : we are using App to
    //search the api! We just want this searchbar component to be for the UI and handling the state of the submission events only
    this.props.userSubmission(this.state.term.trim());
  };

  /**
   * onClick()
   * onChange()
   * onSubmit()
   *
   * are 3 event methods to handle state change, etc. [remember that event methods must always be bound to this objects context]
   */

  //runs once at the begining mount of this component
  componentDidMount() {
    console.log("Component mounted. Hi!");
    //this would be a great method to grab a whole json object for some part of our
    //app, maybe all the cars in a database, that way we then can save that data and use it elsewhere or even
    //use componentDidUpdate
  }

  render() {
    return (
      <div className="ui segment">
        {/*event delegation: we are assigning an onSubmit event to the whle form, and assign that property a reference to a callback method
        that will handle the actual search logic for the form (remember, all event lsiteners in react must have the callback methods they reference
        be bound to the context of the class itself!*/}
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="img-search"></label>
            {/*leave off parens in the onchange call! We want to reference the function to be called later but NOT when the component is initially rendered
            . Onchange is a callback based function so it waits for some event, to then call it. We can make the function in the class,
            or of course since the event handling properties accept a callback, we can write an arrow funciton righ there! So I will do that
            but keep the actual fucntion up above*/}
            <input
              type="text"
              id="img-search"
              placeholder="Enter car"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} //on a change in the input (key presses) reset the state : events always take a callback which accepts the event object (we called it e)
              onClick={() => this.onInputClick()} //just handles a click event: whenevr this input is clicked, we can do anything we want with it.Notice we arrow functioned and called the function rather than reference: this is the third way to use event listeners
              //with binding (we can do the constructor waym, make an arrow method in the class, or make a normal method, and then invoke it like we did here with its own callback arrowing to the call)
            />
            {/*This input element is a controlled element. That is, we control the current value of the element whenever some event happens. In this case
            whenever a character is typed, we fire off the onChange event to reset the state with the most current text entered and then to control the status of th einput itself
            we set the value of it to the MOST RECENT STATE as seen above in avove. This is good practice and prefered amongst devs
            We do not want static data! We want the value/data in the element to be dynamic and centeralized to react and the data in reacts flow NOT the dom. 
            If we go to inspect this element in the broswer, we actually see the value continuosuly update! this is so cool and a must do in reacts flow. Controlling your elements
            should be done in react. For vanillaJS stuff, it is not a big deal*/}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
