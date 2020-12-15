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
        <p>在2020的尾端，來立禪紀錄下最美好的自己。 </p>
        <p>（課後提供簡易式和服體驗與茶點時間，歡迎與好友同行體驗。）</p>
      </div>

      <TitleTag title="課程內容" bgNumber={10} />
      <div className={styles.bodyWrapper}>
        <div className={styles.bodyTitle}>
          <div className={styles.bodyTitleTxt}>
            <h2>12/27(日) 早上場 下午場 晚場</h2>
            <h2>日本弓道文化 射法八節體驗</h2>
          </div>
          <div>
            <div>
              <div className={styles.subtitle}>
                <p>初探弓道</p>
              </div>
              <p>在這一堂體驗課裡，將由講師一步步引領你進入日本弓道藝術的世界從基礎的知識背景建構開始，到學習一個「弓道人」進入道場後，會進行的各種禮節與儀式。</p>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.subtitle}>
            <p>課程內容</p>
          </div>
          <div className={styles.classContent}>
            <div className={styles.classContentLeft}>
              <p>1.測量矢束</p>
              <p>2.日本道場 行禮緣由</p>
              <p>3.卷藁射禮</p>
              <p>4.弓道簡史與精神</p>
              <p>5.和弓裝備介紹與原理說明</p>
            </div>
            <div className={styles.classContentRight}>
              <p>6.射法介紹 射法八節</p>
              <p>7.行射體驗：近距離一箭</p>
              <p>8.行射體驗：15米大靶行射</p>
              <p>9.結束儀式、收拾弓具</p>
              <p>10.茶點/簡易式和服體驗 交流時間</p>
            </div>
          </div>
        </div>

        <div className={styles.tables}>
          <table className={styles.tg}>
            <tbody>
              <tr>
                <td className={`${styles.tgC3ow} ${styles.dark}`} colSpan="2">
                  課程資訊
                </td>
              </tr>
              <tr>
                <td className={`${styles.tgC3ow} ${styles.left}`}>費用</td>
                <td className={styles.tgBaqh}>單人$1,600（兩人同行85折）</td>
              </tr>
              <tr>
                <td className={`${styles.tgC3ow} ${styles.left}`}>課程時間</td>
                <td className={styles.tgBaqh}>2.5小時</td>
              </tr>
              <tr>
                <td className={`${styles.tgC3ow} ${styles.left}`}>人數限制</td>
                <td className={styles.tgBaqh}>至多15人</td>
              </tr>
              <tr>
                <td className={`${styles.tgC3ow} ${styles.left}`}>場次</td>
                <td className={styles.tgBaqh}>{`早場09:30-12:00 \n  午場14:30-17:00  \n 晚場18:30-21:00`}</td>
              </tr>
              <tr>
                <td className={`${styles.tgC3ow} ${styles.left}`}>地點</td>
                <td className={styles.tgBaqh}>立禪射藝（新竹縣竹北市復興一街251號3F-7）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className={styles.subtitle}>
            <p>師資介紹</p>
          </div>
          <div className={styles.teacherWrapper}>
            <div className={styles.teacherImgWrapper}>
              <img src="/assets/images/teacher.jpg" />
            </div>
            <div className={styles.teacherTxtWrapper}>
              <div className={styles.teacherHeadWrapper}>
                <h2>
                  談献華
                  <span>
                    <small>{`  老師`}</small>
                  </span>
                </h2>
                <h2>全日本弓道連盟五段</h2>
              </div>

              <div className={styles.teacherContentWrapper}>
                <p>前台灣弓道協會理事長，任內帶領台灣代表隊以監督兼選手身份，取得2018第三屆世界弓道大會第二名。</p>
                <p>國際講習會、活動經歷豐富，也曾在2015香港弓道親善交流射會中以最高中靶率取得優勝。</p>
                <p>理事長期間推薦南非弓道連盟、香港弓道協會加入國際弓道連盟，積極參與國際弓道發展，曾任台灣弓道協會、教學長、活動長、常務理、監事歷練完整。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TitleTag title="課前須知" bgNumber={11} />
      <div className={styles.bottomWrapper}>
        <div className={styles.subtitle}>
          <p>課前須知</p>
        </div>
        <ol>
          <li>服裝請著上白下黑。 </li>
          <li>體驗課前請將手鍊、手錶、耳環等飾品取下，長髮者需將頭髮束起。 </li>
          <li>體驗課期間需脫鞋上課，場內提供一次性白色襪子。 </li>
          <li>體驗課期間，場內提供公用之弓、矢與專用手套等用具。 </li>
          <li>進入場內請遵循教練指示，拔箭同進退、勿放空弦。</li>
          <li>此課程僅專注於讓學員體驗弓道文化之美，課程後若有興趣深入瞭解，將再視需求為您安排進階的課程與規劃。</li>
        </ol>
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
