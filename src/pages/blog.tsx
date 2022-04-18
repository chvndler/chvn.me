import Head from 'next/head';
import { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import BlogContainer from '@/components/blog/BlogContainer';
import BlogPost from '@/components/blog/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from '@/lib/utils';
import { allBlogs } from 'contentlayer/generated';

import { Box, Badge, Section, Text } from 'atelier.design';
import { TextField } from '@/components/TextField';
import { Heading } from '@/system/heading';
import { AlternateFooter } from '@/ui/AlternateFooter';

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts.filter(post => post.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
      <Box css={{}}>
        <Head>
          <title>Blog - chvn.me/</title>
        </Head>
        <Navbar />
        <Box css={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <BlogContainer title="Blog – Chandler CHappell" description="Notes, thoughts, and ideas.">
            <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
              <Section size="1" css={{ paddingBottom: '0px' }}>
                <Heading size="3" css={{ color: '$sage12', lineHeight: '1.3', paddingBottom: '6px' }}>
                  Blog
                </Heading>
                <Text css={{ color: '$superLogo', fontSize: '15px', fontWeight: '700', lineHeight: '1.3' }}>
                  Notes, Thoughts, and Ideas.
                </Text>
                <Text
                  css={{
                    color: '$sage12',
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '1.3',
                  }}>{`I have currently written ${posts.length} stories here, for you.`}</Text>

                <Text size="1" css={{ fontSize: '13px', color: '$sage8', fontWeight: '500', lineHeight: '2.2' }}>
                  Use the search bar to filter by title.
                </Text>
              </Section>
            </Box>

            <Section size="1">
              <Box css={{ position: 'relative' }}>
                <TextField
                  size="2"
                  variant="lime"
                  aria-label="Search articles"
                  type="text"
                  onChange={e => setSearchValue(e.target.value)}
                  placeholder="Search posts"
                />
              </Box>
            </Section>

            {!searchValue && (
              <>
                <Section size="2">
                  <Badge size="2" variant="violet">
                    <Heading
                      size="2"
                      css={{ padding: '4px', color: '$superLogo', fontSize: '13px', fontWeight: '800', letterSpacing: '-0.02rem' }}>
                      Popular Posts
                    </Heading>
                  </Badge>
                  <BlogPost
                    title="Rust is the Future."
                    summary="Why is Rust being used to replace parts of the JavaScript web ecosystem like minification (Terser), transpilation (Babel), formatting (Prettier), bundling (webpack), linting (ESLint), and more?"
                    slug="rust"
                  />
                  <BlogPost
                    title="Style Guides, Design Systems, and Libraries."
                    summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
                    slug="style-guides-component-libraries-design-systems"
                  />
                  <BlogPost
                    title="Creating a Monorepo."
                    summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
                    slug="monorepo-lerna-yarn-workspaces"
                  />
                </Section>
              </>
            )}

            <Section size="1">
              <Badge size="2" variant="violet">
                <Heading
                  size="2"
                  css={{ padding: '4px', color: '$superLogo', fontSize: '13px', fontWeight: '800', letterSpacing: '-0.02rem' }}>
                  All Posts
                </Heading>
              </Badge>
              {!filteredBlogPosts.length && (
                <Text size="2" css={{ lineHeight: '1.2' }}>
                  No posts found.
                </Text>
              )}
              {filteredBlogPosts.map(post => (
                <BlogPost key={post.title} {...post} />
              ))}
            </Section>
          </BlogContainer>
        </Box>
        <AlternateFooter />
      </Box>
    </>
  );
}

export function getStaticProps() {
  const posts = allBlogs
    .map(post => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)));

  return { props: { posts } };
}
