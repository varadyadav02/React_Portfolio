import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../../assets/hero/varad.png"; // Correct relative path

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Varad</h1>
        <p className={styles.description}>
          I'm a full-stack developer with more than 5 project experience ,also i have strong hold on java and database. 
        </p>
        <a href="mailto:varadsyadav16@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage} // Use the imported image
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
