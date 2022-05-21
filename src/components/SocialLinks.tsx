import React from 'react';
import { Text, Container, Section, Grid } from '@/system';
import Link from 'next/link';

export const SocialLinks = () => {
  return (
    <Container size="1">
      <Section>
        <Grid
          align="center"
          columns={{ '@initial': 4, '@bp1': 4, '@bp2': 4 }}
          css={{ gap: 1, placeItems: 'stretch', gridAutoRows: '20px', mb: '$8' }}>
          <Link href="https://github.com/chvndler" passHref>
            <a target="_blank" rel="norefferer">
              <Text
                size="2"
                css={{
                  color: '$chvn7',
                  fontFamily: '$inter',
                  fontWeight: '800',
                  lineHeight: 'normal',
                  paddingTop: '5px',
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
                  color: '$chvn7',
                  fontFamily: '$inter',
                  fontWeight: '800',
                  lineHeight: 'normal',
                  paddingTop: '5px',
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
                  color: '$chvn7',
                  fontFamily: '$inter',
                  fontWeight: '800',
                  lineHeight: 'normal',
                  paddingTop: '5px',
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
                  color: '$chvn7',
                  fontFamily: '$inter',
                  fontWeight: '800',
                  lineHeight: 'normal',
                  paddingTop: '5px',
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
        </Grid>
      </Section>
    </Container>
  );
};
