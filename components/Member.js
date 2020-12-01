import React from "react";
import styles from "./member.module.css";
const Member = () => {
  return (
    <div className={styles.memberWrapper}>
      <div className={`${styles.memberLower} ${styles.mobile}`}>
        <table className={styles.tg}>
          <thead>
            <tr>
              <td className={`${styles.tg9wq8} ${styles.blueFont} `} colspan="2">
              使用<span>期限</span>90天
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.tg9wq8} ${styles.blue}`}>
                <span>2880<br/>樂活方案</span>
              </td>
              <td className={styles.tg9wq8}>
                <span>場地使用：10小時</span>
                <br />
                <span>(以小時為單位使用)</span>
              </td>
            </tr>
            <tr>
              <td className={`${styles.tg9wq8} ${styles.blue}`}>
                <span>套餐升級$400元</span>
              </td>
              <td className={styles.tg9wq8}>
                <span>10小時不限次數</span>
                <br />
                <span>器材免費租借</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={`${styles.memberLower} ${styles.desktop}`}>
        <table className={styles.tg}>
          <thead>
            <tr>
              <th className={`${styles.tgc3ow} ${styles.blueFont}`} rowspan="2">
                <h1>
                  使用期限
                  <br />
                  90天
                </h1>
              </th>
              <th className={`${styles.tgc3ow} ${styles.blue}`}>
                <h2>2880樂活方案</h2>
              </th>
              <th className={`${styles.tgc3ow} ${styles.blue}`}>
                <h2>套餐升級$400元</h2>
              </th>
            </tr>
            <tr>
              <td className={styles.tgc3ow}>
                <h2>場地使用：10小時</h2>

                <p>（以小時為單位使用）</p>
              </td>
              <td className={styles.tgc3ow}>
                <h2>
                  10小時不限次數
                  <br />
                  器材免費租借
                </h2>
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <div className={styles.memberUpper}>
        <img src="/assets/images/member.jpg" />
        <div className={styles.memberUpperText}>
          <p>*使用須知:以第一次使用當天開始起算，並以連續天數計算90天截止本優惠限本人使用不得轉售、轉讓他人。</p>
          <p>*如因活動封館、企業包場、修整、自然天災……等非消費者個人因素，致使無法使用場館，將由系統自動延展等同效期；當月場館封館時數累積達4小時，即自動順延一日。</p>
          <p>*退費須知:本優惠方案為訂閱制，無法退費。</p>
        </div>
      </div>
    </div>
  );
};

export default Member;
