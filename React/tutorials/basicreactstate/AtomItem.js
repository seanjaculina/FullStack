import React, { Component } from 'react';

class AtomItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="atom-item">
        <h3>{this.props.atomData.name}</h3>
        <p>{this.props.atomData.atomic_mass}</p>
        <p>{this.props.atomData.summary}</p>
        <small>{this.props.atomData.symbol}</small>
      </div>
    );
  }
}

export default AtomItem;
