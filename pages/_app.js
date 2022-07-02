// add bootstrap css 

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import Head from 'next/head';


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
