import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { deleteConversation } from "../../../store/conversations";

export const ChatItem = ({ id, fullName = "Anonymous", dispatch }) => {
  const navigate = useNavigate();

  const deleteRoom = () => {
    dispatch(deleteConversation(id));
    navigate("/chat");
  };

  return (
    <div>
      <Link to={`${id}`}>
        <ListItem>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary={fullName} />
        </ListItem>
      </Link>
      <button onClick={deleteRoom}>удалить</button>
    </div>
  );
};
