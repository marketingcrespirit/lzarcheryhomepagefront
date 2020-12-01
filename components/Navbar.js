import React, { useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/router";

const URL = "http://localhost:3000/";
const DropdownMenu = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setactive] = useState("");
  const toogleMenuHandler = () => {
    setOpen(!open);
  };
  const router = useRouter();

  const getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.breadcrumbName;
  };
  const getMenuItemHref = (menuItem, index, depthLevel) => {
    return menuItem.path;
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (active !== e.target.innerHTML) {
      setactive(e.target.innerHTML);
    } else {
      setactive("");
    }
  };

  const getMenuItem = (menuItem, depthLevel, index) => {
    let breadcrumbName = getMenuItemTitle(menuItem, index, depthLevel);
    let path = getMenuItemHref(menuItem, index, depthLevel);
    if (menuItem.routes && menuItem.routes.length > 0) {
      return (
        <li className={router.pathname.split("/")[1] && path.includes(router.pathname.split("/")[1]) ? `${styles.active} ${styles.hasChild}` : `${styles.hasChild}`} key={index}>
          <span href={path}>{breadcrumbName}</span>
          <DropdownMenu config={menuItem.routes} routes={true} />
        </li>
      );
    } else {
      return (
        <li className={router.pathname.split("/")[1] && path.includes(router.pathname.split("/")[1]) ? `${styles.active} ` : ""} key={index}>
          <a href={path}>{breadcrumbName}</a>
        </li>
      );
    }
  };

  let { config, actived } = props;

  let options = [];
  config.map((item, index) => {
    if (item.path !== "/") {
      options.push(getMenuItem(item, 0, index));
    }
    return true;
  });
  if (props.routes && props.routes === true) return <ul className={`${styles.sub}`}>{options}</ul>;

  return (
    <nav className={props.scroll ? `${styles.nav} ${styles.open}` : `${styles.nav}`}>
      <div className={`${styles.logo}`}>
        <a href="/">
          <img alt="立禪射藝商標" src="/assets/images/logo.png" />
        </a>
      </div>
      <div className="mobile">
        <img alt="立禪射藝商標" src="/assets/images/logo_word.png" />
      </div>
      <button onClick={toogleMenuHandler} href="#" className={open ? `${styles.navOpen} ${styles.navClose}` : `${styles.navOpen} `}>
        <div className={styles.inner}></div>
      </button>
      <ul className={open ? `${styles.dropdownMenu} ${styles.right}` : `${styles.dropdownMenu}`}>
        {options}
        <div className={styles.toolbar}>
          <a href="mailto:lzarchery@crespirit.com">
            <i className="far fa-envelope"></i>
          </a>
          <button onClick={props.clicked} href="/">
            {open ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default DropdownMenu;
