import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm  
        <span id={styles.flip}>
          <span className={styles.flipItem}> Trishna</span>
          <span className={styles.flipItem}> a Fullstack Developer</span>
        </span>
        </h1>
        <p className={styles.description}>
        Possess over 1.5 years of experience as a Software Engineer, focusing
        on Full Stack Development, while building an understanding of both
        Front-end and Back-end technologies,expertise in UI/UX design principles, API integration, and Database
        Management,and agile practices.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
    </section>
  );
};
