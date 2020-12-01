import React from "react";
import styles from "./viptable.module.css";

const Viptable = () => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.tg}>
        <thead>
          <tr>
            <th className={styles.tg0pky} colSpan="3">
              <h2>VIP超級會員方案</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          
          <tr>
            <td className={styles.tg0pky}>
              <p>方案價格</p>
            </td>
            <td className={styles.tg0pky}>
              <p>$3,880</p>
            
            </td>
            <td className={styles.tg0pky}>
              <p>$8,800</p>
     
            </td>
          </tr>
          <tr>
            <td className={styles.tg0pky}>
              <p>方案時間</p>
            </td>
            <td className={styles.tg0pky}>
              <p>30天</p>
            </td>
            <td className={styles.tg0pky}>
              <p>90天</p>
            </td>
          </tr>
          <tr>
            <td className={styles.tg0pky}>
              <p>場地使用</p>
            </td>
            <td className={styles.tg0pky} colSpan="2">
              <p>09:00 - 23:00 <br/>不限時間 免費使用</p>
            </td>
          </tr>
          <tr>
            <td className={styles.tg0lax} rowSpan="2">
              <p>
                會員專屬
                <br />
                免費活動
              </p>
            </td>
            <td className={styles.tg0lax} colSpan="2">
              <p>會員之夜</p>
            </td>
          </tr>
          <tr>
            <td className={styles.tg0lax} colSpan="2">
              <p>團體課程</p>
            </td>
          </tr>
          <tr>
            <td className={styles.tg0lax} rowSpan="2">
              <p>
                VIP
                <br />
                好禮二選一
              </p>
            </td>
            <td className={styles.tg0lax} colSpan="2">
              <p>弓箭租借免費</p>
            </td>
          </tr>
          <tr>
            <td className={styles.tg0lax} colSpan="2">
              <p>個人弓櫃</p>
            </td>
          </tr>
          <tr>
            <td className={`${styles.tg0lax} ${styles.gray}`} colSpan="3">
              <h2>加購優惠</h2>
            </td>
          </tr>
          <tr>
            <td className={`${styles.tg0lax} ${styles.gray}`}>
              <p>個人教練課(1小時) 原價$2200</p>
            </td>
            <td className={`${styles.tg0lax} ${styles.gray}`} colSpan="2">
              <p>VIP首購$500</p>
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.warning}>
        <p>*使用須知:以第一次使用當天開始起算，並以連續天數計算至30／90天截止，在會期內不限時間，不限次數免費使用場地與租借弓箭器材。本優惠限本人使用，不得轉售、轉讓他人。如因活動封館、企業包場、修整、自然天災……等非消費者個人因素，致使無法使用場館，將由系統自動延展等同效期；當月場館封館時數累積達4小時，即自動順延一日。</p>
        <p>*退費須知:本優惠方案為訂閱制，無法退費。</p>
      </div>
    </div>
  );
};

export default Viptable;
