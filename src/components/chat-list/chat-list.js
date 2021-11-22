import { List } from "@mui/material";
import { ChatElm } from "./chat";

const chatListValue = [
  { id: 1, fullName: "Федор Петрович" },
  { id: 2, fullName: "Сергей Владимирович" },
  { id: 3, fullName: "Алена Петровна" },
];

export const ChatList = () => {
  return (
    <List>
      {chatListValue.map(({ id, fullName }) => (
        <ChatElm fullName={fullName} key={id} />
      ))}
    </List>
  );
};
