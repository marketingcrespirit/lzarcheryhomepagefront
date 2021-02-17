const routes = [
  {
    path: "/",
    exact: true,
    breadcrumbName: "立禪射藝"
  },
  {
    path: "/about",
    breadcrumbName: "關於立禪"
  },
  {
    path: "/experiences",
    breadcrumbName: "體驗射箭",
    routes: [
      {
        path: "/experiences/experience",
        breadcrumbName: "現代弓體驗課"
      },
      {
        path: "/experiences/kyudo",
        breadcrumbName: "日本和弓體驗課"
      }
    ]
  },
  //{
  //  path: "/courses",
  //  breadcrumbName: "兒童課程"
  //},
  {
    path: "/members",
    breadcrumbName: "會員制度",
    routes: [
      {
        path: "/members/vip",
        breadcrumbName: "VIP會員"
      },
      {
        path: "/members/member",
        breadcrumbName: "樂活會員"
      }
    ]
  },
  {
    path: "/news",
    breadcrumbName: "最新消息",
    routes: [
      {
        path: "/news/announces",
        breadcrumbName: "場內公告"
      },
      {
        path: "/news/events",
        breadcrumbName: "優惠活動"
      },
      {
        path: "/news/partner",
        breadcrumbName: "特約廠商"
      },
      {
        path: "/news/membernight",
        breadcrumbName: "會員之夜"
      }
    ]
  },
  {
    path: "/knowledge",
    breadcrumbName: "射箭知識",
    routes: [
      {
        path: "/knowledge/video",
        breadcrumbName: "射箭影片"
      },
      {
        path: "/knowledge/blogs",
        breadcrumbName: "射箭部落格"
      }
    ]
  },
  {
    path: "/contact",
    breadcrumbName: "聯絡我們"
  }
];

export default routes;
