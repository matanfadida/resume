import { useContext } from "react";
import { ThemeContext } from "../../App";
import About from "./About/About";
import Contact from "./contact/contact";
import Details from "./detail/detail";
import Footer from "./footer/footer";
import Qualification from "./qualification/qualification";
import Skills from "./Skills/skills";
import Volunteering from "./volunteering/volunteering";
import Work from "./work/work";

const HomePage = () => {
  const ConTex = useContext(ThemeContext);
  const theme = ConTex.theme;

  return (
    <div
      style={
        theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#212121" }
      }
    >
      <br />
      <Details />
      <About />
      <Work/>
      <Skills />
      <Qualification />
      <Volunteering />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
