import Head from 'next/head'
// import { GlobalStyles, css } from 'twin.macro'
// import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import '../styles/style.css'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        Nextjs App with TypeScript, ESlint, Jest, Emotion, Tailwind and Twin
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    {/* <GlobalStyles /> */}
    {/* <Global styles={globalStyles} /> */}
    <Component {...pageProps} />
  </>
)

// const globalStyles = css`
//   html,
//   body {
//     padding: 0;
//     margin: 0;
//     font-family: 'Noto Sans', sans-serif;
// 		font-size: 1.6rem
//   }
//   * {
//     box-sizing: border-box;
//   }
// `

export default App
