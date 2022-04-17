import React from 'react';

import { Box } from '@/system/box';
import { Navbar } from '@/ui/Navbar';
import { BlogPosts } from '@/components/BlogPosts';

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
const Index = ({ posts }) => {
  return (
    <Box>
      <Navbar />
      <Container>
        <Box>
          <BlogPosts />
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
