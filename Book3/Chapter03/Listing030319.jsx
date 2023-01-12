import Message from './Message';

function ErrorMessage(props) {
  return <Message messageType="error" messageText={props.errorMessage} />;
}
export default ErrorMessage;
