import { messageStyle } from "./message-style";
import { withCounter } from "../../../hocs/with-counter";
import classnames from "classnames";

export const Message = withCounter(({ text, author, time }) => {
  const styles = messageStyle();
  const classMessage = classnames(`${styles.message}`, {
    [styles.botMessage]: author === "Сhat-bot",
    [styles.clientMessage]: author !== "Сhat-bot",
  });

  return (
    <div className={classMessage}>
      <div className={styles.author}>{author}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.time}>{time}</div>
    </div>
  );
});
