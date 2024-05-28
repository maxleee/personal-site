import '../styles/global.scss';
import '../public/fonts/fonts.css';
import '../styles/a11y-light.css';
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src='https://cloud.umami.is/script.js'
        data-website-id='3bb76836-5680-459d-b9cb-1b1f16b2807b'
      />
      <Component {...pageProps} />;
    </>
  );
}
