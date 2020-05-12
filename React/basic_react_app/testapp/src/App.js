import React from 'react';
import './App.css';

//functional component accespts props
function App(props) {
  return (
    <div className='App'>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}

export default App;
