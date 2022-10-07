import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='intro-wrapper'>
        <div className='intro'>
          <h1 className='main-heading'>
            <span className='main-heading-small'>👋🏻 I'm Max</span>a visual designer and frontend
            developer
          </h1>
          <p className='tagline'>
            I enjoy finding solutions to complex problems and learning a few things along the way.
          </p>
        </div>
        <div className='intro-divider'></div>
      </section>
      <div className='intro-divider'></div>
      <section className='about'>
        <h2 className='title'>A creative and curious problem solver </h2>
        <p className='paragraph'>
          I have spent the last 10 years in tech, healthcare, and marketing industries, where I have
          had the privilege of working on a range of websites, design systems, and enterprise-level
          email campaigns. I love to use design and code to make solutions that look good and are
          easy for everyone to use.
        </p>
      </section>
      <div className='intro-divider'></div>
      <section className='work'>
        <h2 className='title'>Recent Work</h2>

        {allPostsData.map(({ id, title, description, linkText, actionLink, image }) => (
          <div className='project-wrapper'>
            <div className='project-image-wrapper'>
              <Image
                priority
                src={image}
                className='project-image'
                alt=''
                width={292}
                height={186}
                layout='intrinsic'
              />
            </div>
            <div className='project-content'>
              <h3 className='project-title' key={id}>
                {title}
              </h3>
              <p className='project-description'>{description}</p>
              {linkText && (
                <p>
                  <Link href={`/posts/${id}`}>
                    <a>{linkText}</a>
                  </Link>
                </p>
              )}
              {actionLink && <a href={actionLink}>See it in action</a>}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
