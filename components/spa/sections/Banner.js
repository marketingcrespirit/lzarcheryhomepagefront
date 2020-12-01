import React from "react";

const Banner = props => {
  return (
    <div className="banner">
      <div className="fixed-width flex-end">
        <div className="banner-txt dektop">
          <h1>立禪射藝</h1>
          <div className="banner-txt-sub">
            <h2>競技反曲弓兒童專班</h2>
          </div>
        </div>
      </div>
      <div className="img-wrapper">
        <img className="img-wrapper-m mobile" src="/assets/spa/images/banner_m.jpg" alt="兒童射箭班"/>
        <div className="banner-txt-m mobile">
          <h2>競技反曲弓</h2>
          <h1>兒童射箭專班</h1>
          <img src="/assets/spa/images/kids_m.png" alt="兒童射箭班"/>
          <p>素養導向、五力養成</p>
          <p>好體力、專注力，提升學習戰鬥力！</p>
          </div>
        <video autoPlay loop muted src="/assets/spa/video/banner.mp4" title="新竹地區兒童射箭班"></video>
      </div>
    </div>
  );
};

export default Banner;
