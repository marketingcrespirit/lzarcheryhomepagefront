import Layout, { siteTitle } from "../components/layout";
import Head from "next/head";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import { useRouter } from "next/router";
import Traffic from "../components/Traffic";
import utilStyles from "../styles/utils.module.css";
import Form from "../components/Form";

export default function History() {
  const route = useRouter();
  const onMatchedRoutes = (matchedRoutes) => {
    return [...matchedRoutes];
  };
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} bgNumber={7}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="立禪為合法、民營，符合「室內國際賽規格」的高規射箭場館。地址：新竹縣竹北市復興一街251號3F-7。聯絡電話：03-6577681。營業時間：[平日/假日]09:00-23:00" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />
      <div className={utilStyles.experienceHead}>
      <h1>{`生活在台灣\n你應該認識射箭`}</h1>
        <p>台灣射箭成績雖享譽國際，但因為射箭的門檻較高，一般人對射箭還是很陌生。</p>
        <p>因此我們設計出一套適合初學者的系統，希望讓更多人，認識這項台灣之光。</p>
      </div>
      <Traffic />
      <Form />
    </Layout>
  );
}
