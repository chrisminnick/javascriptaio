function Message(props) {
  return (
    <div className={props.messageType}>
      <h1>{props.messageText}</h1>
    </div>
  );
}
export default Message;
