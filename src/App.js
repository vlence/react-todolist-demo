import React, { Component } from 'react';

import TodoList from './components/todo-list/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>My todolist</h1>

        <TodoList />
      </div>
    );
  }
}

export default App;
