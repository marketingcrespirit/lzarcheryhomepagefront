import React from "react";
import styles from './memberscard.module.css'

const MemebrsCard = props => {
  return (
    <div className={styles.memebrsCard}>
      <div className={styles.memebrsCardImg}>
        <img src={props.src} />
      </div>
      <div className={styles.memebrsCardLink}>
        <a href={`/members/${props.href}`}>
          <h1>{props.title}</h1>
        </a>
      </div>
    </div>
  );
};

export default MemebrsCard