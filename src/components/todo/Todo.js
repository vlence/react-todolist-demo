import React from 'react';

// We made Todo a separate component even though it isn't doing much
// Like this if we need to add additional features it will be easy
function Todo(props) {
  return (
    <span>{props.item}</span>
  );
}

export default Todo;