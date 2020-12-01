import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useRouter } from "next/router";
import Indexcard from "../components/Indexcard";
import React, { useState } from "react";
import { getSortedPostsData } from "../lib/blogs";
import Pagination from "@material-ui/lab/Pagination";
import Date from "../components/date";

const perPage = 3;

export default function Home({ allPostsData }) {
  const route = useRouter();
  const onMatchedRoutes = (matchedRoutes) => {
    return [...matchedRoutes];
  };
  const [page, setPage] = useState(1);

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
    <Layout locationPath={route.pathname} onMatchedRoutes={onMatchedRoutes} home bgNumber={8}>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="立禪射藝，一間位於竹北的合法、民營室內射箭館，離新竹高鐵站走路只要10分鐘。提供新手射箭體驗課程，場內配有冷氣、飲水機及安全設備，給您最舒適的運動空間。" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      </Head>
      
        <Indexcard />
        <div className={utilStyles.newsWrapper}>
          <h1>射箭部落格</h1>
          <ul className={utilStyles.indexNews}>
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
