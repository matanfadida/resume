import Button from "../UI/Button";
import style from "./about.module.css";

import { UilDownloadAlt } from '@iconscout/react-unicons'

const About = () => {
  return (
    <section className={style.section}>
      <h3 id="About">About Me</h3>
      <p>
        I am graduating in my third year, I am in the top 10% of my class.
        Looking for an opportunity to start my programming career in a company
        where I could contribute, learn and excel
      </p>
      <Button>
        <a download="" href="Matan_Fadida_CV.pdf">
          Downlond My CV <UilDownloadAlt />
        </a>
      </Button>
    </section>
  );
};

export default About;
