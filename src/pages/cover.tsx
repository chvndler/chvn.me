import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/system/heading';
import { Text } from '@/system/text';
import { Box } from '@/system/box';
import nextStartLogo from '@/public/NEXT.start-dark.svg';
import { Navbar } from '@/ui/Navbar';

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

// APP BEGIN / HOMEPAGE
const Cover = () => {
  return (
    <Box css={{ minWidth: '100vw', minHeight: '100vh', zIndex: '0', bc: '$yellow7' }}>
      <Container>
        <Box css={{ zIndex: '25' }}>
          <Heading
            size="4"
            css={{
              fontFamily: '$inter',
              fontSize: '90px',
              fontWeight: '900',
              // BreakPoints
              '@sm': {
                fontSize: '18px',
              },
              '@md': {
                fontSize: '28px',
              },
            }}
          >
            Chandler Chappell
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default Cover;
