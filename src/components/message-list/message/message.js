import { messageStyle } from "./message-style";

export const Message = ({ text, author, time }) => {
  const styles = messageStyle();
  return (
    <div
      className={
        author === "Сhat-bot"
          ? `${styles.botMessage} ${styles.message}`
          : `${styles.clientMessage} ${styles.message}`
      }
    >
      <div className={styles.author}>{author}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.time}>{time}</div>
    </div>
  );
};
