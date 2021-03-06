import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import React, { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { useRouter } from "next/router";
import Date from "../../components/date";
import Pagination from "@material-ui/lab/Pagination";

import utilStyles from "../../styles/utils.module.css";
import { getSortedPostsData } from "../../lib/blogs";

const URI = "http://localhost:3000";

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
      items.push(allPostsData[i]); // 1 => 0, 1  // 2 => 2, 3
    }
  }
  return (
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} bgNumber={6}> 
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。不只是提供射箭場等實體服務，我們也針對靜態的射箭文化以及射箭歷史相關知識進行推廣" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      <Breadcrumb locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} />

      <ul className={utilStyles.memberNight}>
        {items.map(({ id, date, title, slug, src }) => (
          <li className={utilStyles.listItemBlog} key={id}>
            <a href={`/knowledge/blogs/${id}`}>
              <img src={`/assets/images/blogs/${src}`} />
            </a>

            <div className={utilStyles.listItemTxt}>
              <small className={utilStyles.lightText}>
                <p>
                  <Date dateString={date} />
                </p>
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
