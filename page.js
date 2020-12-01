// /src/pages.js

import React from "react";
import { renderRoutes } from "react-router-config";
import Breadcrumb from "./components/Breadcrumb";
import Blogs from "./sections/Blogs";
import Videos from "./sections/Videos";

/**
 * These are root pages
 */
const Home = () => {
  return <h1 className="py-3">首頁</h1>;
};

const About = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      <h1 className="py-3">關於立禪</h1>

      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};

const Experience = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      <h1 className="py-3">體驗射箭</h1>
      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};

const Courses = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      <h1 className="py-3">精緻課程</h1>
      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};

const Members = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      <h1 className="py-3">會員制度</h1>
      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};
const News = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      <h1 className="py-3">最新消息</h1>
      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};

const Knowledge = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};

const Contact = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      <h1 className="py-3">聯絡我們</h1>
      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};

const Traffic = ({ route, location }) => {
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };

  return (
    <div>
      <h1 className="py-3">交通資訊</h1>
      {/* Pass onMatchedRoutes function as props here */}
      <Breadcrumb locationPath={location.pathname} onMatchedRoutes={onMatchedRoutes} />

      {renderRoutes(route.routes)}
    </div>
  );
};

/**
 * These are pages nested in Electronics
 */
const History = () => {
  return <h3>品牌緣起</h3>;
};

const Intro = () => {
  return <h3>立禪簡介</h3>;
};

const Coach = () => {
  return <h3>師資介紹</h3>;
};

const Course = () => {
  return <h3>體驗課程</h3>;
};

const Why = () => {
  return <h3>為何選擇立禪</h3>;
};

const Fee = () => {
  return <h3>收費方式</h3>;
};

const Kid = () => {
  return <h3>兒童課程</h3>;
};

const PersonalTrainer = () => {
  return <h3>私人教練</h3>;
};

const Special = () => {
  return <h3>特色體驗</h3>;
};

const Vip = () => {
  return <h3>VIP會員</h3>;
};

const Member = () => {
  return <h3>樂活會員</h3>;
};

const MemberNight = () => {
  return <h3>會員之夜</h3>;
};

const Announce = () => {
  return <h3>場內公告</h3>;
};

const Event = () => {
  return <h3>優惠活動</h3>;
};

const Enterprise = () => {
  return <h3>企業方案</h3>;
};

const Partner = () => {
  return <h3>特約商店</h3>;
};

const Video = () => {
  return <Videos />;
};

const Blog = () => {
  return <Blogs />;
};

const Info = () => {
  return <h3>聯絡資訊</h3>;
};

const Form = () => {
  return <h3>服務表單</h3>;
};

const TrafficGraph = () => {
  return <h3>交通圖表</h3>;
};

const TrafficVideo = () => {
  return <h3>交通影片</h3>;
};

export { Home, About, Experience, Courses, Members, News, Knowledge, Contact, Traffic, History, Intro, Coach, Course, Why, Fee, Kid, PersonalTrainer, Special, Vip, Member, MemberNight, Announce, Event, Enterprise, Partner, Video, Blog, Info, Form, TrafficGraph, TrafficVideo };
