import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="min-h-screen min-w-screen overflow-x-hidden flex flex-col">
      <Head>
        <title>Ayush Garg X Palak Jain</title>
        <meta name="description" content="Ayush Garg X Palak Jain" />
        <meta property="og:title" content="Ayush Garg X Palak Jain" />
        <meta property="og:description" content="Ayush Garg X Palak Jain" />
        <meta property="og:type" content="website" />
      </Head>

      { children } 
    </div>
  )
}