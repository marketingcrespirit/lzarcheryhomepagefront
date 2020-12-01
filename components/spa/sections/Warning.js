import React from "react";
import WarningCard from "../elements/Warning-card";
import Nextpage from '../../Nextpage'

const Warning = (props) => {
  return (
    <section className="warning-wrapper">
      <div id="book"></div>
      <div className="warning-slang">
        <h1>
          自信閃亮的眼神
          <br />
          從瞄準靶心那刻開始
        </h1>
      </div>

      <div className="warning-txt">
        <div className="warning-txt-title">
          <h2>【首次預約體驗兒童班課程】</h2>
          <h1>優惠價$800元</h1>
        </div>
        <WarningCard warningList={props.warning.warningList} />
      </div>

      <div className="booking-btn center">
        <Nextpage href="/children/forms" content="預約體驗" />
      </div>

      <div className="warning-img">
        <img src="/assets/spa/images/warning_end.jpg" className="desktop" alt="小孩射箭" />
      </div>
    </section>
  );
};

export default Warning;
