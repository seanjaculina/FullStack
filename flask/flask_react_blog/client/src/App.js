import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('http://localhost:5000');
      const data_ = await res.json();
      setData(data_);
    };
    fetchData();
  }, []);

  return <h1>{data.msg}</h1>;
}

export default App;
