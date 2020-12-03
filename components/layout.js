import Head from "next/head";
import styles from "./layout.module.css";
import { matchRoutes } from "react-router-config";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import routes from "../routes";
import Footer from "../components/Footer";
import TitleTag from "../components/TitleTag";
import Side from "../components/Side";

export const siteTitle = "立禪射藝｜新竹室內射箭場";

const company_info = {
  name: "立禪射藝",
  address: "新竹縣竹北市復興一街251號3F-7\n(近嘉豐九路停車場)",
  time: "[平日/假日]09:00-23:00",
  email: "lzarchery@crespirit.com",
  tel: "03-6577681",
};

const companyName_eng = "L.z Archery";

export default function Layout({ titled, children, locationPath, onMatchedRoutes, home, background, bgNumber }) {
  const [show, setShow] = useState(true);
  const [scroll, setScroll] = useState(false);
  const clickHandler = () => {
    setShow(!show);
  };
  let matchedRoutes = matchRoutes(routes, locationPath);
  let title;
  if (typeof onMatchedRoutes === "function") {
    matchedRoutes = onMatchedRoutes(matchedRoutes);
    matchedRoutes.map((matchRoute) => {
      const { path, breadcrumbName } = matchRoute.route;
      if (path === locationPath) {
        title = breadcrumbName;
      }
    });
  }
  const handleScroll = (e) => {
    const winScroll = document.documentElement.scrollTop + window.innerHeight;
    if (winScroll > 0 && winScroll < 1200) {
      setScroll(false);
    } else if (winScroll > 1200) {
      setScroll(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <Head>
        <meta property="og:image" content="/static/og.png" />
        <meta property="og:image" content="縮圖圖片連結" />
        <meta name="og:title" content={siteTitle} />
        <meta name="keywords" content="運動,健身,射箭,射箭場,弓箭" />
        <link rel="icon" type="image/png" href="/static/favicon.ico" sizes="16x16" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/fb04d5eb8e.js" crossOrigin="anonymous"></script>
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.headWrapper}>
        <div id="fb-root"></div>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v8.0&appId=314956226529799&autoLogAppEvents=1" nonce="trQxN31E"></script>
        <h1 className={styles.hidden}>立禪射藝｜新竹室內射箭場</h1>
        <div vocab="http://schema.org/" typeof="Organization" className={styles.hidden}>
          <h1 property="name">立禪射藝（新竹射箭場）</h1>
          <h1 property="address">射箭場地址：新竹縣竹北市復興一街251號3F</h1>
          <h1 property="teleplone">聯絡電話：03-6577681</h1>
          <h1 property="email">lzarchery@crespirit.com</h1>
          <h1 property="areaServed">台灣北部、台灣中部、台灣南部</h1>
        </div>
        <Navbar config={routes} clicked={clickHandler} scroll={scroll}></Navbar>
      </div>
      <Side active={show} />
      <div className={home ? `${styles.hide}` : ""}>
        <TitleTag title={titled || title} bgNumber={bgNumber} />
      </div>
      <div className={background ? `${styles.containerOne}` : `${styles.containerTwo}`}>
        <main>{children}</main>
      </div>
      <Footer config={routes} company_info={company_info} companyName_eng={companyName_eng} />
    </>
  );
}
