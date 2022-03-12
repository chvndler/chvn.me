import Layout from '@components/documentation';
import Post from '@components/post';
import { getAllDocs, getDocBySlug } from '@lib/docs';
import markdownToHtml from '@lib/markdown';

export default function Doc({ meta, content }) {
  return <Layout meta={meta}>{content}</Layout>;
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);

  const content = await markdownToHtml(doc.content || '');

  return {
    props: {
      ...doc,
      content
    }
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map(doc => {
      return {
        params: {
          slug: doc.slug
        }
      };
    }),
    fallback: 'blocking'
  };
}

{
  /*
export const getStaticPaths = () => {
  return {
    paths: getPosts().map(p => `/blog/${p.slug}`),
    fallback: false
  };
};

export default PostPage;
*/
}
