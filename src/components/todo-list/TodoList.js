import React, { Component } from 'react';

import todoFactory from '../../lib/todoFactory';

import Todo from '../todo/Todo';

class TodoList extends Component {
  constructor(props) {
    // always call the constructor of the superclass with 'props'
    // otherwise 'this.props' will be undefined
    super(props);

    // React thinks all the state of our app resides in 'this.state'
    // any changes to the state of a component causes React to render it again
    this.state = {
      
      // the list of things we need to do
      items: [],

      // the next item we are going to add to our list
      nextItem: ''
    }

    // event handlers should have 'this' bound
    // if this is not done then the meaning of 'this' will be lost when they are executed
    this.addTodo = this.addTodo.bind(this);
    this.handleNextItemChange = this.handleNextItemChange.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  // add the next item to our todo list when the form is submitted
  addTodo(event) {
    // override browser default behaviour for form submission
    event.preventDefault();

    // update the list only if the next item isn't empty space
    let nextItem = this.state.nextItem.trim();
    if(nextItem) {
      let nextItems = this.state.items.concat([todoFactory(nextItem)]);

      this.setState({
        items: nextItems,
        nextItem: ''
      });
    }
  }

  // remove the todo with the given id
  removeTodo(id) {
    let nextItems = this.state.items.filter( item => item.id !== id );

    this.setState({
      items: nextItems
    });
  }

  // update the state whenever something is typed into the text field
  handleNextItemChange(event) {
    this.setState({
      nextItem: event.target.value
    });
  }

  render() {
    // generate a list of li elements of the todo items
    // we use the index of each item as the key
    // this is a naive approach but works fine for this demo
    let todos = this.state.items.map((item) => 
      <li key={item.id}>
        <Todo item={item} onRemoveTodo={this.removeTodo} />
      </li>
    );

    return (
      <div>
        <form onSubmit={this.addTodo}>
          <label>
            Add todo:
            <input type="text" value={this.state.nextItem} onChange={this.handleNextItemChange}/>
          </label>

          <button type="submit">Add todo</button>
        </form>

        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}

export default TodoList;