import React, { Component } from 'react';

import atoms from './atoms.json'; // atoms JSON file

import PeriodicContainer from './PeriodicContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <PeriodicContainer atoms={atoms} />
      </>
    );
  }
}

export default App;
