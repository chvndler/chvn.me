import React from 'react';
import Head from 'next/head';

import { Box } from '@/system/box';
import { Heading } from '@/system/heading';
import { IntroLink } from '@/system/IntroLink';
import { MediumSpacer } from '@/components/space';
import { Text } from '@/system/text';
import { ChvnContainer } from '@/components/CustomContainer';
import { CoverFooter } from '@/components/ui/CoverFooter';

import { CurrentProjects } from '@/components/CurrentProjects';

export default function Chvn() {
  return (
    <>
      <Box css={{}}>
        <Head>
          <title>Blog - chvn.me/</title>
        </Head>

        <Box css={{ paddingTop: '100px', paddingBottom: '80px' }}>
          <ChvnContainer>
            <Heading
              size="3"
              css={{ fontFamily: '$inter', fontWeight: '500', letterSpacing: '-0.14rem', marginBottom: '20px' }}>
              <strong>Chandler</strong>.Ch®
            </Heading>
            <Text font="hyper" css={{ color: '$rhythm12' }}>
              I’m a Front-end developer & designer based in Charlotte, NC– I am currently building{' '}
              <IntroLink variant="hyper" href="https://ady.world" target="_blank" rel="norefferer">
                Atelier Design®
              </IntroLink>{' '}
              to calm the noise within the design culture. I enjoy exploring– finding, and learning new tech
              advancements, developing beautiful user interfaces, and have a passion for building brands.
            </Text>
          </ChvnContainer>
          <MediumSpacer />

          <ChvnContainer>
            <Heading
              size="2"
              css={{
                color: '$rhythm00',
                fontFamily: '$inter',
                fontWeight: '500',
                lineHeight: '2.5',
                letterSpacing: '-0.15rem',
                marginBottom: '10px',
                marginLeft: '8px',
              }}>
              Projects
            </Heading>

            <CurrentProjects />
          </ChvnContainer>
        </Box>

        <CoverFooter />
      </Box>
    </>
  );
}
