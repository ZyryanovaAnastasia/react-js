import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { Input, InputAdornment, List } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message-list-style";
import { Message } from "./message";
import { messagesSelector, sendMessage } from "../../store/messages";
import { useDispatch, useSelector } from "react-redux";

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
  const { chatId } = useParams();
  const messages = useSelector(messagesSelector(chatId));
  const dispatch = useDispatch();

  const inputTxt = useRef(null);

  const getTime = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  const addMessage = useCallback(
    (author = "User", botMessage) => {
      if (newMessageText || botMessage) {
        dispatch(sendMessage({ author, text: newMessageText || botMessage, time: getTime() }, chatId));
        setNewMessageText("");
      }
    },
    [newMessageText, chatId, dispatch]
  );

  useEffect(() => {
    inputTxt.current.autofocus = true;
  }, [newMessageText]);

  useEffect(() => {
    let timerId = null;
    const lastMessage = messages[messages.length - 1];

    if (messages.length && lastMessage.author !== nameChatBot) {
      timerId = setTimeout(() => {
        addMessage(nameChatBot, "Ваше сообщение отправлено");
      }, 2000);
    }

    return () => clearInterval(timerId);
  }, [messages, chatId, addMessage]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };

  return (
    <div className={style.chat}>
      {Object.keys(messages).length !== 0 ? (
        <MessageList messageList={messages} />
      ) : (
        <EmptyList />
      )}

      <Input
          ref={inputTxt}
          autoFocus={true}
          placeholder="Введите сообщение"
          onChange={(e) => setNewMessageText(e.target.value)}
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
  );
};
