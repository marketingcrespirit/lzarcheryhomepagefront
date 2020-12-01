import React from "react";
import styles from "./traffic.module.css";
import Nextpage from "./Nextpage";

const Traffic = () => {
  return (
    <div className={styles.trafficWrapper}>
      <div className={styles.trafficContainer}>
        <div className={styles.trafficWrapperInfo}>
          <div className={styles.trafficWrapperList}>
            <dt>射箭場地址</dt>
            <dd>新竹縣竹北市復興一街251號3F-7<a target="_blank" href="https://www.google.com/maps/place/302%E6%96%B0%E7%AB%B9%E7%B8%A3%E7%AB%B9%E5%8C%97%E5%B8%82%E5%BE%A9%E8%88%88%E4%B8%80%E8%A1%97251%E8%99%9F3%E8%99%9F%E7%AB%8B%E7%A6%AA%E5%B0%84%E8%97%9D+-+%E5%B0%84%E7%AE%AD%E5%A0%B4%E9%A4%A8+%7C+%E8%AA%B2%E7%A8%8B%E6%95%99%E5%AD%B8+%7C+%E5%BC%93%E7%AE%AD%E5%99%A8%E6%9D%90%E8%B2%A9%E5%94%AE%E7%B6%AD%E4%BF%AE%E6%A8%93%E4%B9%8B7%E8%99%9F/@24.8118143,121.0351856,15z/data=!4m2!3m1!1s0x3468378cc9028fa1:0x32c22144b9abb378"><i className="fas fa-map-marker-alt"></i></a></dd>
            <dt>營業時間</dt>
            <dd>[平日/假日]09:00-23:00</dd>
            <dt>聯絡電話</dt>
            <dd>03-6577681</dd>
            <dt>電子信箱</dt>
            <dd>lzarchery@crespirit.com</dd>
          </div>
          <div className={styles.trafficWrapperTxt}>
            <p>由於豐邑京站出入口多，以下提供路線指引參考。</p>
            <p>1.步行：請由「嘉豐九路」旁的入口進入大樓。</p>
            <p>2. 汽機車：汽機車可停放至嘉豐九路旁的高鐵特區停車場，於同側入口進入大樓。</p>
          </div>
          <Nextpage src="/assets/icons/white_arrow_right.png" href="https://www.youtube.com/watch?v=QPzWZI1z_6k" content="高鐵→立禪 導覽影片" />
        </div>
        <div className={styles.iframeRwd}>
          <iframe title="google地圖" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.3805053188813!2d121.03463842923597!3d24.81181551631355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468378cc9028fa1%3A0x32c22144b9abb378!2z56uL56aq5bCE6JedIC0g5bCE566t5aC06aSoIHwg6Kqy56iL5pWZ5a24IHwg5byT566t5Zmo5p2Q6LKp5ZSu57at5L-u!5e0!3m2!1szh-TW!2stw!4v1600050941808!5m2!1szh-TW!2stw" width="600" height="480" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Traffic;
