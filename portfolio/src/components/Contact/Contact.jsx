import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <>
    <footer id="contact" className={styles.container}>
      <div className={styles.text} >
        <h2>Feel free to reach out!</h2>

              <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/call.png")} className={styles.call} alt="call icon" />
          <h3>+91 8847932336</h3>
        </li>
        <li className={styles.link}>
         <img src={getImageUrl("contact/location.png")} className={styles.location} alt="location icon" />
        <h3>Bengaluru, Karnataka</h3>
        </li>
        </ul>
          <a href="t.patel28.1999@email.com" className={styles.contactBtn}>
          Write a Mail 
        </a>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="t.patel28.1999@email.com">t.patel28.1999@gmail.com</a>
        </li>
                <li className={styles.link}>
          <img
            src={getImageUrl("contact/behance.svg")}
            alt="Behance icon"
            className={styles.behance}
          />
          <a href="https://www.behance.net/trishnapatel3/projects">behance.com/trishna</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Trish1999">github.com/trishna</a>
        </li>
                <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="http://linkedin.com/in/trishnarani-patel-396b711ab">linkedin.com/trishna</a>
        </li>
      </ul>

    </footer>
          <hr/>
      <h3 className={styles.copyright} >Copyright © 2024 trishna28.com</h3>
      </>
  );
};
