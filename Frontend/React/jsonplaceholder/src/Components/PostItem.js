import React from 'react';

const PostItem = ({ data }) => {
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
        <p className="card-text">{data.body}</p>
      </div>
    </div>
  );
};

export default PostItem;
