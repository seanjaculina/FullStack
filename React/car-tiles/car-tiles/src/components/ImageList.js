import React from "react";

//css module for this component
import "../static/ImageList.css";

//component imports
import ImageCard from "./ImageCard";

const ImageList = props => {
  console.log(props.images);

  //map all the images returning an image card of the queried image (pass the image as prop in which we can destructure in card)
  const images = props.images.map(img => {
    return <ImageCard key={img.id} image={img} />;
  });

  return (
    <div>
      {/*we are going to use css grid for the image cards*/}
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
