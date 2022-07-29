import { useContext, useEffect, useState } from "react";
import style from "./main-navigation.module.css";
// import { UilAlignJustify } from '@iconscout/react-unicons';
import { UilMoon } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { ThemeContext } from "../../App";

const MainNavigation = () => {
  const conTheme = useContext(ThemeContext);
  const [navbar, setNavbar] = useState(true);
  const theme = conTheme.theme === "dark";
  // const [showIconMain, setShowIconMain] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 0) {
      setNavbar(false);
    } else {
      setNavbar(true);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <header>
      <nav
        className={navbar ? style.nav : style["nav-move"]}
        style={
          theme
            ? { backgroundColor: "rgb(18, 17, 17)", color: "darkorange" }
            : null
        }
      >
        <h2 className={style.h2}>Fadida Matan</h2>
        <ul className={style.ul}>
          <li className={style.li}>
            <a href="#top" className={theme ? style["a-dark"] : style.a}>
              Home
            </a>
          </li>
          <li className={style.li}>
            <a href="#About" className={theme ? style["a-dark"] : style.a}>
              About
            </a>
          </li>
          <li className={style.li}>
            <a href="#Skills" className={theme ? style["a-dark"] : style.a}>
              Skills
            </a>
          </li>
          <li className={style.li}>
            <a href="#Contact" className={theme ? style["a-dark"] : style.a}>
              Contact
            </a>
          </li>
          {theme ? (
            <i className={style.icon}>
              <UilSun onClick={conTheme.toggleThemeHandler} />
            </i>
          ) : (
            <i className={style.icon}>
              <UilMoon onClick={conTheme.toggleThemeHandler} />
            </i>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
