import React from "react";
import TitleTag from "../components/TitleTag";
import styles from "./japanese.module.css";
import Form from "../components/Form";
export default function Experience() {
  return (
    <div className={styles.japaneseWrapper}>
      <div className={styles.openingWrapper}>
        <h1>日本弓道文化體驗課程</h1>
        <p>手持弓矢，在寬敞明亮的場館中、禮敬於心，深深鞠躬，雜念在吐息之中如煙飄散。</p>
        <p>身著上白下黑的衣裝、威儀凜然；徐行至射位，一步步牢實的完成射法八節，清亮的弦音起落，恭敬、莊嚴。充滿自信的人們，是場館中最美的風景。</p>
        <p>即使日子裡的繁忙，壓得我們忘了怎麼關心自己；但在弓道裡，透過弓與箭，總能自然而然的導引，靜觀內在的情緒、身體，甚至每一口呼吸。</p>
      </div>

      <div className={styles.linkWrapper}>
        <h2>【報名採全預約制】</h2>
        <h2>
          請透過
          <a href="https://www.facebook.com/LZarchery" target="_blank">
            立禪射藝FB
          </a>
          私訊詢問
          <br/>或撥打場內電話
          <a className={styles.mobile} href="tel:+886-3-657-7681" target="_blank">
            03-6577681
          </a>
          <span className={styles.desktop}>03-6577681</span>
        <br/>將有專人為您服務。</h2>
      </div>
      <Form />
    </div>
  );
}
