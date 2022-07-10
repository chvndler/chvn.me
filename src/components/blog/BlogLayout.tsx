import { parseISO, format } from 'date-fns';

import BlogContainer from '@/components/blog/BlogContainer';
import { Box, Flex, Heading, Text, Section } from '@/system';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';
// import { Blog } from 'contentlayer/generated';
import { TwitterLogo } from '@/components/TwitterLogo';
import { GitHubIcon } from '@/components/GitHubIcon';

import { styled } from 'stitches.config';

const editUrl = slug => `https://github.com/chvndler/chvn.me/edit/main/data/blog/${slug}.mdx`;
const discussUrl = slug => `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://chvn.me/blog/${slug}`)}`;

const RawContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  fontFamily: '$hyper',
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
              size="3"
              css={{
                marginTop: '5px',
                marginBottom: '5px',
                letterSpacing: '-0.05em',
                color: '$rhythmA12',
                lineHeight: 'normal',
                fontFamily: '$inter',
                fontWeight: '800',
                //textTransform: 'uppercase',
                '&:hover': {
                  opacity: '0.8',
                },
              }}>
              {post.title}
            </Heading>

            <Flex css={{ flexDirection: 'column' }}>
              <Box css={{ alignItems: 'center', paddingBottom: '0px' }}>
                {/* <!-- ADD A COOL BLOG ICON HERE --> */}
                <Text font="aero" css={{ color: '$sage11', fontFamily: '$aeroportMono', fontSize: '13px', lineHeight: '1.4' }}>
                  {'@chv_ndler : '}
                  {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
                </Text>

                <Text css={{ fontFamily: '$aeroportMono', lineHeight: '1.3', paddingTop: '10px' }}>{post.summary}</Text>
              </Box>
            </Flex>
          </Section>

          {/* <!-- CHILDREN (CONTENT) --> */}
          <Section size="2">
            <RawContent>{children}</RawContent>
          </Section>

          <Section size="3" css={{ paddingTop: '120px' }}>
            <Flex css={{ flexDirection: 'row', margin: 'auto', alignItems: 'center', textAlign: 'center' }}>
              <Text size="2" css={{ textAlign: 'center', fontWeight: 'bold', marginRight: '12px' }}>
                <a href={discussUrl(post.slug)} target="_blank" rel="noopener noreferrer">
                  {'Discuss on Twitter'}
                </a>
              </Text>
              {` `}
              <a href={discussUrl(post.slug)} target="_blank" rel="noopener noreferrer">
                {<TwitterLogo />}
              </a>
              {` `}
              <Text size="2" css={{ textAlign: 'center', fontWeight: 'bold', marginRight: '12px', marginLeft: '12px' }}>
                <a href={editUrl(post.slug)} target="_blank" rel="noopener noreferrer">
                  {'Edit on GitHub'}
                </a>
              </Text>
              {` `}
              <GitHubIcon />
              {` `}
            </Flex>
          </Section>
        </article>
      </BlogContainer>
    </Box>
  );
}
