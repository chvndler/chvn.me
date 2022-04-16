import React from 'react';
import Link from 'next/link';

import { Box } from 'atelier.design';
import { Navbar } from '@/ui/Navbar';
import { MarketingButton } from '@/components/MarketingButton';
import { ArrowRightIcon } from '@radix-ui/react-icons';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

// APP BEGIN / HOMEPAGE
const Test = () => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box>
          <Link href="/" passHref>
            <MarketingButton as="a" icon={ArrowRightIcon}>
              Enter
            </MarketingButton>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Test;
