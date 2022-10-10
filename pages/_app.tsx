import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

const config = require('../next.config');
const title = "JA's Random Projects";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <base href={config.basePath} />
        <link rel="icon" href="favicon.ico" />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content="Random projects" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
