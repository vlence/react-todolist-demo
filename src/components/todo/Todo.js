import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  // when the 'x' button is clicked, tell TodoList to delete this todo item
  handleRemoveTodo() {
    this.props.onRemoveTodo(this.props.item.id);
  }

  // render the todo item with its text and a delete button
  render() {
    return (
      <span>
        <span>{this.props.item.text}</span>
        <button onClick={this.handleRemoveTodo}>x</button>
      </span>
    );
  }
}

export default Todo;