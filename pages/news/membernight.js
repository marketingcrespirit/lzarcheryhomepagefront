import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import Pagination from "@material-ui/lab/Pagination";
import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/membernight";

const perPage = 6;

export default function MemberNight({ allPostsData }) {
  const route = useRouter();
  const [page, setPage] = useState(1);
  const onMatchedRoutes = (matchedRoutes) => {
    return [...matchedRoutes];
  };
  const handleChange = (index, value) => {
    setPage(value);
  };
  let items = [];
  for (let i = (page - 1) * perPage; i < page * perPage; i++) {
    if (allPostsData[i]) {
      items.push(allPostsData[i]); // 1 => 0, 1  // 2 => 2, 3
    }
  }
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} bgNumber={5}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。射箭場不定期更新有關射箭場的最新消息以及優惠活動，會員之夜定期舉辦有趣的射箭活動。" />
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/react/16.7.0-alpha.2/umd/react.production.min.js"></script>
        <script defer src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.7.0-alpha.2/umd/react-dom.production.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />

      <div className={utilStyles.experienceHead}>
        <h1>{`培養興趣 以箭會友`}</h1>
        <p>會員之夜為每周四19:00-21:00舉辦</p>
        <p>安排有趣好玩的活動和扎實的基礎課程</p>
        <p>無論您是新手或是高手都能樂在其中！</p>
        <p>想知道當周會員之夜玩什麼嗎？</p>
        <p>還請看最新消息的場內公告喔</p>
      </div>

      {/* <Slider dataArray={items}/> */}

      <ul className={utilStyles.memberNight}>
        {items.map(({ id, date, title, slug, src }) => (
          <li className={utilStyles.listItem} key={id}>
            <a href={`/news/membernight/${id}`}>
              <img src={`/assets/images/membernight/${src}`} />
            </a>

            <div className={utilStyles.listItemTxt}>
              <h2>{title}</h2>

              <p>{slug}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={utilStyles.pagination}>
        <Pagination count={Math.ceil(allPostsData.length / perPage)} defaultPage={1} siblingCount={0} boundaryCount={2} onChange={handleChange} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
