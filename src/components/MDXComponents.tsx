import * as React from 'react';

import { Container, Box, Flex } from '@/system';
import { ThemeImage } from '@/components/ThemeImage';
import BlogLink from '@/components/blog/BlogLink';
import BlogFlex from '@/components/blog/BlogFlex';

function Callout(props) {
  return (
    <Box>
      <Flex css={{}}>
        <Box css={{ alignItems: 'center', display: 'flex', backgroundColor: '$rhythmA9' }}>{props.emoji}</Box>
        <Container
          css={{
            width: '100%',
            backgroundColor: '$rhythmA5',
            borderRadius: '5px',
            paddingLeft: '14px',
            paddingRight: '14px',

            marginTop: '10px',
            marginBottom: '10px',
          }}>
          {props.children}
        </Container>
      </Flex>
    </Box>
  );
}

const MDXComponents = {
  BlogFlex,
  BlogLink,
  Callout,
  ThemeImage,
};

export default MDXComponents;
