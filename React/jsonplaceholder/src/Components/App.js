import React from 'react';

import UserContainer from './UsersContainer';

const App = () => {
  return (
    <>
      <div className="container" style={{ marginTop: '2rem' }}>
        <h1 style={{ margin: '1rem 1rem' }}>REST API and React Tutorial</h1>
      </div>
      <div className="container">
        <UserContainer />
      </div>
    </>
  );
};

export default App;
