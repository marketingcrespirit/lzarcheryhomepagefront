import React from "react";
import styles from "./nextpage.module.css";

const Nextpage = (props) => {
  return (
    <div className={styles.nextPage}>
      <a target="_blank" href={props.href}>
        <div className={styles.contentWrapper}>
          <p>{props.content}</p>
        </div>
      </a>
    </div>
  );
};

export default Nextpage;
