import React from 'react';

function Selections({ setSelection }) {
  function onSelection(e) {
    const selection = e.target.outerText.toLowerCase();
    setSelection(selection);
  }

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2rem',
      }}
    >
      <button
        type="button"
        className="btn btn-primary"
        onClick={(e) => onSelection(e)}
      >
        Posts
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={(e) => onSelection(e)}
      >
        Users
      </button>
      <button
        type="button"
        className="btn btn-success"
        onClick={(e) => onSelection(e)}
      >
        Todos
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={(e) => onSelection(e)}
      >
        Albums
      </button>
    </div>
  );
}

export default Selections;
