function Message({ messageType, message }) {
  function getMessageClass() {
    if (messageType === 'error') {
      return 'errorStyle';
    } else {
      return 'messageStyle';
    }
  }
  return <p className={getMessageClass()}>{message}</p>;
}

export default Message;
