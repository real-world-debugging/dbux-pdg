import Head from 'next/head';

/**
 * @see https://getbootstrap.com/docs/5.2/getting-started/contents/#css-files
 */
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-utilities.css';


import '../styles/globals.css';


export default function MyApp({ Component, pageProps }) {
  /**
   * Additive Head
   * @see https://stackoverflow.com/questions/60398469/can-you-have-multiple-additive-head-elements-in-nextjs
   */
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
  </>)
}
