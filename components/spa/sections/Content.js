import React from "react";

const Content = props => {
  return (
    <section className="content-wrapper">
      <div className="fixed-width">
        <div className="content-txt">
          <div className="title desktop">
            <h1 className="padding-0">
              <span>◆</span> 課程簡介
            </h1>
          </div>

          <div className="title-m mobile">
            <h2>課程簡介</h2>
          </div>
          <div className="content-time">
            <div className="column">
              <span className="label">開課時間：</span>
              <span className="large-m">每週五18:30-20:30 </span>
            </div>
            <div className="column">
              <span className="label">課程時數：</span>
              <span className="large-m">90分鐘正課+30分鐘教練指導彈性練習</span>
            </div>
          </div>
          <div>
            <div className="content-price">
              <h2>兒童專班 課程費用</h2>
              <table className="tg">
                <thead>
                  <tr>
                    <th className="tg-0pky">方案</th>
                    <th className="tg-0pky">
                      <span className="bold"> 月繳</span>
                      <br />
                      四堂(92折)
                    </th>
                    <th className="tg-0pky">
                      <span className="bold"> 半年繳</span>
                      <br />
                      二十五堂(75折)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tg-0pky">單堂</td>
                    <td className="tg-0pky">
                      <span className="bold"> $920</span>
                    </td>
                    <td className="tg-0pky">
                      <span className="bold"> $752</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="tg-0pky">總金額</td>
                    <td className="tg-0pky">
                      <span className="bold"> $3,680</span>
                      <br />
                    </td>
                    <td className="tg-0pky">
                      <span className="bold"> $18,800</span>
                      <br />
                    </td>
                  </tr>
                  <tr>
                    <td className="tg-0pky" colSpan="3">
                      <div className="desktop">*課程原價費用$1000/堂，另有體驗課優惠</div>
                      <div className="mobile">*課程原價費用$1000/堂<br/>另有體驗課優惠</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="content-rule">
              本課程限本人使用，不得轉售、轉讓他人。學員如因事缺席，可於課程時間進行補課。
              <br />
              若遇不可抗力等原因，而無法繼續參與課程，可向立禪行政人員提出課程退費。
              <br />
              <a href="/children/rules" target="_blank">
                退費相關規定
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
