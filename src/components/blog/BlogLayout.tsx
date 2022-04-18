import { parseISO, format } from 'date-fns';

import BlogContainer from '@/components/blog/BlogContainer';
import { CustomContainer } from '@/components/CustomContainer';
import { Box, Flex, Heading, Text, Paragraph } from 'atelier.design';
// import Subscribe from 'components/Subscribe';
// import ViewCounter from 'components/ViewCounter';
import type { PropsWithChildren } from 'react';
import type { Blog } from 'contentlayer/generated';

const editUrl = slug => `https://github.com/chvndler/chvn.me/edit/main/data/blog/${slug}.mdx`;
const discussUrl = slug => `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://chvn.me/blog/${slug}`)}`;

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Blog }>) {
  return (
    <BlogContainer
      title={`${post.title} – Lee Robinson`}
      description={post.summary}
      image={`https://leerob.io${post.image}`}
      date={new Date(post.publishedAt).toISOString()}
      type="article">
      <article>
        <Heading size="2">{post.title}</Heading>
        <Flex css={{ flexDirection: 'column' }}>
          <Box css={{ alignItems: 'center' }}>
            {/* <!-- ADD A COOL BLOG ICON HERE --> */}
            <Paragraph size="1">
              {'@chv_ndler / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </Paragraph>
          </Box>
        </Flex>

        {/* <!-- CHILDREN (CONTENT) --> */}
        <CustomContainer>{children}</CustomContainer>

        <Text size="1">
          <a href={discussUrl(post.slug)} target="_blank" rel="noopener noreferrer">
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a href={editUrl(post.slug)} target="_blank" rel="noopener noreferrer">
            {'Edit on GitHub'}
          </a>
        </Text>
      </article>
    </BlogContainer>
  );
}
