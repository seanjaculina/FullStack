import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostItem from './PostItem';

const Posts = ({ match }) => {
  console.log(match);
  const [postData, setPosts] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?userId=${match.params.id}`,
      );
      const data = await res.json();
      setPosts(data);
    })();
  }, [match.params.id]);
  return (
    <div className="container">
      <h1 style={{ margin: '1rem 1rem' }}>Posts</h1>
      <Link to="/" className="btn btn-light">
        Go Back
      </Link>
      <div className="row">
        {postData &&
          postData.map((post) => <PostItem data={post} key={post.id} />)}
      </div>
    </div>
  );
};

export default Posts;
