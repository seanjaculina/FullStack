import React from "react";

const ImageList = props => {
  console.log(props.images);
  return (
    <div>
      <h2>Image List</h2>
      {/*to render n-items from an array, we use map and the item must also contain a unique keyprop
      we will refactor to render n-image card components */}
      {props.images.map(img => {
        return (
          <li key={img.id}>
            {/*see the object in the console thats returned from request: it has a property of urls.raw which is the raw image url*/}
            <img
              style={{
                width: "420px",
                height: "300px"
              }}
              src={img.urls.raw}
            />
          </li>
        );
      })}
    </div>
  );
};

export default ImageList;
