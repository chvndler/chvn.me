import React from 'react';
import Link from 'next/link';
import { Box, Heading } from 'atelier.design';

import { getPosts } from '@/lib/ghost';

export const BlogPosts = props => (
  <>
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>
          <Link href={`/posts/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

// export default BlogPosts;

export async function getStaticProps(context) {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1,
  };
}
