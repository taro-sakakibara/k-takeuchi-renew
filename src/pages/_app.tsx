import Head from 'next/head'
// import { GlobalStyles, css } from 'twin.macro'
// import { Global } from '@emotion/react'
import { AppProps } from 'next/app'
import '../styles/style.css'
import { Header } from '@/compositions/index'
import { Footer } from '@/compositions/index'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta />
    </Head>
    <Header />
    {/* <GlobalStyles /> */}
    {/* <Global styles={globalStyles} /> */}
    <Component {...pageProps} />
    <Footer />
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
