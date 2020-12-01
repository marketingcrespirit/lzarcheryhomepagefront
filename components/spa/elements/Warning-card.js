import React from "react";

const WarningCard = props => {
  return (
    <div className="warning-txt-cards">
      <div className="warning-txt-card">
        <h2>【場地須知】</h2>
        <ul>
          <li>1.入場請配合量額溫及酒精手部消毒</li>
          <li>2.請依照教練指示動作，同一靶場內拔箭需同進退</li>
        </ul>
      </div>

      <div className="warning-txt-card">
        <h2>【服裝須知】</h2>
        <ul>
          <li>髮型：為維護您的小朋友安全，頭髮過肩者一律需綁頭髮。</li>
          <li>服裝：輕便，讓肩膀與胸口可自由活動為主。</li>
          <li>鞋子：可平穩站立</li>
        </ul>
      </div>
    </div>
  );
};

export default WarningCard;
