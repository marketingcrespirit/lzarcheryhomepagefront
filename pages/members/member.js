import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import Member from '../../components/Member'

export default function History() {
  const route = useRouter();
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} background bgNumber={4}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。場館推出射箭樂活會員方案，使用期限為三個月，期間可使用射箭場的設施以及相關的免費射箭器材租借" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />
      <Member/>
    </Layout>
  );
}
