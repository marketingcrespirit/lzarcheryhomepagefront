import React from "react";
import styles from "./partnercard.module.css";
const LENGTH = 11;

export default function Partnercard() {
  let images = [];
  for (let i = 0; i < LENGTH; i++) {
    images.push(<img key={i} src={`/assets/images/partners/${i}.png`} />);
  }
  return (
    <div className={styles.partnerCard}>
      <div className={styles.partnerHead}>
        <h1>特約廠商專屬優惠</h1>
        <p>【特約夥伴募集中，請洽立禪射藝服務人員】</p>
        <ul>
          <li>1. 首次來店享有場地和弓具租借一小時免費</li>
          <li>2. 射箭體驗課優惠價800元/人</li>
          <li>3. 體驗課後贈送皮革護指套+單日暢遊券乙張</li>
          <li>4. 來店場地場租享優惠價格300元/小時，弓具租借享優惠價格200元/次</li>
        </ul>
      </div>
      <div className={styles.partnerBody}>{images}</div>
    </div>
  );
}
