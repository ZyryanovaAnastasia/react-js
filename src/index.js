import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { DialogBox, ChatList, Bar } from "./components";
import "./index.css";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Bar />
      <ChatList />
      <DialogBox />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
