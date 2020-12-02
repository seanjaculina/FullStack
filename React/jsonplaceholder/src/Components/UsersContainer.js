import React, { useState, useEffect } from 'react';
import UserItem from './UserItem';

const UsersContainer = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const fetchedData = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
        );
        const results = await fetchedData.json();
        setUserData(results);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return userData ? (
    <>
      <div className="container">
        <h1 style={{ margin: '1rem 1rem' }}>REST API and React Tutorial</h1>
        <div className="row">
          {userData &&
            userData.map((user) => <UserItem key={user.id} user={user} />)}
        </div>
      </div>
    </>
  ) : null;
};

export default UsersContainer;
