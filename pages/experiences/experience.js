import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import Experience from "../../sections/Experience";

export default function History() {
  const route = useRouter();
  const onMatchedRoutes = matchedRoutes => {
    return [...matchedRoutes];
  };
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} bgNumber={2}>
      <Head>
        <title>{siteTitle}</title>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "http://schema.org/", "@type": "Product", sku: 100139, name: "台灣新竹｜室內射箭場｜初學者體驗｜好玩｜遊戲", url: "https://lzarchery.com/experience",  description: "位於新竹竹北的室內射箭場，將電玩的概念融入到其中，以更親切的方式推廣傳統弓，一起在遊戲中學習正確的射箭知識。現場擁有舒適的座位與專業弓箭設備，搭配現場專業的教練指導，想體驗射箭的你在這邊通通都可以享受到，快來體驗弓箭的奧秘。", brand: { "@type": "Thing", name: "Lzarchery" }, aggregateRating: { "@type": "AggregateRating", ratingValue: 4.8, reviewCount: 150, bestRating: 5, worstRating: 1 } }) }} />
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。我們設計了「系統化」的射箭體驗課程，採小班制教學，為初學者提供最完整的射箭服務體驗。一起在遊戲中學習正確的射箭知識，一步步點亮射箭的技能樹吧！" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />
      <Experience/>
    </Layout>
  );
}
