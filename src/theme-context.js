import { createContext, useState } from "react";

export const ThemContext = createContext();

const themes = {
  dark: {},
  light: {},
};

export const CustomThemeProvider = ({ children, initialTheme = "light" }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: initialTheme,
  });

  const  themeSetter = 
  return (
    <ThemContext.Provider value={{ theme }}>{children}</ThemContext.Provider>
  );
};
