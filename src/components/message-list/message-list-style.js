import { makeStyles } from "@mui/styles";

export const messageListStyle = makeStyles((context) => ({
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
  iconSend:{
    cursor: "pointer",
    color: `${context.palette.primary.main}`
  },
  sendMessage: {
    flexGrowl: "1",
  },
  }));
  