import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";

const EmptyList = () => {
  return (
    <div>
      <h3>Чат пустой</h3>
    </div>
  );
};

const MessageList = ({ messageList }) => {
  return (
    <div>
      {messageList.map(({ text, author, date, time }) => (
        <div>
          <div>author: {author}</div>
          <div>date: {date}</div>
          <div>time: {time}</div>
          <div>text: {text}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [newMessageText, setNewMessageText] = useState("");
  const [messageList, setMessageList] = useState([]);

  const getDate = () => {
    return new Date().toLocaleDateString();
  };

  const getTime = () => {
    return new Date().toLocaleTimeString().slice(0, -3);
  };

  useEffect(() => {
    setTimeout(() => {
      if (
        messageList.length !== 0 &&
        messageList[messageList.length - 1].author !== "Сhat-bot"
      ) {
        setMessageList([
          ...messageList,
          {
            author: "Сhat-bot",
            text: "Ваше сообщение отправлено",
            getDate,
            getTime,
          },
        ]);
      }
    }, 2000);
  }, [messageList]);

  const addMessage = () => {
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
        date: getDate(),
        time: getTime(),
      },
    ]);
    setNewMessageText("");
  };

  const handleChangeValue = (event) => {
    setNewMessageText(event.target.value);
  };

  return (
    <div>
      {Object.keys(messageList).length !== 0 ? (
        <MessageList messageList={messageList} />
      ) : (
        <EmptyList />
      )}
      <input
        placeholder="Введите сообщение"
        onChange={handleChangeValue}
        value={newMessageText}
      />
      <button onClick={addMessage} id="sendMessage">
        add new message
      </button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
