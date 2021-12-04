import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input, InputAdornment, List } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message-list-style";
import { Message } from "./message";
import { messagesSelector, sendMessage } from "../../store/messages";
import { conversationsSelector } from "../../store/conversations";

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

const MessageList = ({ messageList, chatId }) => {
  const style = useStyles();
  const refWrapper = useRef(null);

  useEffect(() => {
    refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
  }, [messageList]);

  return (
    <List className={style.messageList} ref={refWrapper}>
      {messageList.map(({ author, text, time, id }) => (
        <Message
          text={text}
          author={author}
          time={time}
          messageId={id}
          key={id}
          chatId={chatId}
        />
      ))}
    </List>
  );
};

export const DialogBox = () => {
  const style = useStyles();
  const [newMessageText, setNewMessageText] = useState("");
  const { chatId } = useParams();
  const messages = useSelector(messagesSelector(chatId));
  const conversations = useSelector(conversationsSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputTxt = useRef(null);

  const addMessage = useCallback(
    (author = "User", botMessage) => {
      if (newMessageText || botMessage) {
        dispatch(
          sendMessage({ author, text: newMessageText || botMessage }, chatId)
        );
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

  useEffect(() => {
    const isValidRoomId = conversations.some(({ id }) => {
      return +id === +chatId;
    });
    if (!isValidRoomId && chatId) {
      navigate("/chat");
    }
  }, [chatId, conversations, navigate]);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };

  return (
    <div className={style.chat}>
      {Object.keys(messages).length !== 0 ? (
        <MessageList messageList={messages} chatId={chatId} />
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
