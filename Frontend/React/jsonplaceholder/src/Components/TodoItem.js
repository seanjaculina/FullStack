import React from 'react';

const TodoItem = ({ data }) => {
  return (
    <div
      className="card"
      style={{
        minWidth: '20rem',
        maxWidth: '20rem',
        margin: '1.5rem auto 0 auto',
      }}
    >
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {data.completed ? 'Complete' : 'Not Complete'}
        </h6>
      </div>
    </div>
  );
};

export default TodoItem;
