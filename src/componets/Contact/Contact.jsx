import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.content}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={emailIcon} alt="Email icon" />
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new">varadsyadav16@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/Varad-yadav">linkedin.com/Varad Yadav</a>
          </li>
          <li className={styles.link}>
            <img src={githubIcon} alt="GitHub icon" />
            <a href="https://github.com/varadyadav02v">github.com/Varad Yadav</a>
          </li>
        </ul>
      </div>
    </section>
  );
};
