import React, { Component } from 'react'

class Title extends Component {

  // must call super class props
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <h1 className="titleTag">{this.props.title}</h1>
    )
  }
}

export default Title;