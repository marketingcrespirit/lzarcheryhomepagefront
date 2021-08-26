import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useRouter } from "next/router";
import CoachCard from "../components/Coachcard";
import utilStyles from "../styles/utils.module.css";
import CoachOpening from "../components/Coachopening";

const coaches = [
  { name: "Kevin 凱文", main: "競技反曲弓、韓弓、漢弓", src: "/assets/images/employees/kevin.jpg", href: "coach/kevin" },
  { name: "Harry 哈利", main: "漢弓、明小稍、清弓", src: "/assets/images/employees/harry.jpg", href: "coach/harry" },
  { name: "Ifri 月月", main: "競技反曲弓、土耳其弓", src: "/assets/images/employees/moon.jpg", href: "coach/moon" },
  { name: "陳恩", main: "競技反曲弓、和弓、複合弓", src: "/assets/images/employees/chen.jpg", href: "coach/chen" },
];

const boss = [
  { name: "倆儀", main: "創辦人", src: "/assets/images/employees/ceo.jpg", href: "manager/ceo" },
];

export default function History() {
  const route = useRouter();
  const bosses = boss.map((el, index) => {
    return <CoachCard key={index} name={el.name} main={el.main} src={el.src} href={el.href} />;
  });
  const coachesArea = coaches.map((el, index) => {
    return <CoachCard key={index} name={el.name} main={el.main} src={el.src} href={el.href} />;
  });
  const onMatchedRoutes = (matchedRoutes) => {
    return [...matchedRoutes];
  };
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} bannerImg bgNumber={1}>
      <Head>
        <title>{`${siteTitle}`}</title>
        <meta name="description" content="立禪為台灣新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。有關品牌故事、創辦人以及專業射箭教練團隊的個人簡介" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>

      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />

      <CoachOpening className={utilStyles.coachOpening} />

      <div className={utilStyles.bossWrapper}>
        <h1>立禪射藝｜創辦人</h1>
        <div className={utilStyles.bossContainer}>{bosses}</div>
        
      </div>
      
      <div className={utilStyles.coachWrapper}>
        <h1>立禪射藝｜專業教練</h1>
        <div className={utilStyles.coachContainer}>{coachesArea}</div>
      </div>
    </Layout>
  );
}
