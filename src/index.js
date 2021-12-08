import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { Header } from "./components";
import { ChatPage, ProfilePage, Gists } from "./pages";
import { CustomThemeProvider } from "./theme-context";
import { store, persistor } from "./store";
import "./index.css";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CustomThemeProvider>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/chat/*" element={<ChatPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/gits" element={<Gists />} />
              </Routes>
            </BrowserRouter>
          </CustomThemeProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
