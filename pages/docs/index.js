import React from 'react';

import Page from '@components/page';
import PostsList from '@components/posts-list';
import getAllDocs from '@lib/docs';

const Docs = ({ docs }) => {
  return (
    <Page title="Blog" description="Writing about design and code.">
      <article>
        <ul>
          <PostsList posts={docs} />
        </ul>
      </article>
    </Page>
  );
};

export const getStaticProps = () => {
  const doc = getAllDocs();

  return {
    props: {
      ...doc
    }
  };
};

export default Docs;
