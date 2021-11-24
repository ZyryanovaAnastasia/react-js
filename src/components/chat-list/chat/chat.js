import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

export const ChatItem = ({ fullName = "Anonymous" }) => {
  return (
    <div>
      <ListItem>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={fullName} />
      </ListItem>
    </div>
  );
};
