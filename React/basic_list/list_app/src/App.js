import React, { useState } from "react";
import "./App.css";
import Activities from "./Components/Activities";

// Data of activities
import activities from "./activities";

function App() {
  // Handles state change/init of activity data
  const [items, setItems] = useState(activities);

  // removes the selected item in the UI
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
