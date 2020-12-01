import React, { Component } from "react";
import Navbar from "../components/Navbar";
import styles from "./Footer.module.css";

class Footer extends Component {
  getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.breadcrumbName;
  };
  getMenuItemHref = (menuItem, index, depthLevel) => {
    return menuItem.path;
  };

  getMenuItem = (menuItem, depthLevel, index) => {
    let breadcrumbName = this.getMenuItemTitle(menuItem, index, depthLevel);
    let path = this.getMenuItemHref(menuItem, index, depthLevel);

    if (menuItem.routes && menuItem.routes.length > 0) {
      return (
        <li key={index} onClick={this.clickHandler}>
          <span className="title">{breadcrumbName}</span>
          <Navbar config={menuItem.routes} routes={true} />
        </li>
      );
    } else {
      return (
        <li className="animate__animated" key={index}>
          <a href={path}>{breadcrumbName}</a>
        </li>
      );
    }
  };
  render() {
    let { config } = this.props;

    let options = [];
    config.map((item, index) => {
      if (item.path !== "/") {
        options.push(this.getMenuItem(item, 0, index));
      }
      return true;
    });

    if (this.props.routes && this.props.routes === true) return <ul className="sub">{options}</ul>;
    return (
      <footer className={styles.footer}>
        <div className={styles.footerInfo}>
          <img src="/assets/images/logo_white.png" />
          <div className={`${styles.navSocial}`}>
            <div className={`${styles.navSocialIcon}`}>
              <a target="_blank" href="https://www.facebook.com/LZarchery">
                <img src="/assets/icons/facebook.svg" />
              </a>
            </div>

            <div className={`${styles.navSocialIcon}`}>
              <a target="_blank" href="https://www.youtube.com/channel/UCg-r8FmBLfEfIE-kaB6-Ecg">
                <img src="/assets/icons/youtube.svg" />
              </a>
            </div>

            <div className={`${styles.navSocialIcon}`}>
              <a target="_blank" href="https://www.plurk.com/LZarchery">
                <img src="/assets/icons/plurk.png" />
              </a>
            </div>

            <div className={`${styles.navSocialIcon}`}>
              <a target="_blank" href="https://discord.com/channels/774104354479013918/774108627895975996">
                <img src="/assets/icons/discord.png" />
              </a>
            </div> 
          </div>
          <p>射箭場地址：{this.props.company_info.address}</p>
          <p>營業時間：{this.props.company_info.time}</p>
          <p>聯絡電話：{this.props.company_info.tel}</p>
        </div>
        <div className={`${styles.footerCopyright}`}>
          <p className={`${styles.footerCopy}`}>
            Copyright
            <span dangerouslySetInnerHTML={{ __html: " &copy; " }} />
            2015 - {new Date().getFullYear()} {this.props.companyName_eng}
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
