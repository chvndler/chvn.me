import Link from 'next/link';
import * as React from 'react';

import { Container, Box, Flex } from '@/system';
import { ThemeImage } from '@/components/ThemeImage';
import { styled } from '@stitches/react';

export const StyledLink = styled('a', {
  fontFamily: '$hyper',
  fontWeight: 'bold',
});

const CustomLink = props => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <>
        <StyledLink>
          <Link href={href}>
            <a {...props}>{props.children}</a>
          </Link>
        </StyledLink>
      </>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

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
  a: CustomLink,
  Callout,
  ThemeImage,
};

export default MDXComponents;
