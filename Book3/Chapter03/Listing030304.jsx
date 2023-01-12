function toDoList(props) {
  return props.todos.map((todo, index) => <li key={index}>{todo}</li>);
}
export default toDoList;
