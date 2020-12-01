import React from "react";

const Ad = props => {
  return (
    <section className="ad-wrapper">
      <div className="ad-title-wrapper">
        <div className="ad-title">
          <div className="ad-title-txt mobile"><h1>看見孩子<br/>最好的一面</h1></div>
          <div className="ad-title-txt desktop"><h1>看見孩子最好的一面</h1></div>
        </div>
      </div>

      <div className="ad-content desktop">
        <div className="fixed-width">
          <div className="ad-content-txt">
            <p>射箭 - </p>
            <p>幫助孩子培養</p>
            <p>肌力，強化專注力，增加自信心</p>
            <p>遠離3C，擁有好體力、專注力，</p>
            <p>提升學習戰鬥力！</p>
          </div>
          <div className="ad-content-img">
            <img loading="lazy" src="/assets/spa/images/kids.png" alt="kids" />
            <div className="deco-1">
              <img src="/assets/spa/images/deco_1.png" alt="flower" />
            </div>
            <div className="deco-2">
              <img src="/assets/spa/images/deco_1.png" alt="flower" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ad;
