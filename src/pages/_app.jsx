import '../../styles/globals.css';
import '../../styles/content.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Elian Batista | Front End</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
