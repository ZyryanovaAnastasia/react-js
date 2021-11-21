import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./message-list.module.css";

const nameChatBot = "Сhat-bot";

const EmptyList = () => {
  return (
    <div className={styles.emptyList}>
      <h3 id={styles.titleEmptyChat}>
        Чат пустой. Отправьте первое сообщение.
      </h3>
      <img
        src="/img/emptyChat.jpg"
        alt="logo"
        id={styles.emptyPhoto}
        width="200px"
        height="300px"
      />
    </div>
  );
};

const MessageList = ({ messageList }) => {
  return (
    <div className={styles.messageList}>
      {messageList.map(({ text, author, time }) => (
        <div
          id={styles.message}
          className={
            author === nameChatBot
              ? `${styles.botMessage}`
              : `${styles.clientMessage}`
          }
        >
          <div id={styles.author}>{author}</div>
          <div id={styles.text}>{text}</div>
          <div id={styles.time}>{time}</div>
        </div>
      ))}
    </div>
  );
};

export const Chat = () => {
  const [newMessageText, setNewMessageText] = useState("");
  const [messageList, setMessageList] = useState([]);

  const getTime = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  useEffect(() => {
    let timerId = null;

    timerId = setTimeout(() => {
      if (
        messageList.length !== 0 &&
        messageList[messageList.length - 1].author !== nameChatBot
      ) {
        setMessageList([
          ...messageList,
          {
            author: nameChatBot,
            text: "Ваше сообщение отправлено",
            time: getTime(),
          },
        ]);
      }
    }, 2000);

    return () => clearInterval(timerId);
  }, [messageList]);

  const addMessage = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      setMessageList([
        ...messageList,
        {
          author: "Anonymous",
          text: newMessageText,
          time: getTime(),
        },
      ]);
      setNewMessageText("");
    }
  };

  const handleChangeValue = (event) => {
    setNewMessageText(event.target.value);
  };

  return (
    <div id={styles.app}>
      {Object.keys(messageList).length !== 0 ? (
        <MessageList messageList={messageList} />
      ) : (
        <EmptyList />
      )}
      <div id={styles.wrapperInput}>
        <input
          placeholder="Введите сообщение"
          onChange={handleChangeValue}
          value={newMessageText}
          className={styles.input}
          onKeyDown={addMessage}
          required
        />
        <Button
          onClick={addMessage}
          id={styles.sendMessage}
          variant="contained"
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};
