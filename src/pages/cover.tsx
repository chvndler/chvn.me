import React from 'react';
import Link from 'next/link';

// import { Heading } from '@/system/heading';
import { Box } from '@/system/box';
import { Breakout } from '@/components/Breakout';
import { LargeSpacer } from '@/components/space/LargeSpacer';
import { Section } from '@/system/section';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  bc: '$translucent',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  zIndex: '20',
});

const IntroText = styled('p', {
  fontFamily: '$inter',
  fontWeight: '600',
  fontSize: '52px',
  letterSpacing: '-0.2rem',

  '@sm': {
    fontSize: '34px',
    letterSpacing: '-0.1rem',
  },
});

// APP BEGIN / HOMEPAGE
const Cover = () => {
  return (
    <Box css={{ minWidth: '100vw', minHeight: '100vh', zIndex: '0' }}>
      <LargeSpacer />
      <Container>
        <Breakout>
          <IntroText>
            Chandler Chappell is a Front-end Developer, Designer, and Director located in Charlotte, NC. Currently
            working on various personal and professional projects. I spend most of my time{' '}
            <Link href="/blog">writing</Link>, thinking, <Link href="https://twitter.com/_dte">tweeting</Link>, and
            blogging about code, life, and ideas.
          </IntroText>
        </Breakout>

        <Section size="4"></Section>
      </Container>
    </Box>
  );
};

export default Cover;
