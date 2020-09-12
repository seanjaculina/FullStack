import React from "react";
import "./App.css";
import Activities from "./Components/Activities";

function App() {
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "3rem" }}
    >
      <h1 className="ui header">List</h1>
      <Activities />
    </div>
  );
}

export default App;
