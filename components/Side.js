import React from "react";
import styles from "./side.module.css";

export default function Side(props) {
  return (
    <div className={props.active ? `${styles.sideWrapper}` : `${styles.sideWrapper} ${styles.active}`}>
      <div className="fb-page" data-href="https://www.facebook.com/LZarchery/" data-tabs="timeline" data-width="300" data-height="880" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/LZarchery/" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/LZarchery/">立禪射藝</a>
        </blockquote>
      </div>
      <div>

      </div>
    </div>
  );
}
