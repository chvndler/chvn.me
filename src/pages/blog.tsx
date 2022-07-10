import Head from 'next/head';
import { useState } from 'react';
import BlogContainer from '@/components/blog/BlogContainer';
import BlogPost from '@/components/blog/BlogPost';
import { InferGetStaticPropsType } from 'next';
import { pick } from '@/lib/utils';
import { allBlogs } from 'contentlayer/generated';

import { Badge, Section } from 'atelier.design';
import { Box, Text } from '@/system';
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

        <Box css={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <BlogContainer title="Blog – Chandler Chappell" description="Notes, thoughts, and ideas.">
            <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
              <Section
                size="1"
                css={{
                  paddingBottom: '0px',
                  '@xl': {
                    maxWidth: '70% !important',
                  },
                  '@lg': {
                    maxWidth: '70% !important',
                  },
                  '@md': {
                    maxWidth: '70% !important',
                  },
                  '@sm': {
                    minWidth: '100%',
                    maxWidth: '100% !important',
                    width: '100%',
                  },
                  '@xs': {
                    minWidth: '100%',
                    maxWidth: '100%',
                    width: '100%',
                  },
                }}>
                <Heading
                  size="2"
                  css={{
                    color: '$rhythm12',
                    fontFamily: '$inter',
                    fontWeight: '700',
                    lineHeight: '1.5',
                    paddingBottom: '18px',
                  }}>
                  journal
                </Heading>

                <Text
                  css={{
                    color: '$rhythm10',
                    fontFamily: '$readex',
                    fontSize: '13px',
                    fontWeight: '500',
                    lineHeight: '1.5',
                    marginBottom: '20px',
                  }}>
                  This journal will document my thoughts, ideas, notes, and any resources that have shaped me as a designer & developer. I plan to
                  also use this space as my own knowledge base for all things dev. My favorite posts are pinned to the top under "Popular".
                  <br />
                  <br />© Copyright 2022. All Rights Reserved.
                </Text>
                <Text
                  font="aero"
                  css={{
                    color: '$rhythmPx',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.3',
                  }}>{`entry count: 00${posts.length}`}</Text>

                <Text size="1" css={{ paddingTop: '20px', fontSize: '15px', color: '$chvn7', fontWeight: '500', lineHeight: '2.2' }}>
                  Use the search bar to filter by title.
                </Text>
              </Section>
            </Box>

            <Section size="1">
              <Box css={{ position: 'relative' }}>
                <TextField
                  size="3"
                  variant="brand"
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
                  <Badge
                    size="2"
                    // variant="lime"
                    css={{ border: '1px solid $chvn4', borderRadius: '8px', py: '14px', px: '10px' }}>
                    <Heading
                      size="2"
                      css={{
                        padding: '4px',
                        fontFamily: '$inter',
                        color: '$chvn4',
                        fontSize: '13px',
                        fontWeight: '800',
                        letterSpacing: '-0.02rem',
                        lineHeight: 'normal',
                      }}>
                      Popular Posts
                    </Heading>
                  </Badge>
                  <BlogPost
                    title="How I Got Into Code."
                    summary="Learn more about who I am, and what led me down the path of all things tech."
                    slug="about-me"
                  />
                  <BlogPost
                    title="Style Guides, Design Systems, and Libraries."
                    summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
                    slug="style"
                  />
                  <BlogPost
                    title="Creating a Monorepo."
                    summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
                    slug="turborepo"
                  />
                </Section>
              </>
            )}

            <Section size="1">
              <Badge size="2" css={{ border: '1px solid $chvn4', borderRadius: '8px', py: '14px', px: '10px' }}>
                <Heading
                  size="2"
                  css={{
                    padding: '4px',
                    fontFamily: '$inter',
                    color: '$chvn4',
                    fontSize: '13px',
                    fontWeight: '800',
                    letterSpacing: '-0.02rem',
                    lineHeight: 'normal',
                  }}>
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
