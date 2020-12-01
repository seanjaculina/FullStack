import React from 'react';

const Selections = ({ setSelectionOption }) => {
  const onSelection = (e) => {
    const selection = e.target.outerText.toLowerCase();
    setSelectionOption(selection);
  };

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
        style={{ width: '7rem' }}
        onClick={(e) => onSelection(e)}
      >
        Posts
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        style={{ width: '7rem' }}
        onClick={(e) => onSelection(e)}
      >
        Users
      </button>
      <button
        type="button"
        className="btn btn-success"
        style={{ width: '7rem' }}
        onClick={(e) => onSelection(e)}
      >
        Todos
      </button>
      <button
        type="button"
        className="btn btn-dark"
        style={{ width: '7rem' }}
        onClick={(e) => onSelection(e)}
      >
        Albums
      </button>
    </div>
  );
};

export default Selections;
