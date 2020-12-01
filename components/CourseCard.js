import React from "react";
import styles from "./coursecard.module.css";
import Nextpage from "./Nextpage";
import ThemeCard from "./Themecard";
import utilStyles from '../styles/utils.module.css'

export default function CourseCard() {
  const theme = [
    { themeTitle: "一、基礎技術指導", themeContent: "射姿教學、基本安全、器材養護、箭離手、拉距系統、開滿弓、錨點位置、瞄準概論、延伸（力量的一致）、放箭穩定（動作的一致）" },
    { themeTitle: "二、基礎體能訓練", themeContent: "教導正確呼吸法、開啟背部肌群，訓練學員大腦、肌肉與神經的串聯，加強大腦詮釋動作的能力。" },
    { themeTitle: "三、生涯輔導", themeContent: "依照生涯期望，輔助規劃階段性目標，協助培訓、比賽，接軌國際。" },
    { themeTitle: "四、訓練自主", themeContent: "長期射箭能建立強大的心理素質，學員的抗壓性與同理心將遠勝同齡的孩子。" },
  ];
  return (
    <div className={styles.courseWrapper}>
      <div className={utilStyles.videoWrapper}>
        <div className={utilStyles.videoContainer}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/aaSmgiw6s-A" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
      <section className={styles.themeWrapper}>
        <div className="">
          <article className={styles.themeTxt}>
            <h2>課程特色</h2>
            <ul>
              {theme.map((el, index) => {
                return <ThemeCard key={index} themeTitle={el.themeTitle} themeContent={el.themeContent} />;
              })}
            </ul>
          </article>

          <div className={styles.themeImg}>
            <img src="/assets/images/course01.jpg" alt="" />
            <img src="/assets/images/course02.jpg" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className={styles.contentTxt}>
            <div className={styles.title}>
              <h2>課程簡介</h2>
            </div>
            <div >
              <div className="column">
                <p>開課時間：每週五18:30-20:30 </p>
              </div>
              <div className="column">
                <p>課程時數：90分鐘正課+30分鐘教練指導彈性練習</p>
              </div>
            </div>
            <div>
              <div className={styles.title}>
                <h2>課程費用</h2>
                <table className={styles.tg}>
                  <thead>
                    <tr>
                      <th className={`${styles.tg0pky} ${styles.blue}`}>方案</th>
                      <th className={`${styles.tg0pky} ${styles.blue}`}>
                        月繳<br/>
                        四堂(92折)
                      </th>
                      <th className={`${styles.tg0pky} ${styles.blue}`}>
                       半年繳<br/>
                       二十五堂(75折)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.tg0pky}>單堂</td>
                      <td className={styles.tg0pky}>
                        <span> $920</span>
                      </td>
                      <td className={styles.tg0pky}>
                        <span> $752</span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tg0pky}>總金額</td>
                      <td className={styles.tg0pky}>
                        <span> $3,680</span>
                      </td>
                      <td className={styles.tg0pky}>
                        <span> $18,800</span>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.tg0pky} colSpan="3">
                        <div>*課程原價費用$1000/堂 另有體驗課優惠</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.linkWrapper}>
        <Nextpage src="/assets/icons/white_arrow_right.png" target="_blank" href="/children/course" content="立即前往  活動頁面" />
      </div>
    </div>
  );
}
