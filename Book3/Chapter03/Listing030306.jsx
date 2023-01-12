import React from 'react';

class ToDoList extends React.Component {
  render() {
    return this.props.todos.map((todo, index) => <li key={index}>{todo}</li>);
  }
}

export default ToDoList;
