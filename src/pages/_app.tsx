// REACT & NEXT IMPORTS
import React from 'react';
import Router from 'next/router';
import { AppProps } from 'next/app';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'next-themes';

// PROGRESS LOADER
import nprogress from 'nprogress';
import debounce from 'lodash.debounce';

// STITCHES.DEV
import { css, globalCss, darkTheme } from 'stitches.config';

// Styles..
import { reset } from '@/styles/reset';
import 'inter-ui/inter.css';
import '@/styles/global.css';

// Only show nprogress after 500ms (slow loading)
const start = debounce(nprogress.start, 500);
Router.events.on('routeChangeStart', start);
Router.events.on('routeChangeComplete', () => {
  start.cancel();
  nprogress.done();
  window.scrollTo(0, 0);
});

Router.events.on('routeChangeError', () => {
  start.cancel();
  nprogress.done();
});

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

// Your App..
const App = ({ Component, pageProps }: AppProps) => {
  // Catch.. Set.. Theme
  const { theme, setTheme } = useTheme();

  // Inject globals & resets
  globalCss(reset, {
    html: {
      overflowX: 'hidden',
      backgroundColor: '$slate1',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      height: '100vh',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
  });

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system"
    >
      <div
        className={appWrapper({
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
};

export default App;
