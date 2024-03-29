import style from "./contact.module.css";

import { useContext, useState } from "react";
import DetailContact from "./detail-contact";
import PopUp from "./show-popup";
import Form from "./form";
import { ThemeContext } from "../../../App";

const Contact = () => {
  const [Loding, setLoding] = useState(false);
  const [click, setClick] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorSend, setErrorSend] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const conTheme = useContext(ThemeContext);
  const theme = conTheme.theme === "dark";

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const messageHandler = (event) => {
    setMessage(event.target.value);
  };

  const popMessageHandler = () => {
    setErrorTitle(false);
    setErrorSend(false)
    setErrorEmail(false);
    setErrorMessage(false);
    setClick(false);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const senedEmail = {
      subject: title,
      email: email,
      message: message,
    };
    if (title === "") {
      setErrorTitle(true);
      return;
    }
    if (email === "") {
      setErrorEmail(true);
      return;
    }
    if (message === "") {
      setErrorMessage(true);
      return;
    }
    setLoding(true);
    
    const res = await fetch("https://resume-api-mxg0.onrender.com/sendEmail", {
      method: "POST",
      body: JSON.stringify(senedEmail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    if(data.message !== "Successfully"){
      setErrorSend(true);
    }else{
      setClick(true);
    }
    setLoding(false);
  };

  return (
    <section className={style["section-contact"]}>
      <div>
        <h2 className={theme ? style["contact-title-dark"] : style["contact-title"]} id="Contact">
          Contact Me
        </h2>
        <br />
        <span className={style["contact-subtitle"]}>be in touch</span>
      </div>
      <br />
      <div className={style.continer}>
        <DetailContact />
        <Form
          submitHandler={submitHandler}
          emailHandler={emailHandler}
          titleHandler={titleHandler}
          messageHandler={messageHandler}
          Loding={Loding}
          theme={theme}
        />
      </div>
      <PopUp
        popMessageHandler={popMessageHandler}
        click={click}
        errorTitle={errorTitle}
        errorEmail={errorEmail}
        errorSend={errorSend}
        errorMessage={errorMessage}
      />
    </section>
  );
};

export default Contact;
