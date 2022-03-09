// REACT & NEXT IMPORTS
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import App from 'next/app'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

// FUNCTIONS
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500)
Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', () => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
})

Router.events.on('routeChangeError', () => {
  start.cancel()
  nprogress.done()
})

import '@styles/global.css'
import '@styles/chrome-bug.css'

function ChvnApp({ Component, pageProps }) {
  return (
    <ThemeProvider disableTransitionOnChange defaultTheme="system">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default ChvnApp
