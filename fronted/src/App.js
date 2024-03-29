import { createContext, useState } from "react";
import HomePage from "./components/Home/homepage";
import MainNavigation from "./components/navigation/main-navigation";
import { BrowserRouter } from "react-router-dom";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleThemeHandler = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleThemeHandler }}>
      <BrowserRouter>
        <div>
          <MainNavigation />
          <HomePage />
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
