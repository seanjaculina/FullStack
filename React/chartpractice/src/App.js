import React, { useState, useEffect } from 'react';
import './App.css';

import Chart from './Chart';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const results = await fetch('https://jsonplaceholder.typicode.com/users');
      const resData = await results.json();
      setData(resData);
    };
    fetchResources();
  }, [data]);
  console.log(data);
  return (
    <div className="App">
      <h1>Hello</h1>
      <Chart />
    </div>
  );
};

export default App;
