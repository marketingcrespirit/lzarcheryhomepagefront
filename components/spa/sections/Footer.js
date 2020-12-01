import React from "react";

const Footer = props => {
  return (
    <footer>
      <div className="footer-icon">
        <img src="/assets/spa/icons/logo.png" alt="立禪射藝標誌" />
      </div>
      <div className="footer-txt">
        <p>{props.info.address}</p>
        <p>
          營業時間
          <br />
          {props.info.time}
        </p>
        <img src="/assets/spa/icons/email.png" alt="立禪射藝標誌" />
        <a href="mailto:lzarchery@crespirit.com">{props.info.email}</a>
        <p className="footer-copy">
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
          {props.info.eng}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
