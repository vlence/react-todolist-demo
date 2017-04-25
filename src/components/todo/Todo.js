import React, { Component } from 'react';

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<span>{this.props.item}</span>);
  }
}

export default Todo;