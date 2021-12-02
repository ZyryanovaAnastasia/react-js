import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { List } from "@mui/material";
import { ChatItem } from "./chat";
import { useStyles } from "./chat-list-style";
import { conversationsSelector } from "../../store/conversations";

export const ChatList = () => {
  const style = useStyles();
  const { chatId } = useParams();
  const conversation = useSelector(conversationsSelector);

  return (
    <List className={style.chatList}>
      {conversation.map(({ id, fullName }) => (
        <Link to={`${id}`} key={id}>
          <ChatItem fullName={fullName} selected={id === chatId} />
        </Link>
      ))}
    </List>
  );
};
