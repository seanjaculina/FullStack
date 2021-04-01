import React, { Component } from 'react'

class TodoItem extends Component {
  render() {
    return (
      <div className="todo-item">
        <h3>{this.props.data.name}</h3>
        <div className="options">
          <span className="delete">X</span>
          <span className="edit">Y</span>
        </div>
      </div>
    )
  }
}

export default TodoItem;