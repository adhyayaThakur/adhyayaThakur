import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Mansi Thakur.</title>
      <link rel="icon" type="image/png" sizes='16x16' href="/computer.png"></link>
    </Head>
      <Component {...pageProps} />
    </>
  )

}

export default MyApp
