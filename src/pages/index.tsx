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

// APP BEGIN / HOMEPAGE
const Index = () => {
  return (
    <Box css={{ minWidth: '100vw', height: '100%', overflow: 'visible' }}>
      <Navbar />
      <Container size="2" css={{ paddingTop: '200px' }}>
        <Heading
          size="4"
          css={{
            width: '100%',
            alignItems: 'left',
            textAlign: 'left',
            paddingBottom: '10px',
            lineHeight: '1.4',
          }}
        >
          <span>Hi, I'm Chan.</span>
        </Heading>

        <Text size="3" css={{ paddingBottom: '50px', lineHeight: '1.4' }}>
          My name is Chandler, most call me Chan. I'm currently based in Charlotte, NC. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
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
    </Box>
  );
};

export default Index;
