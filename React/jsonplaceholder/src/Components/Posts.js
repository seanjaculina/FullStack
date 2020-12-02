import React from 'react';
import { Link } from 'react-router-dom';

const Posts = ({ match }) => {
  console.log(match);
  return (
    <div className="container" style={{ margin: '1rem 1rem' }}>
      <h1>Posts</h1>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
    </div>
  );
};

export default Posts;
