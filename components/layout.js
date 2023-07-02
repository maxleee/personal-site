import Head from 'next/head';
import Link from 'next/link';

const { MotionConfig } = require('framer-motion');

const name = 'Max';
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
        <header>{home ? <></> : <Link href='/'>Home</Link>}</header>
        <main>{children}</main>
        {!home && (
          <div>
            <Link href='/'>← Back to home</Link>
          </div>
        )}
      </MotionConfig>
    </div>
  );
}
