// import Layout, { siteTitle } from "../components/layout";
// import Head from "next/head";
// import React from "react";
// import Breadcrumb from "../components/Breadcrumb";
// import { useRouter } from "next/router";
// import CourseCard from "../components/CourseCard"

// const URI = "http://localhost:3000";

// export default function History() {
//   const route = useRouter();
//   const onMatchedRoutes = (matchedRoutes) => {
//     return [...matchedRoutes];
//   };
//   return (
//     <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} background bgNumber={3}>
//       <Head>
//         <title>{siteTitle}</title>
//         <meta name="description" content="立禪為合法、民營，符合「室內國際賽規格」的高規射箭場館。我們設計了符合兒童的「系統化」的射箭體驗課程，採小班制教學，為初學者提供最完整的射箭服務體驗。" />
//         <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
//       </Head>
//       <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />
//       <CourseCard/>
//     </Layout>
//   );
// }
