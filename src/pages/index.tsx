import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import { IntroLink } from '@/system/IntroLink';
import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { Text } from '@/system/text';
import { Container } from '@/system/container';
import { Flex } from '@/system/flex';
import { Grid } from '@/system/grid';
import { Section } from '@/system/section';
import { CustomContainer } from '@/components/CustomContainer';
import { SmallSpacer, MediumSpacer } from '@/components/space';
import { HoverCardComponent } from '@/components/HoverCard';
import { AlternateFooter } from '@/ui/AlternateFooter';
import { MarketingButton } from '@/components/MarketingButton';
import { ArrowRightIcon } from '@radix-ui/react-icons';

// Components..
import { GridEntry } from '@/components/GridEntry';
import TopTracks from '@/components/spotify/TopTracks';
import NowPlaying from '@/components/spotify/NowPlaying';
import { Breakout } from '@/components/Breakout';

import { styled } from 'stitches.config';

// Data
import { data as items } from '@/projects/current.json';

const IntroText = styled('p', {
  fontFamily: '$mori',
  fontWeight: 'bold',
  fontSize: '3.2rem',
  // letterSpacing: '-0.2rem',
  letterSpacing: '-0.15rem',
  lineHeight: '1',

  '@sm': {
    lineHeight: '1.05',
    fontSize: '34px',
    letterSpacing: '-0.1rem',
  },
  '@xs': {
    lineHeight: '1.05',
    fontSize: '30px',
    letterSpacing: '-0.1rem',
  },
});

const Footnote = styled('p', {
  fontFamily: '$mori',
  fontWeight: '600',
  fontSize: '0.8rem',
  // letterSpacing: '-0.2rem',
  letterSpacing: '-0.03rem',
  lineHeight: '1',

  position: 'relative',
  margin: '0',
  padding: '0',
});

