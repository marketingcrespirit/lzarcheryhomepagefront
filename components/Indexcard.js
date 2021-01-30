import React, { useState } from "react";
import Link from "next/link";
import Date from "../components/date";
import Pagination from "@material-ui/lab/Pagination";
import styles from "./indexcard.module.css";
import utilStyles from "../styles/utils.module.css";
import TitleTag from "./TitleTag";

const perPage = 3;

export default function Indexcard(allPostsData) {
  const [page, setPage] = useState(1);
  const handleChange = (index, value) => {
    setPage(value);
  };
  let items = [];
  for (let i = (page - 1) * perPage; i < page * perPage; i++) {
    if (allPostsData[i]) {
      items.push(allPostsData[i]);
    }
  }
  return (
    <div>
      <div className={styles.videoWrapper}>
        <video src="/assets/videos/banner.mp4" preload="auto" autoPlay muted loop />
      </div>

      <div className={styles.videoWrapperMobile}>
        <TitleTag title="立禪射藝" display="" home bgNumber={8} />
      </div>

      <div className={styles.txtWrapper}>
        <div className={styles.txtHead}>
          <img src="/assets/icons/arrow_black.png" /> <h1>射箭界的遊戲專家——立禪射藝</h1>
        </div>
        <div className={styles.txtBody}>
          <p>立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。我們設計了「系統化」的射箭體驗課程，採小班制教學，為初學者提供最完整的射箭服務體驗。並將電玩的概念融入到其中，以更親切的方式推廣傳統弓，一起在遊戲中學習正確的射箭知識，一步步點亮射箭的技能樹吧！</p>
        </div>
      </div>
    </div>
  );
}
