import Head from 'next/head';
import { useState } from 'react';
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

        <Box css={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <BlogContainer title="Blog – Chandler CHappell" description="Notes, thoughts, and ideas.">
            <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
              <Section size="1" css={{ paddingBottom: '0px' }}>
                <Heading
                  size="4"
                  css={{
                    color: '$chvn5',
                    fontFamily: '$inter',
                    fontWeight: '700',
                    lineHeight: '1.3',
                    paddingBottom: '6px',
                  }}>
                  Blog
                </Heading>
                <Text
                  css={{
                    color: '$chvn4',
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '1.3',
                  }}>
                  Notes, Thoughts, and Ideas.
                </Text>
                <Text
                  css={{
                    color: '$chvn7',
                    fontSize: '15px',
                    fontWeight: '500',
                    lineHeight: '1.3',
                  }}>{`I have currently written ${posts.length} stories here, for you.`}</Text>

                <Text
                  size="1"
                  css={{ paddingTop: '20px', fontSize: '15px', color: '$chvn7', fontWeight: '500', lineHeight: '2.2' }}>
                  Use the search bar to filter by title.
                </Text>
              </Section>
            </Box>

            <Section size="1">
              <Box css={{ position: 'relative' }}>
                <TextField
                  size="3"
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
