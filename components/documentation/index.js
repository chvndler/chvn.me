import { useState } from 'react';

import Head from '@components/head';
import Link from 'next/link';
import Header from '@components/header';
import Footer from '@components/footer';
import styles from './docs.module.css';

import Navigation from './navigation';
import Page from '@components/page';

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const Layout = ({
  title,
  meta,
  content,
  slug,
  html,
  hidden,
  og,
  date,
  previous,
  next,

  header = true,
  footer = true,
  title,
  description,
  image,
  showHeaderTitle = true,
  children,
  meta: pageMeta
}) => {
  const [theme, setTheme] = useState('okaidia');
  const meta = {
    ...pageMeta
  };

  return (
    <div className={styles.wrapper}>
      <Head
        title={`${title ? `${title} - ` : ''}chvn®`}
        description={description}
        image={image}
      >
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />

        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          as="script"
        />
        <link
          rel="preload"
          href="https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css"
          as="script"
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-${theme}.css`}
          rel="stylesheet"
        />

        {hidden && <meta name="robots" content="noindex" />}
        {date && <meta name="date" content={date} />}
      </Head>

      {header && <Header title={showHeaderTitle && title} />}

      <Page
        slug={slug}
        title={title}
        meta={meta}
        description={description}
        showHeaderTitle={false}
        image={
          og && og === true
            ? `https://res.cloudinary.com/dsdlhtnpw/image/upload/${slug}.png`
            : og
        }
      >
        <article
          dangerouslySetInnerHTML={{
            __html: `<span class="${styles.date}">${date}</span><h1 class="${
              styles.title
            }">${escapeHtml(title)}</h1>${html}`
          }}
        />

        <select
          onChange={e => setTheme(e.target.value)}
          value={theme}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="okaidia">Okaidia</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="coy">Coy</option>
          <option value="funky">Funky</option>
        </select>

        <main className={styles.main}>
          <div className={styles.titlewrapper}>
            {title && <div className={styles.content}>{title}</div>}
          </div>

          {children}
          <Navigation previous={previous} next={next} />
        </main>

        <Footer />
      </Page>
    </div>
  );
};

export default Layout;
