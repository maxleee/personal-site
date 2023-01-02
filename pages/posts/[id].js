import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className='project-detail-intro'>
        <div className='project-detail-intro-content'>
          <h1 className='project-title'>{postData.title}</h1>
          <a href={postData.link} className='button-link'>
            Visit Site
          </a>
          <p>{postData.intro}</p>
          <p>
            <strong>Built with</strong>
          </p>
          {postData.tags.map(tag => (
            <p className='tag'>{tag}</p>
          ))}
        </div>
        <div className='project-detail-intro-image'>
          <img
            src={postData.introImage}
            alt='Screenshot of Map Generator interface with checkbox lists of counties and preview of generated map.'
          />
        </div>
      </section>
      <div className='intro-divider'></div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <div className='intro-divider'></div>
    </Layout>
  );
}
