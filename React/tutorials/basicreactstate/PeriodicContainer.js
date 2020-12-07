import React, { Component } from 'react';

import AtomItem from './AtomItem';

class PeriodicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atoms: this.props.atoms.elements,
    };

    // Bind event handlers UNLESS using arrows
    this.sortAlpha = this.sortAlpha.bind(this);
    this.sortByMass = this.sortByMass.bind(this);
  }

  sortAlpha() {
    this.setState((prevState) => ({
      atoms: prevState.atoms.sort((a, b) => a.name.localeCompare(b.name)),
    }));
  }

  sortByMass() {
    this.setState((prevState) => ({
      atoms: prevState.atoms.sort((a, b) =>
        a.atomic_mass > b.atomic_mass ? -1 : 1,
      ),
    }));
  }

  render() {
    return (
      <>
        <h1 id="title">Periodic Elements Data</h1>
        <div className="sorting-container">
          <button onClick={this.sortAlpha}>Sort Alphabetical</button>
          <button onClick={this.sortByMass}>Sort By Atomic Mass</button>
        </div>
        <div className="container">
          {this.state.atoms.map((atom, i) => {
            return <AtomItem atomData={atom} key={i} />;
          })}
        </div>
      </>
    );
  }
}

export default PeriodicContainer;
