import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const nameChatBot = "Сhat-bot";

const EmptyList = () => {
  return (
    <div className="emptyList">
      <h3 id="titleEmptyChat">Чат пустой. Отправьте первое сообщение.</h3>
      <img
        src="/img/emptyChat.jpg"
        alt="logo"
        id="emptyPhoto"
        width="200px"
        height="300px"
      />
    </div>
  );
};

const MessageList = ({ messageList }) => {
  return (
    <div className="messageList">
      {messageList.map(({ text, author, time }) => (
        <div
          id="message"
          className={author === nameChatBot ? "botMessage" : "clientMessage"}
        >
          <div id="author">{author}</div>
          <div id="text">{text}</div>
          <div id="time">{time}</div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [newMessageText, setNewMessageText] = useState("");
  const [messageList, setMessageList] = useState([]);

  const getTime = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  useEffect(() => {
    setTimeout(() => {
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
  }, [messageList]);

  const addMessage = (event) => {
    if (
      event.target.value === "" && (event.key === "Enter" || event.type === "click")
    ) {
      alert("Введете сообщение");
      return;
    }

    if (event.key === "Enter" || event.type === "click") {
      var btn = document.getElementById("sendMessage");
      btn.disabled = true;
      window.setTimeout(() => {
        btn.disabled = false;
      }, 2500);

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
    <div id="app">
      {Object.keys(messageList).length !== 0 ? (
        <MessageList messageList={messageList} />
      ) : (
        <EmptyList />
      )}
      <div id="wrapperInput">
        <input
          placeholder="Введите сообщение"
          onChange={handleChangeValue}
          value={newMessageText}
          className="input"
          onKeyDown={addMessage}
          required
        />
        <button onClick={addMessage} id="sendMessage">
          Отправить
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
