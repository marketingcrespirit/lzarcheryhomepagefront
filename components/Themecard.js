import React from "react";
import styles from './themecard.module.css'
const Themecard = props => {
  return (
    <li className={styles.list}>
      <p>{props.themeTitle}</p>
      <p>{props.themeContent}</p>
    </li>
  );
};

export default Themecard;
