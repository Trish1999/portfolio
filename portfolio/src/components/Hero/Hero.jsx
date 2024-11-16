import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm  
        <h1 id={styles.flip}>
          <span className={styles.flipItem}> Trishna</span>
          <span className={styles.flipItem}> a Fullstack Developer</span>
        </h1>
        </h1>
        <p className={styles.description}>
        Experienced Software Engineer with 1.5 years in Full Stack Development,
        specializing in UI/UX design, API integration, and database management.</p>
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
