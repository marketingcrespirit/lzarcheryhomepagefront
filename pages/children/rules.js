import React from "react";

const Rules = () => {
  return (
    <section className="rules-wrapper">
      <h1 className="center">退費須知</h1>
       
      <div className="rules">
        <h2>使用期限 </h2>
        <ul>
          <li>4堂課：以第一次使用當天開始起算，並以連續天數計算90天截止。</li>
          <li>25堂課：以第一次使用當天開始起算，並以連續天數計算365天截止。</li>
        </ul>
      </div>
      <div className="rules">
        <h2>退費期限</h2>
        <ul>
          <li>於方案截止日後，90天內辦理退費。</li>
          <li>（如超過期限需額外收取手續費300元）</li>
        </ul>
      </div>
      <div className="documents">
        <h2>退費前需準備文件：</h2>
        <ul>
          <li>課程繳費證明（電子發票）</li>
          <li>與刷卡人同名的銀行存摺。（上頭需有銀行名、分行名、戶名與帳號）</li>
        </ul>
      </div>
      <div className="process">
        <h2>退費計算方式</h2>
        <ul>
          <li>退票金額 ＝ （購買時支付的價錢）－（已使用次數X單堂售價）－（退費手續費50元），如不敷扣除者不予退費。</li>
          <li>例: 一次購買25堂課，於課程期間上課8次，於使用期限到達時，尚餘15次課程未使用。</li>
          <li>計算方式：18800-(8*1000)-50=10750元。</li>
        </ul>
      </div>
    </section>
  );
};

export default Rules;
