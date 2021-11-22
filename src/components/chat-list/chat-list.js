import { List } from "@mui/material";
import { ChatElm } from "./chat";
import { chatListStyle } from "./chat-list-style";

const chatListValue = [
  { id: 1, fullName: "Федор Петрович" },
  { id: 2, fullName: "Сергей Владимирович" },
  { id: 3, fullName: "Алена Петровна" },
];

export const ChatList = () => {
  const style = chatListStyle();

  return (
    <List className={style.chatList}>
      {chatListValue.map(({ id, fullName }) => (
        <ChatElm fullName={fullName} key={id} />
      ))}
    </List>
  );
};
