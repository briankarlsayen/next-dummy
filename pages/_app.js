import '../styles/globals.css'
import Layout from '../components/Layout'
import Navbar from '../components/Nav'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar/>
      <Head>
        <title>Konoha Village News</title>
        <meta name='keywords' content='web developent, naruto, anime'></meta>
      </Head>
      <h1>
        Konoha news feed
      </h1>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
