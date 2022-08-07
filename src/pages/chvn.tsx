import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { IntroLink } from '@/system/IntroLink';
import { MediumSpacer } from '@/components/space';
import { Text } from '@/system/text';
import { ChvnContainer } from '@/components/CustomContainer';
import { CoverFooter } from '@/components/ui/CoverFooter';
import { MarketingButton } from '@/components/MarketingButton';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { CurrentPrjcts } from '@/components/alternates/CurrentPrjcts';
import NowPlaying from '@/components/spotify/NowPlaying';
// Components..
import { Navbar } from '@/ui/Navbar';

export default function Chvn() {
  return (
    <>
      <Navbar />
      <Box css={{}}>
        <Head>
          <title>chvn.me/</title>
        </Head>

        <Box css={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <ChvnContainer>
            <Heading size="3" css={{ fontFamily: '$inter', fontWeight: '500', letterSpacing: '-0.14rem', marginBottom: '20px' }}>
              <strong>Chandler</strong>.Chappell
            </Heading>
            <Text font="readex" css={{ color: '$rhythm12', fontSize: '16px' }}>
              I’m a Front-end developer & designer based in Charlotte, NC– I am currently building{' '}
              <IntroLink variant="readex" href="https://ady.world" target="_blank" rel="norefferer">
                Atelier Design
              </IntroLink>
              ® to calm the noise within design culture. I enjoy exploring– finding, and learning new tech advancements, developing beautiful user
              interfaces, and have a passion for building brands.
            </Text>
          </ChvnContainer>
          <MediumSpacer />

          <ChvnContainer>
            <Heading
              size="1"
              css={{
                color: '$rhythm00',
                fontFamily: '$inter',
                fontWeight: '600',
                lineHeight: '2.5',
                letterSpacing: '-0.05rem',
                marginBottom: '10px',
                marginLeft: '4px',
              }}>
              Current Projects
            </Heading>

            <CurrentPrjcts />

            <Box
              css={{
                paddingTop: '5px',
                paddingLeft: '8px',
                paddingBottom: '60px',
                width: '100%',
                alignItems: 'center',
                margin: 'auto',
              }}>
              <Link href="https://github.com/chvndler" passHref>
                <MarketingButton as="a" icon={ArrowRightIcon}>
                  GitHub
                </MarketingButton>
              </Link>
            </Box>
            <Box
              css={{
                paddingTop: '5px',
                paddingLeft: '8px',
                paddingBottom: '60px',
                width: '100%',
                alignItems: 'center',
                margin: 'auto',
              }}>
              <NowPlaying />
            </Box>
          </ChvnContainer>
        </Box>
        <CoverFooter />
      </Box>
    </>
  );
}
