import React, {useState} from 'react';

import './main.css';

// helper import: switches the button clicked event target to set state
import {onHandleCountChange} from './handleCountChange';

function App() {
  // use state will allow us to use component level state in a functional component
  let [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Current count: {count}</h1>
      <div className="sub_container">
        <button
          name="increment"
          onClick={(e) => onHandleCountChange(setCount, count, e.target.name)}
        >
          INCREMMENT
        </button>
        <button
          name="decrement"
          onClick={(e) => onHandleCountChange(setCount, count, e.target.name)}
        >
          DECREMMENT
        </button>
        <button
          name="reset"
          onClick={(e) => onHandleCountChange(setCount, count, e.target.name)}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;

/**
helper function extracted to another file to clean up the component: the function
accepts the events target name, the setcount and current count state as params: setCount is a callback sent to the function to execute
and then the data is passed back up to app where count will correctly represent the state change
 */
