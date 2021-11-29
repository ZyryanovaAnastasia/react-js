import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment, List } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message-list-style";
import { Message } from "./message";

const nameChatBot = "Сhat-bot";

const EmptyList = () => {
  const style = useStyles();
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
  const style = useStyles();
  const refWrapper = useRef(null);

  useEffect(() => {
    refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
  }, [messageList]);

  return (
    <List className={style.messageList} ref={refWrapper}>
      {messageList.map(({ text, author, time }, index) => (
        <Message text={text} author={author} time={time} key={index} />
      ))}
    </List>
  );
};

export const DialogBox = () => {
  const style = useStyles();
  const [newMessageText, setNewMessageText] = useState("");
  const [messageList, setMessageList] = useState({});
  const { chatId } = useParams();

  const inputTxt = useRef(null);

  const getTime = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  const addMessage = useCallback(
    (author = "User", botMessage) => {
      if (
        newMessageText ||
        botMessage
      ) {
        setMessageList({
          ...messageList,
          [chatId]: [
            ...(messageList[chatId] ?? []),
            { author, text: newMessageText || botMessage, time: getTime() },
          ],
        });
        setNewMessageText("");
      }
    },
    [newMessageText, messageList, chatId]
  );

  useEffect(() => {
    inputTxt.current.autofocus = true;
  }, [newMessageText]);

  useEffect(() => {
    let timerId = null;
    const chatMessages = messageList[chatId] ?? [];
    const lastMessage = chatMessages[chatMessages.length - 1];

    if (chatMessages.length && lastMessage.author !== nameChatBot) {
      timerId = setTimeout(() => {
        addMessage(nameChatBot, "Ваше сообщение отправлено");
      }, 2000);
    }

    return () => clearInterval(timerId);
  }, [messageList, chatId, addMessage]);

  const handleChangeValue = (event) => {
    setNewMessageText(event.target.value);
  };

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };

  const chatMessages = messageList[chatId] ?? [];

  return (
    <div className={style.chat}>
      {Object.keys(chatMessages).length !== 0 ? (
        <MessageList messageList={chatMessages} />
      ) : (
        <EmptyList />
      )}

      <div className={style.wrapperInput}>
        <Input
          ref={inputTxt}
          autoFocus={true}
          placeholder="Введите сообщение"
          onChange={handleChangeValue}
          value={newMessageText}
          className={style.input}
          onKeyPress={handlePressInput}
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
