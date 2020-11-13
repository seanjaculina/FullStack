import React, { Component } from 'react';

import TodoItem from './TodoItem';

class TodoContainer extends Component {
  render() {
    return (
      <div className="todo__container">
        {
          // mapping out the todos passed as prop here
          this.props.todos.map(todo => {
            return <TodoItem key={todo.id} data={todo} />
          })
        }
      </div>
    )
  }
}
export default TodoContainer;