// APP BEGIN / HOMEPAGE
const Index = () => {
  return (
    <>
      <Box>
        <Head>
          <title>Chandler Chappell</title>
        </Head>

        <Container
          size="4"
          css={{
            paddingTop: '80px',
            paddingBottom: '40px',

            '@xs': {
              paddingTop: '20px',
              paddingBottom: '20px',
            },
          }}>
          <Breakout>
            <IntroText>
              I'm Chandler Chappell, a Front-end Developer, Designer, and Director located in Charlotte, NC. Currently
              building{' '}
              <IntroLink variant="escape" href="https://github.com/AtelierDesign" target="_blank" rel="norefferer">
                ( ady )
              </IntroLink>
              ® to calm the noise within the design culture. I spend most of my time{' '}
              <IntroLink variant="subtle" href="https://github.com/chvndler" target="_blank" rel="norefferer">
                writing code
              </IntroLink>
              , thinking,{' '}
              <IntroLink variant="subtle" href="https://twitter.com/chv_ndler">
                tweeting
              </IntroLink>
              , and journaling about code, life, and ideas.
            </IntroText>

            <Footnote>*Atelier Design Yield</Footnote>
          </Breakout>
        </Container>

        <Section size="2" css={{ paddingBottom: '80px', paddingTop: '80px' }}>
          <CustomContainer>
            <HoverCardComponent />
            <Link href="https://twitter.com/chv_ndler" passHref>
              <a target="_blank" rel="noreferrer">
                <Text css={{ color: '$sage8', fontFamily: '$inter', fontSize: '12px', fontWeight: '500' }}>
                  @chv_ndler
                </Text>
              </a>
            </Link>

            <SmallSpacer />

            {/* <!-- About.. --> */}
            <Heading css={{ color: '$sage12', lineHeight: 'normal', fontFamily: '$iaaf', fontWeight: 'normal' }}>
              Chandler Chappell
            </Heading>
            <Text css={{ color: '$sage8', fontSize: '16px', fontWeight: '600', lineHeight: 'normal' }}>
              Front-end Developer, Designer, and Director
            </Text>

            {/* <!-- Marketing Button.. --> */}
            <Box css={{ marginTop: '25px' }}>
              <Link href="https://github.com/chvndler" passHref>
                <MarketingButton as="a" icon={ArrowRightIcon}>
                  GitHub
                </MarketingButton>
              </Link>
            </Box>

            <MediumSpacer />

            {/* <!-- Social Links.. --> */}
            <Heading size="1" css={{ color: '$sage12', fontFamily: '$iaaf', lineHeight: '2' }}>
              Connect
            </Heading>
            <Flex direction="row">
              <Link href="https://github.com/chvndler" passHref>
                <a target="_blank" rel="norefferer">
                  <Text
                    size="2"
                    css={{
                      color: '$sage8',
                      fontWeight: '600',
                      paddingTop: '12px',
                      paddingLeft: '0px',
                      paddingRight: '20px',
                      '&:hover': {
                        color: '$slate10',
                      },
                    }}>
                    GitHub
                  </Text>
                </a>
              </Link>
              <Link href="https://www.are.na/chvndler-ch" passHref>
                <a target="_blank" rel="norefferer">
                  <Text
                    size="2"
                    css={{
                      color: '$sage8',
                      fontWeight: '600',
                      paddingTop: '12px',
                      paddingLeft: '0px',
                      paddingRight: '20px',
                      '&:hover': {
                        color: '$slate10',
                      },
                    }}>
                    Are.na
                  </Text>
                </a>
              </Link>

              <Link href="https://twitter.com/chv_ndler" passHref>
                <a target="_blank" rel="norefferer">
                  <Text
                    size="2"
                    css={{
                      color: '$sage8',
                      fontWeight: '600',
                      paddingTop: '12px',
                      paddingLeft: '0px',
                      paddingRight: '20px',
                      '&:hover': {
                        color: '$slate10',
                      },
                    }}>
                    Twitter
                  </Text>
                </a>
              </Link>

              <Link href="/next">
                <a>
                  <Text
                    size="2"
                    css={{
                      color: '$sage8',
                      fontWeight: '600',
                      paddingTop: '12px',
                      paddingLeft: '0px',
                      paddingRight: '20px',
                      '&:hover': {
                        color: '$slate10',
                      },
                    }}>
                    Contact
                  </Text>
                </a>
              </Link>
            </Flex>
          </CustomContainer>
        </Section>

        {/* <!-- Current Projects.. --> */}
        <Section size="2" css={{ paddingTop: '0', paddingBottom: '80px' }}>
          <CustomContainer>
            <Heading
              size="1"
              css={{ color: '$sage12', px: '0px', marginBottom: '10px', fontWeight: '600', lineHeight: '2' }}>
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
                  gridTemplateColumns: '1fr 1fr',
                },
              }}>
              {items.map(entry => {
                return (
                  <GridEntry
                    key={entry.title}
                    title={entry.title}
                    image={entry.image}
                    href={entry.url}
                    description={entry.description}
                  />
                );
              })}
            </Grid>
          </CustomContainer>
        </Section>

        {/* <!-- Spotify Now Playing.. --> */}
        <Section size="2" css={{ paddingTop: '0', paddingBottom: '40px', alignItems: 'left' }}>
          <CustomContainer css={{ alignItems: 'left' }}>
            <Heading size="1" css={{ color: '$sage12', px: '8px', fontWeight: '600', lineHeight: '2' }}>
              Now Playing
            </Heading>
            <Text
              css={{
                paddingTop: '0px',
                paddingLeft: '8px',
                paddingRight: '8px',
                paddingBottom: '12px',
                lineHeight: '0.7',
                margin: '1px',
                fontSize: '11px',
                fontWeight: '500',
                color: '#1ed760',
                '@sm': { lineHeight: '0' },
              }}>
              on Spotify®
            </Text>
            <Box css={{ alignItems: 'left' }}>
              <NowPlaying />
            </Box>
          </CustomContainer>
        </Section>

        {/* <!-- Spotify Top Tracks.. --> */}
        <Section size="2" css={{ paddingTop: '0', paddingBottom: '180px' }}>
          <CustomContainer>
            <Heading
              size="1"
              css={{ color: '$sage12', px: '8px', marginBottom: '10px', fontWeight: '600', lineHeight: '2' }}>
              Spotify Top 5
            </Heading>
            <TopTracks />
          </CustomContainer>
        </Section>

        {/* <!-- Footer.. --> */}
        <AlternateFooter />
      </Box>
    </>
  );
};

export default Index;
