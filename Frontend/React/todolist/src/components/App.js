import React, { Component } from 'react';

import Title from './Title';
import Input from './Input';
import TodoContainer from './TodoContainer';

class App extends Component {

  // holding state of the todos at the top level
  constructor(props) {
    super(props);
    this.state = {todos: []}
  }

  // add todo: passed as prop to the input component
  addTodo = (todo) => {
    const todoItem = todo;
    this.setState(oldState => ({todos: [todoItem, ...oldState.todos]}));
  }

  render() {
    return (
      <>
      <div className="container">
        <Title title="Todo List"/>
      </div>
      <Input addTodo={this.addTodo}/> {/* addTodo passed as prop */}
      <TodoContainer todos={this.state.todos} />
      </>
    )
  }
}

export default App;

