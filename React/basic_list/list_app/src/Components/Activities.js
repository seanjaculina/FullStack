import React, { useState } from "react";

// Data
import activities from "../activities";

// Components
import ActivityItem from "./ActivityItem";

function Activities() {
  const [items, setItems] = useState(activities);
  const [selected, setSelected] = useState(0);

  function handleClick(e, index) {
    console.log(items);
    setSelected(index);
    setItems(activities.filter((item, indexOf) => indexOf !== index));
  }
  function renderList() {
    return activities.map((item, index) => (
      <ActivityItem
        name={item.name}
        _id={item._id}
        desc={item.desc}
        index={index}
        handleClick={handleClick}
      />
    ));
  }

  return <>{renderList()}</>;
}

export default Activities;
