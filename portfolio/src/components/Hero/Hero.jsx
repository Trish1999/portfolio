import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.background}>
      <div className={styles.content}>
         <h1 className={styles.title}>Hi, I'm 
            <span className={styles.highlight}> a Full Stack Web Developer</span>
          </h1>
       <p className={styles.description}>
             Experienced Software Engineer with 1.5 years in Full Stack Development,
        specializing in UI/UX design, API integration, and database management.</p>
                  <a 
            href="/resume.pdf" 
            className={styles.resumeBtn} 
            download="Trishnarani_Patel_Resume.pdf"
          >
            Download Resume
          </a>
        </div>
        <div className={styles.profile}>
          <img
            src={getImageUrl("hero/hero1.png")} 
            alt="profile picture"
            className={styles.profileImage}
          />
          <p className={styles.profileName}>
            Trishnarani Patel <br />
          </p>
        </div>
      </div>      
    </section>
    
  );
};
