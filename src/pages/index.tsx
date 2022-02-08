import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Box } from '@/system/box';
import { Text } from '@/system/text';
import { Heading } from '@/system/heading';
import { Container } from '@/system/container';
import nextStartLogo from '@/public/NEXT.start-dark.svg';
import { Navbar } from '@/ui/Navbar';
import { Spacer } from '@/ui/Spacer';

import { TwitterLogoIcon } from '@radix-ui/react-icons';

import { styled } from 'stitches.config';

const CenterBox = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  height: '100vh',
});

// APP BEGIN / HOMEPAGE
const Index = () => {
  return (
    <Box css={{ minWidth: '100vw' }}>
      <Navbar />
      <CenterBox>
        <Container size="3">
          <Text size="3" css={{ paddingBottom: '50px', lineHeight: '1.4' }}>
            My name is Chandler, most call me Chan. I'm currently based in Charlotte, NC. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          <Heading
            size="2"
            css={{
              width: '100%',
              alignItems: 'left',
              textAlign: 'left',
              paddingBottom: '50px',
              lineHeight: '1.4',
            }}
          >
            <span>Connect</span>
          </Heading>

          <TwitterLogoIcon />

          <Spacer />
          <Heading
            size="2"
            css={{
              width: '100%',
              alignItems: 'left',
              textAlign: 'left',
              paddingBottom: '50px',
              lineHeight: '1.4',
            }}
          >
            <span>Current Projects</span>
          </Heading>
        </Container>
      </CenterBox>
    </Box>
  );
};

export default Index;
