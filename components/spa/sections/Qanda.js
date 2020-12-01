import React from "react";

const QandA = props => {
  return (
    <section className="qanda">
      <p className="qanda-first">{ props.info.title }</p>
      <h1 className="qanda-second">-{ props.info.subTitle }-</h1>
      <h1 className="mobile">
        <span>TEL</span> <a href="tel:03-6577681"> { props.info.tel }</a>
      </h1>
      <h1 className="desktop">
        <span>TEL</span>{ props.info.tel }
      </h1>
      <p>營業時間</p>
      <p>{ props.info.time.N }</p>
      <p>{ props.info.time.H }</p>

      <div id="map">
        <iframe title="google地圖" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d905.3805053188813!2d121.03463842923597!3d24.81181551631355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468378cc9028fa1%3A0x32c22144b9abb378!2z56uL56aq5bCE6JedIC0g5bCE566t5aC06aSoIHwg6Kqy56iL5pWZ5a24IHwg5byT566t5Zmo5p2Q6LKp5ZSu57at5L-u!5e0!3m2!1szh-TW!2stw!4v1600050941808!5m2!1szh-TW!2stw" width="600" height="450" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>

      <div className="qanda-img">
        <a href="#top">
          <img src="/assets/spa/icons/up_arrow.svg" alt="回到頂端" />
        </a>
      </div>
    </section>
  );
};

export default QandA;
