import React from "react";

// Data
import activities from "../activities";

// Components
import ActivityItem from "./ActivityItem";

function Activities() {
  function renderList() {
    return activities.map((item, index) => (
      <ActivityItem name={item.name} _id={item._id} desc={item.desc} />
    ));
  }

  return <>{renderList()}</>;
}

export default Activities;
