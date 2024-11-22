import React from "react";
import styles from "./Certificate.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Certificate = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.certificate}>
        {certificates.map((certificate, id) => {
          return (
            <div key={id} className={styles.imagebox}>
              {/* Anchor tag wrapping the image to open in a new tab */}
              <a
                href={getImageUrl(certificate.imageSrc)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={getImageUrl(certificate.imageSrc)}
                  alt={certificate.title}
                  className={styles.image}
                />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
