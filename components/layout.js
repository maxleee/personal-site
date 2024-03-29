import Head from 'next/head';
import Link from 'next/link';
import ButtonLink from './buttonLink';

const { MotionConfig } = require('framer-motion');

export const siteTitle = 'Max Orenzuk';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta name='description' content='Max Orenzuk, a designer and front end developer' />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>'
        />
      </Head>
      <MotionConfig reducedMotion='user'>
        {home ? (
          <></>
        ) : (
          <header>
            <ButtonLink href='/' icon={{ type: 'home', position: 'start' }}>
              Home
            </ButtonLink>
          </header>
        )}
        <main>{children}</main>
      </MotionConfig>
    </div>
  );
}
