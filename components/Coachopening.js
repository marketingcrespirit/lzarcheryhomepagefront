import React from "react";
import styles from "./coachopening.module.css";
const Coachopening = () => {
  return (
    <div className={styles.coachOpening}>
      <div className={styles.coachOpeningHead}>
        <h1>射箭在台灣大有可為</h1>
        <h1>我們想讓大家知道這一點</h1>
      </div>
      <div className={styles.coachOpeningBody}>
        <div className={styles.coachOpeningBodyPara}>
          <p>台灣鄰近國家，近年都在發展射箭運動，</p>
          <p>但台灣始終停在校園與奧運體系，</p>
          <p>少有提供大眾瞭解這項運動的管道。</p>
        </div>
        <div className={styles.coachOpeningBodyPara}>
          <p>射箭運動，需要的基礎才能向上發展。</p>
          <p>透過體驗課程，讓更多人感受射箭運動的魅力。</p>
        </div>
        <div className={styles.coachOpeningBodyPara}>
          <p>有了好的土壤，射箭運動才能持續發展，</p>
          <p>幫助基層的選手有更多的資源與機會，在世界的舞台上一展長才。</p>
        </div>
        <h4>立禪射藝，陪伴台灣的射箭運動，不遺餘力。</h4>
      </div>
    </div>
  );
};

export default Coachopening;
