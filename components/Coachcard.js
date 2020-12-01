import React from "react";
import styles from './coachcard.module.css'

const Coachcard = (props) => {
  return (
    <div className={styles.coachCard}>
      <div className={styles.coachCardImg}>
          <a href={`/about/${props.href}`}><img src={props.src}/></a>
      </div>
      <div className={styles.coachCardTxt}>
        <div className={styles.coachCardName}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.coachCardMain}>
          <p>{props.main}</p>
        </div>
      </div>
    </div>
  );
};

export default Coachcard;
