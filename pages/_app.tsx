// REACT & NEXT IMPORTS
import React from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

// FUNCTIONS
import { ThemeProvider } from 'next-themes'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

// STITCHES.DEV
import { box } from '@system/box'
import { css, globalCss, darkTheme } from 'stitches.config'
import { reset } from '@styles/reset'

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

const App = ({ Component, pageProps }: AppProps) => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  globalCss(reset, {
    html: {
      overflowX: 'hidden',
      backgroundColor: '$slate1',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available'
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      fontFamily: '$inter',
      backgroundColor: '$slate1',
      height: '100vh',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available'
    }
  })

  return (
    <ThemeProvider
      disableTransitionOnChange
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
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

export default App
