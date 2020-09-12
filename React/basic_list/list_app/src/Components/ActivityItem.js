import React from "react";

function Activity_Item({ name, _id, desc }) {
  return (
    <div className="item" key={_id}>
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{desc}</div>
      </div>
      <button className="ui red button">Remove</button>
    </div>
  );
}

export default Activity_Item;
