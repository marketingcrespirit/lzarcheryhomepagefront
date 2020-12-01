import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import Partnercard from "../../components/Partnercard";

export default function History() {
  const route = useRouter();
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} bgNumber={5}>

      <Head>
        <title>{siteTitle}</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />

      <Partnercard/>
    </Layout>
  );
}
