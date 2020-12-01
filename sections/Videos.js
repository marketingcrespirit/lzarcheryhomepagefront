import React from "react";
import styles from "./videos.module.css";

const Videos = () => {
  return (
    <div className={styles.videos}>
      <div className={styles.video}>
        <h2>場館特色介紹</h2>
        <p>立禪射藝為符合「國際賽標準」的全室內射箭場。</p><p>寬闊合法的場地，以及專業的教練，</p><p>讓新手可以安心學習與體驗訓練設施，</p><p>也能滿足資深玩家的練習需求。</p>
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe src="https://www.youtube.com/embed/m1FFBSOF6hg" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <div className={styles.video}>
        <h2>體驗課玩什麼？</h2>
        <p>「沒有接觸過也能射箭嗎？」是許多人心中的疑問。</p><p>未知的事物容易讓人感到緊張…但在立禪，</p><p>會有專業教練一步步帶著你前進，</p><p>從基礎射箭姿勢、瞄準概論、歷史典故一直到互動遊戲，</p><p>我們誠摯邀請沒接觸過射箭的您，</p><p>一同體驗這項運動的美好！</p>
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe src="https://www.youtube.com/embed/KGBsORIQbdo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>

      <div className={styles.video}>
        <h2>射箭運動 在地紮根</h2>
        <p>新竹——被稱為射箭國手搖籃，有許多優秀的選手與教練皆發跡於此。</p><p>三民國中也跟上腳步，即使是最吃力不討好的基層培育工作，</p><p>仍然用心栽培這群願意早出晚歸的小選手們。</p>
        <div className={styles.videoWrapper}>
          <div className={styles.videoContainer}>
            <iframe src="https://www.youtube.com/embed/yGQQlHDLaaM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
