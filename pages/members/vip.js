import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import Viptable from '../../components/Viptable'


export default function History() {
  const route = useRouter();
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} background bgNumber={4}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。場館針對熱愛射箭的玩家們推出射箭VIP會員方案，期間可使用射箭場的設施以及相關的免費射箭器材租借並定期舉辦會員之夜等好玩的射箭活動" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />

      <Viptable/>
    </Layout>
  );
}
