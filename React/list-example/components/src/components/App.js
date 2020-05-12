import React from 'react';
import '../App.css';
import CommentList from './CommentList';

const App = (props) => {
  return (
    <div className="App">
      <h1>Comments</h1>
      {/*Mount our comment list which will contian all our comment components inside it*/}
      <CommentList />
    </div>
  );
}

export default App;
