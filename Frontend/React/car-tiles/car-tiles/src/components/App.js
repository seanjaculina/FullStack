//react import
import React, { Component } from "react";

//external libs -- and file imports
import unsplash from "../api/unsplash";
import "../static/App.css"; //how you import component specific css

//components
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends Component {
  //state of this component will be an array of images from our response of the async request
  state = {
    images: [],
  };

  //method to be passed as props to the search bar to retrieve the search data
  onSearchSubmit = async (term) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: term.toLowerCase() },
    });

    this.setState({
      images: res.data.results,
    });
  };

  render() {
    // pull out image array state to pass cleanly down to the image list and into the line 39
    const { images } = this.state;
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar userSubmission={this.onSearchSubmit} />
        Found: {images.length} images
        <ImageList images={images} />
      </div>
    );
  }
}
//default export for whole component
export default App;
