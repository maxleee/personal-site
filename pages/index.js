import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import HeaderBlobsCSS from '../components/headerBlobsCSS';
import ExternalLinkIcon from '../components/externalLinkIcon';
import ButtonLink from '../components/buttonLink';
import TableList from '../components/tableList';
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
            a designer and frontend developer
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
      <section className='about'>
        <h2 className='title'>A creative and curious problem solver </h2>
        <p className='paragraph'>
          As a designer and front end developer with over a decade of experience, I bring a unique
          blend of creativity and technical expertise to every project. In my current role I focus
          on design systems, building sites and emails using HTML, CSS, Javascript, React, and
          Gatsby, and elevating an existing brand in the digital marketing landscape. I believe in
          creating with empathy, always keeping the end user in mind, and striving to create
          experiences that are accessible, intuitive, and user-friendly.
        </p>
        <TableList
          color='pink'
          header='Front End Skills'
          items={[
            'HTML',
            'CSS/SCSS',
            'JavaScript',
            'React',
            'Gatsby',
            'Accessibility',
            'SVG',
            'HTML Emails',
          ]}
        />
        <TableList
          color='mustard'
          header='Design Skills'
          items={[
            'UI/Visual Design',
            'Design Systems',
            'Web Design',
            'Email Design',
            'Social and Display Ads',
            'Figma',
            'Adobe Suite',
          ]}
        />
      </section>
      <div className='intro-divider'></div>
      <section className='work'>
        <h2 className='title'>Recent Work</h2>

        {allPostsData.map(({ id, title, description, intro, link, image }) => (
          <div className='project-wrapper' key={id}>
            <div className='project-image-wrapper'>
              <img src={image} className='project-image' alt='' />
            </div>
            <div className='project-content'>
              <h3 className='project-title' key={id}>
                {title}
              </h3>
              <p className='project-description'>{parse(description)}</p>
              <div className='project-button-wrapper'>
                {/* <ButtonLink href={link} icon={{ type: 'external', position: 'end' }}>
                  Visit Site
                </ButtonLink>
                <Link className='more-link' href={`/posts/${id}`}>
                  Read More
                </Link> */}
                {intro && (
                  <ButtonLink href={`/posts/${id}`} size='large'>
                    Read More
                  </ButtonLink>
                )}
                {link && <ExternalLinkIcon link={link}>Visit {title}</ExternalLinkIcon>}
              </div>
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
