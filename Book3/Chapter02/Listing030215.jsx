import styles from './Message.module.css';

function Message(props) {
  return <p className={styles.redParagraph}>This text is red.</p>;
}

export default Message;
