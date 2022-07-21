import style from "./contact.module.css";

import { useState } from "react";
import DetailContact from "./detail-contact";
import PopUp from "./show-popup";
import Form from "./form";

const Contact = () => {
  const [Loding, setLoding] = useState(false);
  const [click, setClick] = useState(false);
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

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
    setClick(true);
    setLoding(true);
    fetch("/sendEmail", {
      method: "POST",
      body: JSON.stringify(senedEmail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLoding(false);
    setEmail("");
    setTitle("");
    setMessage("");
  };

  return (
    <section className={style["section-contact"]}>
      <div>
        <h2 className={style["contact-title"]} id="Contact">
          Contact Me
        </h2>
        <br />
        <span className={style["contact-subtitle"]}>Get in touch</span>
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
        />
      </div>
      <PopUp
        popMessageHandler={popMessageHandler}
        click={click}
        errorTitle={errorTitle}
        errorEmail={errorEmail}
        errorMessage={errorMessage}
      />
    </section>
  );
};

export default Contact;