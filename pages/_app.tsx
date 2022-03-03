import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import App from 'next/app'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

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

const appWrapper = css({
  include: ['box', 'minHeightScreen']
})

import '@styles/global.css'
import '@styles/chrome-bug.css'
import { ThemeProvider } from 'next-themes'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    globalCss(reset, {
      html: {
        overflowX: 'hidden',

        // iOS MOBILE VIEWPORT FIX
        minHeight: '-webkit-fill-available'
      },
      body: {
        // iOS MOBILE VIEWPORT FIX
        minHeight: '-webkit-fill-available'
      }
    })

    return (
      <ThemeProvider disableTransitionOnChange defaultTheme="dark">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no"
          />
        </Head>

        <div
          className={appWrapper({
            display: 'flex',
            flexDirection: 'column'
          })}
        >
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    )
  }
}

export default MyApp
