import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Text } from '@/system/text';
import { Flex } from '@/system/flex';
import { Grid } from '@/system/grid';
import { Section } from '@/system/section';
import { Container } from '@/system/container';
import { SmallSpacer } from '@/components/SmallSpacer';
import { MediumSpacer } from '@/components/MediumSpacer';
import { HoverCardComponent } from '@/components/HoverCard';
import { Footer } from '@/ui/Footer';

// Components..
import { Navbar } from '@/ui/Navbar';
import { GridEntry } from '@/components/GridEntry';

// Data
import { data as items } from '@/data/current.json';

// APP BEGIN / HOMEPAGE
const Index = () => {
  return (
    <>
      <Head>
        <title>Chvn.me®</title>
      </Head>
      <Box css={{ minWidth: '100vw' }}>
        <Navbar />

        <Section size="4">
          <Container size="3">
            <HoverCardComponent />
            <Link href="https://twitter.com/chv_ndler" passHref>
              <a>
                <Text
                  as="a"
                  target="_blank"
                  rel="noreferrer"
                  css={{ color: '$sage8', fontFamily: '$inter', fontSize: '12px', fontWeight: '500' }}>
                  @chv_ndler
                </Text>
              </a>
            </Link>
            <SmallSpacer />

            <Heading size="3" css={{ color: '$sage8', lineHeight: 'normal' }}>
              Chandler Chappell
            </Heading>
            <Text css={{ fontSize: '16px', fontWeight: '600', lineHeight: 'normal' }}>Front-end Developer, Designer, and Director</Text>
            <MediumSpacer />

            {/* <!-- CONNECT SOCIAL SECTION --> */}
            <Heading size="1" css={{ color: '$sage11', fontWeight: '600', lineHeight: '2' }}>
              Connect
            </Heading>
            <Flex direction="row">
              <Link href="https://github.com/chvndler" passHref>
                <a target="_blank" rel="norefferer">
                  <Text size="1" css={{ fontWeight: '600', paddingTop: '12px', paddingLeft: '0px', paddingRight: '20px' }}>
                    GitHub
                  </Text>
                </a>
              </Link>
              <Link href="https://www.are.na/chvndler-ch" passHref>
                <a target="_blank" rel="norefferer">
                  <Text size="1" css={{ fontWeight: '600', paddingTop: '12px', paddingLeft: '0px', paddingRight: '20px' }}>
                    Are.na
                  </Text>
                </a>
              </Link>

              <Link href="https://twitter.com/chv_ndler" passHref>
                <a target="_blank" rel="norefferer">
                  <Text size="1" css={{ fontWeight: '600', paddingTop: '12px', paddingLeft: '0px', paddingRight: '20px' }}>
                    Twitter
                  </Text>
                </a>
              </Link>

              <Link href="/next">
                <a>
                  <Text size="1" css={{ fontWeight: '600', paddingTop: '12px', paddingLeft: '0px', paddingRight: '20px' }}>
                    Contact
                  </Text>
                </a>
              </Link>
            </Flex>
          </Container>
        </Section>

        <Section size="2" css={{ paddingTop: '0', paddingBottom: '180px' }}>
          <Container size="3">
            <Heading size="1" css={{ px: '8px', marginBottom: '10px', fontWeight: '600', lineHeight: '2' }}>
              Projects
            </Heading>

            <Grid
              css={{
                gap: '4px',
                gridTemplateColumns: '1fr',
                '@bp1': {
                  gap: '4px',
                  gridTemplateColumns: '1fr 1fr',
                },
                '@bp2': {
                  gap: '4px',
                  gridTemplateColumns: '1fr 1fr 1fr',
                },
              }}>
              {items.map(entry => {
                return (
                  <GridEntry key={entry.title} title={entry.title} image={entry.image} href={entry.url} description={entry.description} />
                );
              })}
            </Grid>
          </Container>
        </Section>

        <Footer />
      </Box>
    </>
  );
};

export default Index;
