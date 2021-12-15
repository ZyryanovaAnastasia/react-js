import { useDispatch } from "react-redux";
import { messageStyle } from "./message-style";
import classnames from "classnames";
import { deleteMessage } from "../../../store/messages";

export const Message = ({ text, author, time, messageId, chatId }) => {
  const styles = messageStyle();
  const dispatch = useDispatch();
  const classMessage = classnames(`${styles.message}`, {
    [styles.botMessage]: author === "Сhat-bot",
    [styles.clientMessage]: author !== "Сhat-bot",
  });

  const deleteMessageById = () => {
    dispatch(deleteMessage(messageId, chatId));
  };

  return (
    <div className={classMessage}>
      <div className={styles.author}>{author}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.time}>{time}</div>
      <button onClick={deleteMessageById}>удалить</button>
    </div>
  );
};
