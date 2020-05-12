import React, { Component } from 'react';
import '../App.css';

//component imports
import SeasonDisplay from './SeasonDisplay';  //<- for displaying the message and icones
import Spinner from './Spinner';              //for displaying the loading spinner (we made this a component so it can be reused anywhere!)

//React class based component: must extend component which we pull out from react

class App extends Component {

  constructor(props) {
    super(props);

    //props as instance vars:
    //this.name = props.name;

    //holds state for the position state: state of page changes when we retireve the lat/long [this can be done outside constructor 
    // without using this of course (best practice is in the constructor.Just makes sense)]
    this.state = {
      latitude: null,
      error: ''
    }

  }

  //function definitions outside the constructor

  //OUTSIDE CONSTRUCTOR: use this when you need to invoke some logic to fetch data at initial render (in our case fetching the users geo-location
  //but very well can be for initial fetching from  a database for a todo list app, or for newfeed, etc)
  componentDidMount () {

    //prove this runs before fetch [component did mount always runs before initial data fetching and should be used for the initial fetch
    //of course clg will show first and then the asyn function below will do its thing regardless]
    //console.log('Fetching in progress...')


    //MDN builin geolocation API: see the docs (takes in two callbacks for success and error)
    /**
     * this function is asyncronous by nature and will run the set state some time later after it retireves the data
     * run the callbacks returning the data or returning an error with those two callbacks
     * 
     * - it is built into the window object which is why we use window object below (clg window in browser to see all window objects and proerties available to us)
     */
    window.navigator.geolocation.getCurrentPosition((position) =>
      //set the new state of location data with the returned position data or accept the returned error and set the error state
      this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  //helper function to determine what component to render 
  //again: its best to remove logic from the JSX render. This returns JSX itself
  //which is why we can put it in the main render in {}
  //we do this because its also not smart to have nested returns in a render method
  //its easier to have helper methods to return jsx, and other logic and then render it in the main div for this component
  determineRenderContent () {
    //conditionally render an error or the season component based off the returned value of the api method above
    if (this.state.error && !this.state.latitude) {
      //this is our return after render! Again, must have an encasing div
      return (
        <div className='error-div'>
          <span>
            {/*pass the state down as prop*/}
            {this.state.error}
          </span>
        </div>
      )
    }
    else if (!this.state.error && this.state.latitude) {
      return (
        <div className='location-div'>
          {/*pass state down as prop*/}
          <SeasonDisplay lat={this.state.latitude} />
        </div>
      )
    }
    //default case: we mount the spinner component we made to show that the data is loading.
    //We made this as a component so we can reuse it anywhere including in other projects! It is 
    //recommenedd for anything you think could be reussable, that we make a component from it! So, we did
    // this component uses the exact layout and classes from semantic ui loaded section 
    return (
      <Spinner message='Please accept location request' />
    )
  }


  //must call render with a must return unless its a single jsx statement in which we can negate return
  render () {
    return (
      <div className='border red'>
        {this.determineRenderContent()}
      </div>
    )
  }

  //we are not getting errors of using JS here in our render, and html as JSX
  //because we are allowed to write JS as long as it is not in the return statement
  //anything in return() becomes JSX and all expressions liek this MUST come inside {}

}

export default App;

/**
 * keep in mind: the location does not initially exist until the async function runs, gets the location,
 * and then calls the callback method returning the position. Because of this, the state of the page will say
 * latitude on the page, but show nothing after it! Once the data then is returned and the callback runs,
 * the latitude coordinate shows, so, this component actually renders twice. We do not want the page to say
 * latitude: with nothing there.. that is ugly, and we will learn how to go about changing this
 *
 *
 *
 *
 * Lifecycle methods:
 *
 *  componentDidMount -> good place to do data loading upon initial render [like our geolocation logic] (runs once content show)
 *  componentDidUpdate -> good place to do more data loading when state/props change (sits and wait for updates to them) e.g: on user clicks of a button (use for multiple requests on a page in a component)
 *  componentWillUnmount -> good place to do cleanup (clearning things, etc.) sit and wait until this component is no longer shown
 *
 */