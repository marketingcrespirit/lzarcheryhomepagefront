import React, { Component } from "react";

import Navbars from "../../components/spa/sections/Navbars";
import Banner from "../../components/spa/sections/Banner";
import Ad from "../../components/spa/sections/Ad";
import Feature from "../../components/spa/sections/Feature";
import Theme from "../../components/spa/sections/Theme";
import Video from "../../components/spa/sections/Video";
import Equipment from "../../components/spa/sections/Equipment";
import Content from "../../components/spa/sections/Content";
import Coach from "../../components/spa/sections/Coach";
import Warning from "../../components/spa/sections/Warning";
import QandA from "../../components/spa/sections/Qanda";
import Footer from "../../components/spa/sections/Footer";
import BackToTop from "../../components/spa/elements/BackToTop";
import Head from "next/head";
import MessengerChat from '../../components/spa/elements/Chat'


const siteTitle = "立禪射藝｜新竹室內射箭場";

class Index extends Component {
  constructor(props) {
    super(props);
    this.featureRef = React.createRef();
    this.themeRef = React.createRef();
    this.coachRef = React.createRef();
    this.equipmentRef = React.createRef();
    this.contentRef = React.createRef();
  }
  state = {
    windowX: 0,
    featureTop: 0,
    themeTop: 0,
    coachTop: 0,
    equipmentTop: 0,
    contentTop: 0,
    activatedIndex: "",
    nav: {
      navTitle: "立禪射藝",
      navLists: [
        { tag: "#feature", content: "教學重點" },
        { tag: "#theme", content: "教學方向" },
        { tag: "#coach", content: "教練師資" },
        { tag: "#equipment", content: "使用器材" },
        { tag: "#content", content: "課程簡介" },
      ],
    },
    banner: {
      bannerTitle: "立禪兒童班",
      bannerContent: "好體力 /專注力 / 提升學習戰鬥力",
    },
    adPath: "../../public/assets/spa/images/kids.png",
    feature: [
      { featureTitle: "大多數的運動講求爆發性\n極少數的運動強調穩定", featureContent: "依據教育部108課綱，重點培養孩子五大能力。", featureContent_m: "依據教育部108課綱，重點培養孩子五大能力。", path: "/assets/spa/images/feature_image_01.png", path_m: ["自我探討", "溝通表達", "解決問題", "團隊合作", "同理心"] },
      { featureTitle: "適應社會，健康有力", featureContent: "精緻小班教學，依照孩子的狀況培養良好運動習慣\n與運動家精神，發展成一生受用的基礎能力。", featureContent_m: "精緻小班教學，依照孩子的狀況培養良好運動習慣與運動家精神，發展成一生受用的基礎能力。", path: "/assets/spa/images/feature_image_02.png", path_m: ["專注力", "自信心", "肌耐力", "成就感", "協調性"] },
    ],
    theme: [
      { themeTitle: "一、基礎技術指導", themeContent: "射姿教學、基本安全、器材養護、箭離手、拉距系統、開滿弓、錨點位置、瞄準概論、延伸（力量的一致）、放箭穩定（動作的一致）" },
      { themeTitle: "二、基礎體能訓練", themeContent: "教導正確呼吸法、開啟背部肌群，訓練學員大腦、肌肉與神經的串聯，加強大腦詮釋動作的能力。" },
      { themeTitle: "三、生涯輔導", themeContent: "依照生涯期望，輔助規劃階段性目標，協助培訓、比賽，接軌國際。" },
      { themeTitle: "四、訓練自主", themeContent: "長期射箭能建立強大的心理素質，學員的抗壓性與同理心將遠勝同齡的孩子。" },
    ],
    theme_01: {
      path: "/assets/spa/images/theme_01.jpg",
    },
    theme_02: {
      path: "/assets/spa/images/theme_02.jpg",
    },

    theme_m: {
      path: "/assets/spa/images/theme_m.jpg",
    },

    equipment: {
      equipmentTitle: "教學級競技反曲弓套組市價$8000元",
      equipmentContent: "（含瞄準器、中央安定桿、護胸、護臂、弓包、箭筒、弓架）為奧林匹克運動會（Olympic Games）射箭競賽項目使用的弓種。",
    },
    coach: [
      { name: "凱文教練", major: "競技反曲弓、韓弓、漢弓", intro: "在兒童、銀髮族、特殊教育等領域，有近十年的豐富教學經驗；國家Ａ級裁判證照，服務全國各大射箭賽事。對全方位的射箭領域不斷精進，積極參加相關國際賽與交流活動，並應用於活動中。", path: "/assets/spa/images/coach_01.png", path_m: "/assets/spa/images/coach_01_mobile.png" },
      { name: "哈利教練", major: "漢弓、明小稍、清弓", intro: "在國外旅遊時第一次接觸到射箭文化，看到穿著傳統服飾且非常優雅的射手，便深深為此著迷，促使我踏上成為教練的旅程。希望能讓大家更全面的認識射箭這項運動，讓我們一起進入射藝的迷人之旅吧！", path: "/assets/spa/images/coach_03.png", path_m: "/assets/spa/images/coach_03_mobile.png" },
      { name: "陳恩教練", major: "競技反曲弓、和弓、複合弓", intro: "對於所有的弓種，我都抱持著興趣，不論是現代或是傳統，運用其中技藝或技術，讓箭優美又有力的飛射在空中，再精確的上靶，是我最享受的事。你是否有興趣與我一同實踐並觀賞這觸心的畫面呢？", path: "/assets/spa/images/coach_02.png", path_m: "/assets/spa/images/coach_02_mobile.png" },
      { name: "月月教練", major: "競技反曲弓、土耳其弓", intro: "雖然箭矢飛出只是一瞬間的事情，但心緒的準備卻需要花很多時間去沉澱，這是射箭最吸引我的地方，也是讓我堅持射箭的原因。希望可以透過我的教學，讓更多人瞭解射箭相關的文化知識，一起在射箭的過程中成長吧！", path: "/assets/spa/images/coach_04.png", path_m: "/assets/spa/images/coach_04_mobile.png" },
    ],
    warning: {
      warningList: [
        {
          warningTitle: "場地須知",
          warningContent: ["1.入場請配合量額溫及酒精手部消毒", "2.請依照教練指示動作，同一靶場內拔箭需同進退"],
        },
        {
          warningTitle: "服裝須知",
          warningContent: ["髮型：為維護您的小朋友安全，頭髮過肩者一律需綁頭髮。", "服裝：輕便，讓肩膀與胸口可自由活動為主。", "鞋子：可平穩站立。"],
        },
      ],
    },
    qanda: {
      title: "若您有其他疑問，歡迎您利用服務專線，我們將有專人迅速為您服務",
      subTitle: "聯絡資訊",
      tel: "03-6577681",
      time: { N: "[平日]09:30-23:00", H: "[假日]09:30-23:00" },
      email: "lzarchery@crespirit.com",
    },
    footer: {
      name: "立禪射藝",
      address: "新竹縣竹北市復興一街251號3F-7\n(近嘉豐九路停車場)",
      time: "[平日/假日]09:00-23:00",
      email: "lzarchery@crespirit.com",
      eng: "L.Z Archery",
    },
  };
  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }

  listenToScroll = () => {
    const winScroll = document.documentElement.scrollTop + window.innerHeight;
    if (winScroll < 1000 || winScroll > this.state.contentTop + 1738 ) {
      this.setState({
        activatedIndex: 5,
      });
    } else if (winScroll > this.state.contentTop) {
      this.setState({
        activatedIndex: 4,
      });
    } else if (winScroll >= this.state.equipmentTop) {
      this.setState({
        activatedIndex: 3,
      });
    } else if (winScroll >= this.state.coachTop) {
      this.setState({
        activatedIndex: 2,
      });
    } else if (winScroll >= this.state.themeTop) {
      this.setState({
        activatedIndex: 1,
      });
    } else if (winScroll >= this.state.featureTop) {
      this.setState({
        activatedIndex: 0,
      });
    }
  };
  render() {
    if (this.featureRef.current !== null && this.state.featureTop === 0) {
      this.setState({ featureTop: this.featureRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.themeRef.current !== null && this.state.featureTop === 0) {
      this.setState({ themeTop: this.themeRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.coachRef.current !== null && this.state.featureTop === 0) {
      this.setState({ coachTop: this.coachRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.equipmentRef.current !== null && this.state.featureTop === 0) {
      this.setState({ equipmentTop: this.equipmentRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.contentRef.current !== null && this.state.featureTop === 0) {
      this.setState({ contentTop: this.contentRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    return (
      <>
        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。場館推出兒童射箭班，歡迎家長與學童一起來體驗" />
          <script src="https://kit.fontawesome.com/fb04d5eb8e.js" crossOrigin="anonymous"></script>
        </Head>
        <Navbars activatedIndex={this.state.activatedIndex} navTitle={this.state.nav.navTitle} navLists={this.state.nav.navLists} />
        <hedaer>
          <Banner bannerTitle={this.state.banner.bannerTitle} bannerContent={this.state.banner.bannerContent} />
        </hedaer>
        <main>
          <Ad path={this.state.adPath} />
          <div ref={this.featureRef} id="feature" />
          <Feature feature={this.state.feature} />
          <div ref={this.themeRef} id="theme" />
          <Theme theme={this.state.theme} theme_01={this.state.theme_01} theme_02={this.state.theme_02} theme_m={this.state.theme_m} />

          <Video path={this.state.videoPath} />
          <div ref={this.coachRef} id="coach" />
          <Coach coach={this.state.coach} windowX={this.state.windowX} />
          <div ref={this.equipmentRef} id="equipment" />
          <Equipment equipmentTitle={this.state.equipment.equipmentTitle} equipmentContent={this.state.equipment.equipmentContent} />
          <div ref={this.contentRef} id="content" />
          <Content />
          <Warning warning={this.state.warning} />
          <div id="contact" />
        </main>

        <QandA info={this.state.qanda} />
        <Footer info={this.state.footer} />
        <BackToTop />
        <MessengerChat pageId="101463381473421" ref="fb-msgr" />
      </>
    );
  }
}

export default Index;
