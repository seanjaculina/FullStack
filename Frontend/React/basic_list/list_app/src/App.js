import React, { useState } from "react";
import "./App.css";
import Activities from "./Components/Activities";

// Data of activities
import activities from "./activities";

function App() {
  // Handles state change/init of activity data
  const [items, setItems] = useState(activities);

  // removes the selected item in the UI - this same logic would apply to working with a database and
  // setting the items state with a fetch of that db data and then we can pass the _id say from mongo into each todo
  // and then use the exact filter below to filter out the selected todo! Cool
  function removeItemSelected(id) {
    setItems(items.filter((item) => item._id !== id));
  }

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "3rem" }}
    >
      <h1 className="ui header">List</h1>
      <Activities activities={items} removeItemSelected={removeItemSelected} />
    </div>
  );
}

export default App;
