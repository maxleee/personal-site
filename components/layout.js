import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const { MotionConfig } = require('framer-motion');

const name = 'Max';
export const siteTitle = 'Max Orenzuk';

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta name='description' content='Learn how to build a personal website using Next.js' />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧑‍💻</text></svg>'
        />
      </Head>
      <MotionConfig reducedMotion='user'>
        <header>
          {home ? (
            <></>
          ) : (
            <Link href='/'>
              <a>Home</a>
            </Link>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div>
            <Link href='/'>
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </MotionConfig>
    </div>
  );
}
