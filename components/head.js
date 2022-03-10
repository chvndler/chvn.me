import NextHead from 'next/head';
import { useTheme } from 'next-themes';

const defaultOgImage = 'https://cdn.ady.systems/chvn/assets/chvn.og-image.png';

const Head = ({
  title = 'Chvn.me',
  description = 'Making cool.',
  image = defaultOgImage,
  children
}) => {
  const { systemTheme } = useTheme();

  return (
    <NextHead>
      {/* Preload font */}
      <link
        rel="preload"
        href="https://cdn.ady.systems/inter/inter.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Title */}
      <title>Chvn®</title>
      <meta name="og:title" content={title} />

      {/* Description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* Image */}
      <meta name="twitter:image" content={image} />
      <meta name="og:image" content={image} />

      {/* URL */}
      <meta name="og:url" content="https://paco.sh" />

      {/* General */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chv_ndler" />
      <meta name="apple-mobile-web-app-title" content="Paco" />
      <meta name="author" content="Chandler Chappell" />

      {/* RSS feed */}
      <link
        rel="alternate"
        type="application/rss+xml"
        title="RSS Feed for paco.sh"
        href="/feed.xml"
      />

      {/* Favicons */}
      <meta name="theme-color" content="#000000" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/ico/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/ico/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/ico/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/ico/pinned.svg" color="#000000" />
      <link rel="manifest" href="/ico/site.webmanifest" />

      {/* Dynamic favicon */}
      {!systemTheme || systemTheme === 'dark' ? (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/dark.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/dark.svg"
            key="dynamic-favicon"
          />
        </>
      ) : (
        <>
          <link
            rel="alternate icon"
            type="image/png"
            href="/favicons/light.png"
            key="dynamic-favicon-alternate"
          />
          <link
            rel="icon"
            type="image/svg+xml"
            href="/favicons/light.svg"
            key="dynamic-favicon"
          />
        </>
      )}
      {children}
    </NextHead>
  );
};

export default Head;
