import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import Date from "../../components/date";
import Pagination from "@material-ui/lab/Pagination";

import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/announces";

const perPage = 3;

export default function Announce({ allPostsData }) {
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
      items.push(allPostsData[i]);
    }
  }
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} bgNumber={5}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。射箭場館不定期更新有關射箭場館的最新消息以及優惠活動。" />

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />
      <ul className={utilStyles.memberNight}>
        {items.map(({ id, date, title, slug, src }) => (
          <li className={utilStyles.listItemBlogShort} key={id}>
            <a href={`/news/announces/${id}`}>
              <img src={`/assets/images/announces/${src}`} />
            </a>

            <div className={utilStyles.listItemTxt}>
              <small className={utilStyles.lightText}>
                <p><Date dateString={date} /></p>
              </small>

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
