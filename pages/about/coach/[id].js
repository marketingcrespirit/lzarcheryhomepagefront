import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/coaches";
import Head from "next/head";
import utilStyles from "../../../styles/utils.module.css";
import Lastpage from "../../../components/LastPage";
import {siteTitle} from '../../../components/layout'
export default function Post({ postData }) {
  return (
    <Layout titled="教練師資" background bgNumber={1}>
      <Head>
      <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。場館聘請射箭經驗豐富的專業教練團隊進行技術的指導以及場館安全的維護" />
        <title>{`${siteTitle} ${postData.title}`}</title>
      </Head>
      <article className={utilStyles.coachCardWrapper}>
        <div className={utilStyles.coachCard}>
          <img className={utilStyles.coachCardImgM} src={`/assets/images/employees/${postData.srcM}`} />
          <img className={utilStyles.coachCardImg} src={`/assets/images/employees/${postData.src}`} />
          <div className={utilStyles.coachCardTxt}>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className="" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </div>

        <div className={utilStyles.blackButton}>
          <Lastpage src="/assets/icons/white_arrow_left.png" href="/about" content="上一頁" />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
