import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/events";
import Date from "../../../components/date";
import Head from "next/head";
import utilStyles from "../../../styles/utils.module.css";

import Lastpage from '../../../components/LastPage'


export default function Post({ postData }) {
  return (
    <Layout titled="場內公告" bgNumber={1}>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。射箭場館不定期更新有關射箭場館的最新消息以及優惠活動。" />
      </Head>
      <article className={utilStyles.newsCard}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.articleContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {/* <Link href="/news/membernight">
          <a>回上一頁</a>
        </Link> */}
        <div className={utilStyles.blackButton}>
        <Lastpage src="/assets/icons/white_arrow_left.png" href="/news/events" content="上一頁"/>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  };
}
