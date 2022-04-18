import Link from 'next/link';
import * as React from 'react';

import { Container, Box, Flex } from 'atelier.design';

const CustomLink = props => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

function Callout(props) {
  return (
    <Box>
      <Flex css={{}}>
        <Box css={{ alignItems: 'center', display: 'flex' }}>{props.emoji}</Box>
        <Container css={{ width: '100%' }}>{props.children}</Container>
      </Flex>
    </Box>
  );
}

const MDXComponents = {
  a: CustomLink,
  Callout,
};

export default MDXComponents;
