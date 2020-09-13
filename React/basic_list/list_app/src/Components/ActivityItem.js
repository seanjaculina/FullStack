import React from "react";

function ActivityItem({ name, _id, desc, handleDelete }) {
  return (
    <div
      className="item"
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
        onClick={handleDelete.bind(this, _id)} //Arrows in event handlers are fine but it is better practice to bind a callback/function to the 'this' of the itme in the UI
      >
        x
      </button>
    </div>
  );
}

export default ActivityItem;
