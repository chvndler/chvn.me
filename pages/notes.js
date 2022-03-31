import Page from '@components/page';
import getMarkdown from '@lib/get-markdown';
import Link from '@components/link'; // eslint-disable-line

const Notes = ({ html }) => {
  return (
    <Page title="" description="Collection of my thoughts.">
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export const getStaticProps = async () => {
  const md = await getMarkdown('data/notes.md');

  return {
    props: {
      html: md,
    },
  };
};

export default Notes;
