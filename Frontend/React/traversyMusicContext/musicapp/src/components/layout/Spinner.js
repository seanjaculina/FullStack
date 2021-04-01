import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner-border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: " 30vh auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
