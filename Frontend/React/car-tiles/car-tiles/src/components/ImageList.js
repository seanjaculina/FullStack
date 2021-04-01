import React from "react";

//css module for this component
import "../static/ImageList.css";

//component imports
import ImageCard from "./ImageCard";

// Functional component - pulls out the image prop
const ImageList = ({ images }) => {
  // Helper function to render images and modularize our code a bit - conditonally renders images if there happens to be images in the props
  const renderImages = () => {
    return images
      ? images.map((img) => {
          return <ImageCard key={img.id} image={img} />;
        })
      : null;
  };

  return (
    <div>
      <div className="image-list">{renderImages()}</div>
    </div>
  );
};

export default ImageList;
