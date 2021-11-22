import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

export const ChatElm = ({ fullName }) => {
  if (!fullName) {
    fullName = "Anonymous";
  }
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
