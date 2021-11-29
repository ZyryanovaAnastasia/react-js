import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { DialogBox, ChatList } from "../components";

export const ChatPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const listener = ({ code }) => {
      if (code === "Escape") {
        navigate("/chat");
      }
    };
    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [navigate]);

  return (
    <div className="chat-page">
      <ChatList />
      <Routes>
        <Route path="/" element={<h2>Выберите чат слева</h2>} />
        <Route path="/:chatId" element={<DialogBox />} />
      </Routes>
    </div>
  );
};
