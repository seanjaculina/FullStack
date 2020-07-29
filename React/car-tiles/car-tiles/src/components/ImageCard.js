import React, { Component } from "react";

//this component returns a single image as a car which receives
//the image through map in the list component

class ImageCard extends Component {
  constructor(props) {
    super(props);

    //creating a react ref to access the dom to handle image sizing and anything else the image producs in the DOM
    //this returns a JS Object when called on some elemnet  (in this case, the image)
    this.imageRef = React.createRef();

    this.state = {
      spans: 0,
    };

    //bind our events ALWAYS unless using =>
  }

  // Runs immediately after render
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    //get image height
    const height = this.imageRef.current.clientHeight;

    //determine height needed for even distribution of a row (gets amount of rows)
    const spans = Math.ceil(height / 10);

    //set the span number for this image for state and pass the state to the div as the span grid row end style inline
    this.setState({ spans });
  };

  render() {
    //destructure the images description and url link to that image
    const { desciption, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={desciption} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
