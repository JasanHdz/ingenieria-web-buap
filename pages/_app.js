import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import theme from 'utils/theme'
import BaseStyles from 'components/base-styles'
import Head from 'next/head'

Router.onRouterChangeStart = () => {
  NProgress.start()
}

Router.onRouterChangeComplete = () => {
  NProgress.done()
}

Router.onRouterChangeError = () => {
  NProgress.done()
}

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <BaseStyles theme={{}} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App