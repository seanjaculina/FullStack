import React, { Component } from 'react'

class Input extends Component {

  // holds state for a todo
  constructor(props) {
    super(props);
    this.state = {name:""}
  }

  // no need to bind arrow functions
  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  onClickSubmit = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      name: this.state.name,
    };
    this.props.addTodo(newTodo);
    this.setState({name: ""});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      name: this.state.name,
    };
    this.props.addTodo(newTodo);
    this.setState({name: ""});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
          <input type="button" value="Submit todo" onClick={this.onClickSubmit}/>
        </form>
    )
  }
}

export default Input;