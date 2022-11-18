import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import HeaderBlobs from '../components/headerBlobs';
import HeaderBlobsCSS from '../components/headerBlobsCSS';
import ExternalLinkIcon from '../components/externalLinkIcon';
import parse from 'html-react-parser';
const { motion, useSpring, m } = require('framer-motion');

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const scrollParent = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };
  const scrollY = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 1, stiffness: 50 } },
  };
  const scrollLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 1, stiffness: 50 } },
  };
  const scrollRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { type: 'spring', bounce: 1, stiffness: 50 } },
  };
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='intro-wrapper'>
        <div className='intro'>
          <h1 className='main-heading'>
            <span className='main-heading-small'>
              <motion.div
                whileHover={{ rotate: [10, -5, 8, -2, 3], scale: 1.3 }}
                transition={{ type: 'spring', bounce: 0.5 }}
                style={{ originX: 0.8, originY: 1, display: 'inline-block', marginRight: '8px' }}>
                <span role='img' aria-label='hand waving'>
                  👋🏻
                </span>
              </motion.div>{' '}
              I'm Max
            </span>
            a visual designer and frontend developer
          </h1>
          <p className='tagline'>
            I enjoy finding solutions to complex problems and learning a few things along the way.
          </p>
        </div>
        <div className='intro-divider'></div>

        <HeaderBlobsCSS />
        {/* <HeaderBlobs /> */}
      </section>
      <div className='intro-divider'></div>
      <motion.section
        className='about'
        variants={scrollParent}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}>
        <motion.h2 className='title' variants={scrollY}>
          A creative and curious problem solver{' '}
        </motion.h2>
        <motion.p className='paragraph' variants={scrollY}>
          As a designer and developer, I have leveraged my skills to create websites,
          enterprise-level email campaigns, and design systems. In the last few years, I've come to
          love coding more than designing, but in both mediums, solving complex problems with simple
          solutions is the creative outlet that fuels me.
        </motion.p>
      </motion.section>
      <div className='intro-divider'></div>
      <section className='work'>
        <h2 className='title'>Recent Work</h2>

        {allPostsData.map(({ id, title, description, linkText, link, image }) => (
          <motion.div
            className='project-wrapper'
            key={id}
            variants={scrollParent}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}>
            <div className='project-image-wrapper'>
              <motion.img src={image} className='project-image' alt='' variants={scrollLeft} />
            </div>
            <div className='project-content'>
              <motion.h3 className='project-title' key={id} variants={scrollRight}>
                <ExternalLinkIcon link={link}>{title}</ExternalLinkIcon>
              </motion.h3>
              <motion.p className='project-description' variants={scrollRight}>
                {parse(description)}
              </motion.p>
              {linkText && (
                <p>
                  <motion.Link href={`/posts/${id}`} variants={scrollRight}>
                    <a>{linkText}</a>
                  </motion.Link>
                </p>
              )}
            </div>
          </motion.div>
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
