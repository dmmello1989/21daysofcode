import { useEffect, useState, useContext } from "react";
import { ThemeProvider, ThemeContext } from "styled-components";

import { Router } from "./router";
import darkTheme from "./themes/dark";
import lightTheme from "./themes/light";
import * as S from "./styles";
import "./global.css";

function App() {
  const [active, setActive] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false)
  const themeContext = useContext(ThemeContext);

  const toggleDarkMode = () => {
    const localDarkMode = localStorage.getItem("darkMode"); 
    if (localDarkMode === "true") {
      localStorage.setItem("darkMode", "false");
    } else {
      localStorage.setItem("darkMode", "true");
    }
    setActive(() => !active);
    setIsDarkMode(() => !isDarkMode);
  }

  console.log("current theme: ", themeContext)

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <S.AppContainer>
          <Router toggleDarkMode={toggleDarkMode} active={active} />
        </S.AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;