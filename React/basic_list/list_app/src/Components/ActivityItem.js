import React, { useState } from "react";

function Activity_Item({ name, _id, desc, index, handleClick }) {
  return (
    <div
      className="item"
      key={_id}
      style={{
        marginTop: "3rem",
        backgroundColor: "lightgray",
        padding: "1rem",
        borderRadius: "5px",
      }}
    >
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{desc}</div>
      </div>
      <button
        className="ui red button"
        style={{ marginTop: "10px" }}
        onClick={(e) => handleClick(e, index)}
      >
        x
      </button>
    </div>
  );
}

export default Activity_Item;
