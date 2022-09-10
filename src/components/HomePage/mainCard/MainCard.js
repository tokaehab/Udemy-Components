import React from "react";
import styles from "../../../styles/mainCard/MainCard.module.css";

const MainCard = () => {
  return (
    <section className={styles.mainCard}>
      <div className={`${styles.coll} ${styles.titleCard}`}>
        <h1>Get ahead, stay ahead</h1>
        Thrive with latest skills. Log in now to see deals on courses. Sale ends
        tonight!
      </div>
      <img
        className={styles.coll}
        src={require("../../../assets/img.jpg")}
        alt="Card Cover"
      />
    </section>
  );
};

export default MainCard;
