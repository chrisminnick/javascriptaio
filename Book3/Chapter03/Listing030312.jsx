const Message = React.memo(function Message(props) {
  return <h1>Hi, {props.firstName}</h1>;
});
