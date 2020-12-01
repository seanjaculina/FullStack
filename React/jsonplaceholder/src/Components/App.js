import React, { useState, useEffect } from 'react';

import Selections from './Selections';

function App() {
  const [selection, setSelection] = useState('');
  console.log(selection);
  return (
    <div
      className="container-md"
      style={{ marginTop: '2rem', textAlign: 'center' }}
    >
      <h1>Select a button to send a request</h1>
      <Selections setSelection={setSelection} />
    </div>
  );
}

export default App;
