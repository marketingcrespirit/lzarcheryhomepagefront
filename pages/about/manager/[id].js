import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/coaches";
import Head from "next/head";
import utilStyles from "../../../styles/utils.module.css";
import Lastpage from "../../../components/LastPage";
import { siteTitle } from "../../../components/layout";
export default function Post({ postData }) {
  return (
    <Layout titled="創辦人" background bgNumber={1}>
      <Head>
        <title>{`${siteTitle} ${postData.title}`}</title>
        <meta name="description" content="立禪為新竹地區合法、民營，符合「室內國際賽規格」的高規射箭場館。射箭場創辦人的背景以及創業故事，立禪射藝射箭場的起源。" />
      </Head>
      <article className={utilStyles.managerCardWrapper}>
        <div className={utilStyles.managerCard}>
          <img className={utilStyles.coachCardImg} src={`/assets/images/employees/${postData.src}`} />
          <img className={utilStyles.coachCardImgM} src={`/assets/images/employees/${postData.srcL}`} />
          <div className={utilStyles.coachCardTxt}>
            <div className={utilStyles.managerContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
