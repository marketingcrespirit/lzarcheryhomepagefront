import React from "react";
import TitleTag from "../components/TitleTag";
import styles from "./experience.module.css";

export default function Experience() {
  const blockOne = ["開弓時，用力的同時要放鬆。", "推弓時，舉起弓但不握弓。", "每次拉弓手要靠在同樣的位置。", "太執著於「瞄準中心」。"];
  const blockTwo = ["安全知識與器材養護。", "弓箭通識、歷史故事。", "基礎通用射姿。", "基礎開弓與放箭手法。", "學習靠位與身體穩定。"];
  return (
    <div className={styles.experienceWrapper}>
      <div className={styles.experienceHead}>
        <h1>{`生活在台灣\n你應該認識射箭`}</h1>
        <p>台灣射箭成績雖享譽國際，但因為射箭的門檻較高，一般人對射箭還是很陌生。</p>
        <p>因此我們設計出一套適合初學者的系統，希望讓更多人，認識這項台灣之光。</p>
      </div>
      <div className={styles.videoWrapper}>
        <div className={styles.videoContainer}>
          <iframe src="https://www.youtube.com/embed/KGBsORIQbdo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <div className={styles.videoTxt}>
        <div className={styles.videoTxtUnit}>
          <h2>【射箭裡的難關】</h2>
          <ul>
            {blockOne.map((el, i) => {
              return <li key={i}>{`● ${el}`}</li>;
            })}
          </ul>
        </div>

        <div className={styles.videoTxtUnit}>
          <h2>【技能條】</h2>
          <ul>
            {blockTwo.map((el, i) => {
              return <li key={i}>{`● ${el}`}</li>;
            })}
          </ul>
        </div>
      </div>
      <TitleTag title="方案說明" bgNumber={5} />

      <div className={styles.tables} >
        <table className={styles.tg}>
          <thead>
            <tr>
              <th className={`${styles.tgC3ow} ${styles.dark}`} colSpan="2">
                新手推薦
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.left}`}>體驗課程(兩小時)</td>
              <td className={styles.tgC3ow}>
                $1,000/人
                <br />
                (兩人以上享八折優惠)
              </td>
            </tr>
          </tbody>
        </table>
        <table className={styles.tg}>
          <tbody>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.dark}`} colSpan="2">
                服務項目
              </td>
            </tr>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.left}`}>個人弓櫃(1個月)</td>
              <td className={styles.tgBaqh}>$1,200</td>
            </tr>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.left}`}>場地使用(1小時)</td>
              <td className={styles.tgBaqh}>$350</td>
            </tr>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.left}`}>租用器材(弓+箭)</td>
              <td className={styles.tgBaqh}>$250</td>
            </tr>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.left}`}>單日暢遊</td>
              <td className={styles.tgBaqh}>$1,000</td>
            </tr>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.left}`}>加購氣球靶(六顆)</td>
              <td className={styles.tgBaqh}>$100</td>
            </tr>
            <tr>
              <td className={`${styles.tgC3ow} ${styles.left}`}>個人教練課(1小時)</td>
              <td className={styles.tgBaqh}>$2,200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.experienceTxt}>
        <ul>
          <li>以上為常態價目表，另有會員方案、企業包場、短期活動...等優惠，請洽立禪射藝服務人員</li>
          <li>立禪射藝保留全部有關於價格及計費方式的修改、說明、解釋的所有權利。</li>
        </ul>
      </div>
    </div>
  );
}
