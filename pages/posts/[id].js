import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import ExternalLinkIcon from '../../components/externalLinkIcon';
import TableList from '../../components/tableList';
import ButtonLink from '../../components/buttonLink';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  const allPostIds = getAllPostIds();

  const nextIndex = allPostIds.findIndex(post => post.params.id === postData.id) + 1;
  let nextPostId = nextIndex;
  if (nextIndex >= allPostIds.length) {
    nextPostId = 0;
  }
  const nextPostData = await getPostData(allPostIds[nextPostId].params.id);

  return {
    props: {
      postData,
      nextPostData,
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
export default function Post({ postData, nextPostData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <section className='project-detail-intro'>
        <div className='project-detail-intro-image'>
          <img src={postData.introImage} alt='' />
        </div>
        <div className='project-detail-intro-content'>
          <div className='content-main'>
            <h1 className='project-title'>{postData.title}</h1>
            <p>{postData.intro}</p>
          </div>
          <div className='content-secondary'>
            {postData.link && (
              <ExternalLinkIcon link={postData.link}>Visit {postData.title}</ExternalLinkIcon>
            )}
            <TableList header='Built With' items={postData.tags} align='right' />
          </div>
        </div>
      </section>
      <div className='intro-divider'></div>
      <section className='project-detail-body'>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </section>
      <div className='intro-divider'></div>
      <div className='project-footer'>
        <ButtonLink href='/' icon={{ type: 'home', position: 'start' }}>
          Home
        </ButtonLink>
        {nextPostData.intro && (
          <div className='next-project-wrapper'>
            <h2>Next Project</h2>
            <Link href={`/posts/${nextPostData.id}`}>{nextPostData.title}</Link>
          </div>
        )}
      </div>
    </Layout>
  );
}
