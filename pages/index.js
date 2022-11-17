import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import HeaderBlobs from '../components/headerBlobs';
import Greeting from '../components/greeting';
import ExternalLinkIcon from '../components/externalLinkIcon';
import parse from 'html-react-parser';
const { motion } = require('framer-motion');

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
          <Greeting />
          <p className='tagline'>
            I enjoy finding solutions to complex problems and learning a few things along the way.
          </p>
        </div>
        <div className='intro-divider'></div>

        <HeaderBlobs />
      </section>
      <div className='intro-divider'></div>
      <section className='about'>
        <h2 className='title'>A creative and curious problem solver </h2>
        <p className='paragraph'>
          As a designer and developer, I have leveraged my skills to create websites,
          enterprise-level email campaigns, and design systems. In the last few years, I've come to
          love coding more than designing, but in both mediums, solving complex problems with simple
          solutions is the creative outlet that fuels me.
        </p>
      </section>
      <div className='intro-divider'></div>
      <section className='work'>
        <h2 className='title'>Recent Work</h2>

        {allPostsData.map(({ id, title, description, linkText, link, image }) => (
          <div className='project-wrapper' key={id}>
            <div className='project-image-wrapper'>
              <img src={image} className='project-image' alt='' />
            </div>
            <div className='project-content'>
              <h3 className='project-title' key={id}>
                <ExternalLinkIcon link={link}>{title}</ExternalLinkIcon>
              </h3>
              <p className='project-description'>{parse(description)}</p>
              {linkText && (
                <p>
                  <Link href={`/posts/${id}`}>
                    <a>{linkText}</a>
                  </Link>
                </p>
              )}
            </div>
          </div>
        ))}
      </section>
      <div className='intro-divider'></div>
      <section className='contact'>
        <h3 className='about-subtitle'>Connect with Me</h3>
        <div className='connect-link-wrapper'>
          <ExternalLinkIcon link={'https://www.linkedin.com/in/max-orenzuk-66155a27'}>
            LinkedIn
          </ExternalLinkIcon>
          <ExternalLinkIcon link={'https://github.com/maxleee'}>Github</ExternalLinkIcon>
        </div>
      </section>
    </Layout>
  );
}
