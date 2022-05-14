import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DesignProvider } from '@/components/DesignProvider';
import { Box } from 'atelier.design';

// Components..
import { Navbar } from '@/ui/Navbar';

// stitches.config
import { css, globalCss, darkTheme } from 'stitches.config';

// Styles..
import { reset } from '@/styles/reset';
import 'inter-ui/inter.css';
import '@/styles/urbane.css';
import '@/styles/global.css';

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

const globalStyles = globalCss(reset, {
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
    fontFamily: '$urbane',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    minHeight: '-webkit-fill-available',
  },
});

// Your App..
const App = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return (
    <>
      <DesignProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        </Head>

        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          value={{ light: 'light-theme', dark: darkTheme.className }}
          defaultTheme="light">
          <Box css={{ backgroundColor: '$sage1', zIndex: '0' }}>
            <Navbar />
            <div
              className={appWrapper({
                display: 'flex',
                flexDirection: 'column',
              })}>
              <Component {...pageProps} />
            </div>
          </Box>
        </ThemeProvider>
      </DesignProvider>
    </>
  );
};

export default App;
