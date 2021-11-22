import React from "react";
import { DialogBox, ChatList } from "./components";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ChatList />
      <DialogBox />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
