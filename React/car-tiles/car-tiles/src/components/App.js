//react import
import React, { Component } from "react";

//external libs -- and file imports
import unsplash from "../api/unsplash";
import "../static/App.css"; //how you import component specific css

//components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  constructor(props) {
    super(props);

    //state of this component will be an array of images from our response of the async request
    this.state = {
      images: []
    };

    //bind onSearchSubmit as it is a callback method [i like this way of binding but we also can make the
    // method an arrow method or invoke it as a callback in the prop/event of course]
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  //method to be passed as props to the search bar to retrieve the search data, and then that wil be sent back for this method to fetch data from an API
  //mark it as async (by default axios using promises)
  async onSearchSubmit(term) {
    //perform an ajax request: made a api base object in api folder which is why this request looks different from docs
    const res = await unsplash.get("/search/photos", {
      //the users search value as  a query param
      params: { query: term.toLowerCase() }
    });

    //pass the response to the state: this will return an error as this callback is not bound! (this callback is passed as a prop)
    //to avoid this, we can invoke it with an arrow in the prop, in the constructor or make an arrow for this asycn
    //ALL METHODS CALLED AS PROPS OR IN EVENTS MUST BE BOUND OR ELSE THEY WILL BE UNDEFINED!! TEHY MUST BE BOUND TO THE INSTANCE OF THE CLASS
    this.setState({
      images: res.data.results
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        {/*Search bar mount: passing a callback down as props that will accept a search term in the search component
        and then pass it back up to search an API!*/}
        <SearchBar userSubmission={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
//default export for whole component
export default App;

/**
 * Lets make a searchbar form component that handles clicks, sets the state for ever letter typed to get accurate search results,
 * etc. BUT lets let App component perform the AJAX call that way we can pass that data down as props! But use the component mound here
 *
 * This is a very good scheme
 */
