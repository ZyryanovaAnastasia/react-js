import { makeStyles } from "@mui/styles";

export const messageListStyle = makeStyles((context) => ({
  chat: {
    width: "70%",
    display: "flex",
    height: "80VH",
    flexWrap: "wrap",
  },
  emptyList: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  titleEmptyChat: {
    width: "100%",
    textAlign: "center",
    alignSelf: "center",
  },
  emptyPhoto: {
    display: "block",
    margin: "20px auto",
  },
  messageList: {
    width: "100%",
    maxHeight: "100%",
    overflow: "auto",
    padding: "0 10px 0 0 !important",
  },
  wrapperInput: {
    width: "100%",
    height: "35px",
    alignSelf: "flex-end",
  },
  input: {
    height: "50px",
  },
  iconSend: {
    cursor: "pointer",
    color: `${context.palette.primary.main}`,
  },
  sendMessage: {
    flexGrowl: "1",
  },
}));
