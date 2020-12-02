import React from 'react';

const UserItem = ({ user, onClick }) => {
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
          <p className="btn btn-primary" onClick={(e) => onClick(e, user.id)}>
            See Posts
          </p>
          <p className="btn btn-secondary" onClick={(e) => onClick(e, user.id)}>
            See Todos
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
