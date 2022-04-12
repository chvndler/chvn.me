// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';

// system® DESIGN SYSTEM
import { Navbar } from '@/ui/Navbar';
import { Footer } from '@/ui/Footer';
import { Box } from '@/system/box';
import { Container } from '@/system/container';
import { Section } from '@/system/section';
import { Heading } from '@/system/heading';
import { Text } from '@/system/text';

const BlogPage = () => {
  return (
    <Box>
      <Head>
        <title>Showcase.</title>
      </Head>
      <Navbar />
      <Box
        css={{
          overflow: 'auto',
          height: '100vh',
          '@md': {
            // display: 'none',
          },
          '@sm': {
            // display: 'none',
          },
        }}>
        {/* <!-- MAIN HEADING SECTION --> */}
        <Section size="1">
          <Container css={{ ai: 'center', paddingTop: '120px', paddingBottom: '40px', margin: 'auto', textAlign: 'center' }}>
            <Heading size="4">Blog</Heading>
            <Text as="p" css={{ fontWeight: '700', fontSize: '11px', lineHeight: '4', color: '$blue8', fontFamily: '$neuewide' }}>
              thoughts.
            </Text>
          </Container>
        </Section>

        <Footer />
      </Box>
    </Box>
  );
};

export default BlogPage;
