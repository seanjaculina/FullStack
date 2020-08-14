import React from "react";

// Styles
import "../index.css";

const ListItem = ({ name, age }) => {
  return (
    <div className="main div-hover">
      <h5>{name}</h5>
      <p>{age}</p>
    </div>
  );
};

export default ListItem;
