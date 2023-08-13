import Layout from '../../components/layout';
// import { getAllPostIds, getPostData } from '../../lib/posts';
import { allPosts } from 'contentlayer/generated';
import Head from 'next/head';
import ExternalLinkIcon from '../../components/externalLinkIcon';
import TableList from '../../components/tableList';

export async function getStaticProps({ params }) {
  const postData = allPosts.find(post => post._raw.flattenedPath === params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = allPosts.map(post => ({ params: { id: post._raw.flattenedPath } }));

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
          <p>{postData.intro}</p>
          <ExternalLinkIcon link={postData.link}>Visit {postData.title}</ExternalLinkIcon>
          <TableList header='Built With' items={postData.tags} />
        </div>
        <div className='project-detail-intro-image'>
          <img
            src={postData.introImage}
            alt='Screenshot of Map Generator interface with checkbox lists of counties and preview of generated map.'
          />
        </div>
      </section>
      <div className='intro-divider'></div>
      <section className='project-detail-body'>
        <div dangerouslySetInnerHTML={{ __html: postData.body.html }} />
      </section>
      <div className='intro-divider'></div>
    </Layout>
  );
}
