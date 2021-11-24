import { List } from "@mui/material";
import { ChatItem } from "./chat";
import { useStyles } from "./chat-list-style";

const chatListValue = [
  { id: 1, fullName: "Федор Петрович" },
  { id: 2, fullName: "Сергей Владимирович" },
  { id: 3, fullName: "Алена Петровна" },
];

export const ChatList = () => {
  const style = useStyles();

  return (
    <List className={style.chatList}>
      {chatListValue.map(({ id, fullName }) => (
        <ChatItem fullName={fullName} key={id} />
      ))}
    </List>
  );
};
