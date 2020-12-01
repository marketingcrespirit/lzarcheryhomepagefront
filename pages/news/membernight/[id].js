import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/membernight";
import Date from "../../../components/date";
import Head from "next/head";
import utilStyles from "../../../styles/utils.module.css";
import Lastpage from '../../../components/LastPage'


export default function Post({ postData }) {
  return (
    <Layout titled="會員之夜" bgNumber={1}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={utilStyles.newsCard}>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div className={utilStyles.articleContent} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <div className={utilStyles.blackButton}>
        <Lastpage src="/assets/icons/white_arrow_left.png" href="/news/membernight" content="上一頁"/>
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
