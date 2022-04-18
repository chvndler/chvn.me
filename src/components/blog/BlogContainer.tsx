import Head from 'next/head';

import { CustomContainer } from '@/components/CustomContainer';

export default function BlogContainer(props) {
  const { children } = props;
  const meta = {
    title: 'Chandler Chappell – Developer, writer, creator.',
    description: `Front-end developer, designer, and director.`,
    image: 'https://chvn.me/img/cover.jpg',
    type: 'website',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:image" content={meta.image} />
        <meta property="og:type" content={meta.type} />
      </Head>
      <main>
        <CustomContainer>{children}</CustomContainer>
      </main>
    </>
  );
}
