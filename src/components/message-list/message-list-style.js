import { makeStyles } from "@mui/styles";

export const messageListStyle = makeStyles(() => ({
  chat: {
    padding: '50px 200px',
  },
  titleEmptyChat: {
    width: '100%',
    textAlign: 'center',
  },
  emptyPhoto: {
    display: 'block',
    margin: '20px auto',
  },  
  messageList: {
    width: '100%',
  },
  wrapperInput: {
    margin: "10px 0",
    display: "flex",
    height: "35px",
  },
  input: {
    flexGrowl: "4",
  },
  sendMessage: {
    flexGrowl: "1",
  },
  }));
  