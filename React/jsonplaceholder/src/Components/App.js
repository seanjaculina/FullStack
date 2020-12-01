import React, { useState } from 'react';

import SelectionBox from './SelectionBox';
import SelectionContainer from './SelectionContainer';

const App = () => {
  const [selection, setSelection] = useState('');

  const setSelectionOption = (value) => {
    setSelection(value);
  };
  return (
    <div
      className="container-md"
      style={{ marginTop: '2rem', textAlign: 'center' }}
    >
      <h1>Select a button to send a request</h1>
      <SelectionBox setSelectionOption={setSelectionOption} />
      <SelectionContainer selection={selection} />
    </div>
  );
};

export default App;
