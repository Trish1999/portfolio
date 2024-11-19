import React from 'react'

import styles from "./Certificate.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Cretificate =()=>{
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.certificate}>
          {certificates.map((certificate, id) => {
            return (
              <div key={id} className={styles.imagebox}>
                 <img src={getImageUrl(certificate.imageSrc)} alt={certificate.title} className={styles.image}></img>
                </div>
            );
          })}
          </div>
    </section>
  )
}

