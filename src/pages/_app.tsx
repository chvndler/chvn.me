import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

// STITCHES.DEV
import { css, globalCss, darkTheme } from 'stitches.config';

// Styles..
import { reset } from '@/styles/reset';
import 'inter-ui/inter.css';
import '@/styles/global.css';

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  html: {
    margin: 0,
    padding: 0,
    overflowX: 'hidden',
    backgroundColor: '$sage1',

    minHeight: '-webkit-fill-available',
  },
  body: {
    margin: 0,
    color: '$hiContrast',
    // backgroundColor: '$loContrast',
    backgroundColor: '$sage1',
    fontFamily: '$inter',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    minHeight: '-webkit-fill-available',
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violetA5',
    color: '$violet12',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

// Your App..
const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>

      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="system">
        {/* <!-- META TAGS --> */}

        <div
          className={appWrapper({
            display: 'flex',
            flexDirection: 'column',
          })}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
