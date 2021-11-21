import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { messageListStyle } from "./message-list-style";
import { Message } from "./message";
const nameChatBot = "Сhat-bot";

const EmptyList = () => {
  const style = messageListStyle();
  return (
    <div className={style.emptyList}>
      <h3 className={style.titleEmptyChat}>
        Чат пустой. Отправьте первое сообщение.
      </h3>
      <img
        src="/img/emptyChat.jpg"
        alt="logo"
        className={style.emptyPhoto}
        width="200px"
        height="300px"
      />
    </div>
  );
};

const MessageList = ({ messageList }) => {
  const style = messageListStyle();
  return (
    <div className={style.messageList}>
      {messageList.map(({ text, author, time }, index) => (
        <Message text={text} author={author} time={time} key={index}/>
      ))}
    </div>
  );
};

export const Chat = () => {
  const style = messageListStyle();
  const [newMessageText, setNewMessageText] = useState("");
  const [messageList, setMessageList] = useState([]);

  const btnSend = useRef(null);

  const getTime = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  useEffect(() => {
    btnSend.current.autofocus = true;
  }, [newMessageText]);

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
    if ((event.key === "Enter" || event.type === "click") && newMessageText) {
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
    <div className={style.chat}>
      {Object.keys(messageList).length !== 0 ? (
        <MessageList messageList={messageList} />
      ) : (
        <EmptyList />
      )}
      <div className={style.wrapperInput}>
        <Input
          ref={btnSend}
          autoFocus={true}
          placeholder="Введите сообщение"
          onChange={handleChangeValue}
          value={newMessageText}
          className={style.input}
          onKeyDown={addMessage}
          fullWidth
          endAdornment={
            <InputAdornment position="end">
              <Send className={style.iconSend} onClick={addMessage} />
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
};