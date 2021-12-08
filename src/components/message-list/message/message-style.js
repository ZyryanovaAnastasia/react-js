import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  message: {
    padding: "10px",
    borderRadius: "10px",
  },
  clientMessage: {
    textAlign: "left",
    backgroundColor: "rgb(200 235 241)",
    margin: "5px 60% 0 0",
  },
  botMessage: {
    textAlign: "right",
    backgroundColor: "rgb(204 204 204)",
    margin: " 0 0 0 60%",
  },
  author: {
    fontStyle: "italic",
  },
  text: {
    fontSize: "larger",
    margin: "10px 0",
  },
  time: {
    fontSize: "small",
  },
  notShowBtnEdit: {
    visibility: "hidden",
  }
}));
