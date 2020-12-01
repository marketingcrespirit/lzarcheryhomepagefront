import React from "react";

const Equipment = (props) => {
  return (
    <section className="equipment-wrapper">
      <div className="title equipment-title-bg desktop">
        <h1 className="white">
          <span>◆</span> 使用器材
        </h1>
      </div>

      <div className="title-m-w mobile white">
        <h2 className="white">使用器材</h2>
      </div>

      <div className="equipment-card">
        <div className="equipment-txt fixed-width-equipment">
          <h1>教學級競技反曲弓套組</h1>
          <h2>本套組市價$8000元，場內保固半年</h2>

          <div className="equipment-img-wrapper">
            <img className="equipment-img img_1" src="/assets/spa/images/equipment_1.png" alt="equipment" />
          </div>

          <h1 id="discount">
            課程加購價格 <span>$5000</span>
          </h1>

          <div className="withbg">
            <div className="equipment-img-wrapper ">
              <img className="equipment-img img_2" src="/assets/spa/images/equipment_2.png" alt="equipment" />
            </div>
            <p>
              （含瞄準器、中央安定桿、護胸、護臂、弓包、箭筒、弓架）
              <br />
              為奧林匹克運動會（Olympic Games）射箭競賽項目使用的弓種
            </p>

            <div className="equipment-logo">
              <img src="/assets/spa/images/jando_logo.png" alt="equipment logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
