import React from "react";
import styles from "./lastpage.module.css";

const Lastpage = (props) => {
  return (
    <div className={styles.lastPage}>
      <a href={props.href}>
        <p>{props.content}</p>
      </a>
    </div>
  );
};

export default Lastpage;
