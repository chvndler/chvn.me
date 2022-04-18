import { useState } from 'react';

import BlogContainer from '@/components/blog/BlogContainer';
import BlogPost from '@/components/blog/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from '@/lib/utils';
import { allBlogs } from 'contentlayer/generated';

import { Box, Heading, Text, Paragraph, TextField } from 'atelier.design';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <BlogContainer title="Blog – Chandler CHappell" description="Notes, thoughts, and ideas.">
        <Box css={{}}>
          <Heading size="3">Blog</Heading>
          <Paragraph size="1">
            {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
          </Paragraph>
          <Box css={{ position: 'relative' }}>
            <TextField
              size="3"
              aria-label="Search articles"
              type="text"
              onChange={e => setSearchValue(e.target.value)}
              placeholder="Search articles"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Box>

          {!searchValue && (
            <>
              <Heading size="1">Most Popular</Heading>
              <BlogPost
                title="Rust Is The Future of JavaScript Infrastructure"
                summary="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
                slug="rust"
              />
              <BlogPost
                title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
                summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
                slug="style-guides-component-libraries-design-systems"
              />
              <BlogPost
                title="Creating a Monorepo with Lerna & Yarn Workspaces"
                summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
                slug="monorepo-lerna-yarn-workspaces"
              />
            </>
          )}
          <Heading size="3">All Posts</Heading>
          {!filteredBlogPosts.length && <Paragraph size="1">No posts found.</Paragraph>}
          {filteredBlogPosts.map(post => (
            <BlogPost key={post.title} {...post} />
          ))}
        </Box>
      </BlogContainer>
    </>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map(post => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return { props: { posts } };
}
