import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import ButtonLink from '../../components/buttonLink';
import ExternalLinkIcon from '../../components/externalLinkIcon';

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
          <p>{postData.intro}</p>
          <ExternalLinkIcon link={postData.link}>Visit {postData.title}</ExternalLinkIcon>
          <div className='table-list'>
            <h3 className='table-list--title'>Built With</h3>
            <ul className='table-list--list'>
              {postData.tags.map(tag => (
                <li className='table-list--item' key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
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
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
      <div className='intro-divider'></div>
    </Layout>
  );
}
