import React from "react";

// Components
import ActivityItem from "./ActivityItem";

function Activities({ activities, removeItemSelected }) {
  return activities.map((item, i) => (
    <ActivityItem
      key={i}
      name={item.name}
      _id={item._id}
      desc={item.desc}
      handleDelete={removeItemSelected}
    />
  ));
}

export default Activities;
