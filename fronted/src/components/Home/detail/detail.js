import style from "./detail.module.css";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilLinkedin } from "@iconscout/react-unicons";
import { UilCommentMedical } from "@iconscout/react-unicons";
import Button from "../../UI/Button";

const Details = () => {
  return (
    <div className={style.center}>
      <section className={style.section}>
        <div className={style["icon-div"]}>
          <a
            href="https://www.linkedin.com/in/matan-fadida-03b6b71bb/"
            className={style.icon}
          >
            <UilLinkedin />
          </a>
          <a href="https://github.com/matanfadida" className={style.icon}>
            <UilGithubAlt />
          </a>
        </div>
        <div className={style.details}>
          <h1>I,m Matan Fadida</h1>
          <p className={style.p}>
            this is my offcial resume website to showes all Details about me
          </p>
          <Button>
            <a href="#Contact">
              Contact Me <UilCommentMedical />
            </a>
          </Button>
        </div>

        <div>
          <img
            src="me.png"
            alt="Me"
            width={200}
            height={200}
            className={style.image}
            id="About"
          />
        </div>
      </section>
    </div>
  );
};

export default Details;