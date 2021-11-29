import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components";
import { ChatPage, ProfilePage } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import "./index.css";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CustomThemeProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </BrowserRouter>
      </CustomThemeProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
