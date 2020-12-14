import React from "react";
import styles from "./titletag.module.css";

const TitleTag = (props) => {
  let style;

  switch (props.bgNumber) {
    case 1:
      style = "bg1";
      break;
    case 2:
      style = "bg2";
      break;
    case 3:
      style = "bg3";
      break;
    case 4:
      style = "bg4";
      break;
    case 5:
      style = "bg5";
      break;
    case 6:
      style = "bg6";
      break;
    case 7:
      style = "bg7";
      break;
    case 8:
      style = "bg8";
      break;
    case 9:
      style = "bg9";
      break;
    case 10:
      style = "bg10";
      break;
    case 11:
      style = "bg11";
      break;
    default:
      style = "";
      break;
  }
  return (
    <div className={props.home ? `${styles.titleTag} ${style} ${styles.heigher}` : `${styles.titleTag} ${style}`}>
      <div className={styles.titleTagContent}>
        <img className="desktop" src="/assets/icons/arrow.png" />
        <h2 className="desktop">{props.title}</h2>
      </div>
    </div>
  );
};

export default TitleTag;
