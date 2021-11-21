import React from "react";
import { Chat } from "./components";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Chat />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
