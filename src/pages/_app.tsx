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

// Your App..
const App = ({ Component, pageProps }: AppProps) => {
  globalCss(reset, {
    html: {
      margin: 0,
      padding: 0,
      overflowX: 'hidden',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
    body: {
      backgroundColor: '$sage1',
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      height: '100vh',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>

      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
        value={{ light: 'light', dark: darkTheme.className }}>
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
