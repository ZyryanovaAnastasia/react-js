import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { List } from "@mui/material";
import { ChatItem } from "./chat";
import { useStyles } from "./chat-list-style";
import {
  conversationsSelector,
  createConversation,
} from "../../store/conversations";

export const ChatList = () => {
  const style = useStyles();
  const { chatId } = useParams();
  const conversations = useSelector(conversationsSelector);

  const dispatch = useDispatch();

  const createNewChat = () => {
    const name = prompt("name");
    const isValidName = conversations.some(({ fullName }) => {
      return fullName === name;
    });

    if (name && !isValidName) {
      dispatch(createConversation(name));
    } else {
      alert("неверно");
    }
  };

  return (
    <List className={style.chatList}>
      <button onClick={createNewChat}>create</button>
      {conversations.map(({ id, fullName }) => (
        <ChatItem
          id={id}
          fullName={fullName}
          selected={id === chatId}
          dispatch={dispatch}
          key={id}
        />
      ))}
    </List>
  );
};
