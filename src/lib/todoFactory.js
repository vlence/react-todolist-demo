// we're using uuid to generate unique ids for the todos
import uuid from 'uuid/v4';

// factory to create a new todo with the given text
// automatically gives each todo a unique id
function todoFactory(text) {
  return {
    id: uuid(),
    text
  };
}

export default todoFactory;