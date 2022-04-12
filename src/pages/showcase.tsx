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

import { ShowcaseEntry } from '@/components/ShowcaseEntry';

// Data
import { data as items } from '@/data/showcase.json';

const Showcase = () => {
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
            <Heading size="4">Showcase</Heading>
            <Text as="p" css={{ fontWeight: '700', fontSize: '11px', lineHeight: '4', color: '$blue8', fontFamily: '$neuewide' }}>
              Copyright © 2022
            </Text>
          </Container>
        </Section>

        {/* <!-- SHOWCASE ONE --> */}
        <Container size="3" css={{ bc: '$translucent', paddingBottom: '100px' }}>
          {items.map(entry => {
            return (
              <ShowcaseEntry key={entry.title} title={entry.title} image={entry.image} href={entry.url} description={entry.description} />
            );
          })}
        </Container>
        <Footer />
      </Box>
    </Box>
  );
};

export default Showcase;
