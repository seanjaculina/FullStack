import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div
      className="card"
      style={{ minWidth: '20rem', margin: '1.5rem auto 0 auto' }}
    >
      <div className="card-body">
        <h5 className="card-title">{user.username}</h5>
        <p className="card-text">Email: {user.email}</p>
        <p className="card-text">Phone: {user.phone}</p>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
          }}
        >
          <Link to={`/posts/${user.id}`}>
            <p className="btn btn-primary">See Posts</p>
          </Link>
          <Link to={`/todos/${user.id}`}>
            <p className="btn btn-secondary">See Todos</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
