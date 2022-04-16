import React from 'react';
import Link from 'next/link';

import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Navbar } from '@/ui/Navbar';
import NowPlaying from '@/components/spotify/NowPlaying';
// import { SpotifyPlaying } from '@/components/functions/SpotifyPlaying';
import { SeparatorGrid } from '@/components/SeparatorGrid';

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
          <NowPlaying />
        </Box>
      </Container>
    </Box>
  );
};

export default Test;
