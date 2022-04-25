import { parseISO, format } from 'date-fns';

import BlogContainer from '@/components/blog/BlogContainer';
import { Box, Flex, Heading, Text, Section } from 'atelier.design';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';
import { TwitterLogo } from '@/components/TwitterLogo';

import { styled } from 'stitches.config';

const editUrl = slug => `https://github.com/chvndler/chvn.me/edit/main/data/blog/${slug}.mdx`;
const discussUrl = slug => `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://chvn.me/blog/${slug}`)}`;

const RawContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: '$inter',
  lineHeight: '1.3',
});

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Blog }>) {
  return (
    <Box css={{ paddingTop: '80px' }}>
      <BlogContainer
        title={`${post.title} – chvn.me`}
        description={post.summary}
        image={`https://chvn.me${post.image}`}
        date={new Date(post.publishedAt).toISOString()}
        type="article">
        <article>
          <Section size="2">
            <Heading
              size="2"
              css={{
                marginTop: '5px',
                marginBottom: '5px',
                color: '$sage12',
                letterSpacing: '-0.05rem',
                lineHeight: '1.2',
                fontWeight: '700',
                '&:hover': {
                  opacity: '0.8',
                },
              }}>
              {post.title}
            </Heading>

            <Flex css={{ flexDirection: 'column' }}>
              <Box css={{ alignItems: 'center' }}>
                {/* <!-- ADD A COOL BLOG ICON HERE --> */}
                <Text size="2" css={{ color: '$sage11', lineHeight: '1.4', fontWeight: '500' }}>
                  {'@chv_ndler / '}
                  {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                </Text>
              </Box>
            </Flex>
          </Section>

          {/* <!-- CHILDREN (CONTENT) --> */}
          <Section size="2">
            <RawContent>{children}</RawContent>
          </Section>

          <Flex css={{ flexDirection: 'row', margin: 'auto', alignItems: 'center', textAlign: 'center' }}>
            <Text size="1" css={{ textAlign: 'center', fontWeight: 'bold', marginRight: '6px' }}>
              <a href={discussUrl(post.slug)} target="_blank" rel="noopener noreferrer">
                {'Discuss on Twitter'}
              </a>
            </Text>
            {` `}
            <TwitterLogo />
            {`  •  `}
            <Text size="1" css={{ textAlign: 'center', fontWeight: 'bold' }}>
              <a href={editUrl(post.slug)} target="_blank" rel="noopener noreferrer">
                {'Edit on GitHub'}
              </a>
            </Text>
          </Flex>
        </article>
      </BlogContainer>
    </Box>
  );
}
