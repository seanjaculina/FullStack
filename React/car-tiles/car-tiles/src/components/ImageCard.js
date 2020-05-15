import React, { Component } from "react";

//this component returns a single image as a car which receives
//the image through map in the lsit component

class ImageCard extends Component {
  constructor(props) {
    super(props);

    //creating a react ref to access the dom to handle image sizing and anything else the image producs in the DOM
    //this returns a JS Object when called on some elemnet  (in this case, the image)
    this.imageRef = React.createRef();

    this.state = {
      spans: 0
    };

    //bind our events ALWAYS
    this.setSpans = this.setSpans.bind(this);
  }

  //when the component mounts, we know this mehtod is used to gather data once, and use it once it shows up, so,
  //lets grab the images width and height with our ref (clientHeight and width)
  //the only caveat is: the image loads longer than the component takes to show up in the dom, so by default, we will
  //get 0 values, so, we had to handle this by adding an event('load) to the image and using a callback to span the image (used to just re-adjust the size to evenly distribute image cards)
  //remember all events (any event) must be bound to 'this' i like doing the bindings in constructor but the other work around is making the event callback method an arrow method
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans() {
    //get image height
    const height = this.imageRef.current.clientHeight;

    //determine height needed for even distribution of a row (gets amount of rows)
    const spans = Math.ceil(height / 10);

    //set the span number for this image for state and pass the state to the div as the span grid row end style inline
    this.setState({ spans });
  }

  render() {
    //destructure the images description and url link to that image so we
    //can use those vars
    const { desciption, urls } = this.props.image;
    return (
      /*lookup why we are doing styling for gridrowend on a grid card: this handles the size*/
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/*attach the ref to THIS image (we have a ton of them on search submit, that way each image
        component will have a ref to all its client data*/}
        <img ref={this.imageRef} alt={desciption} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
