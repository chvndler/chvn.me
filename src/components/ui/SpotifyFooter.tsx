import React from 'react';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';
import { NewLink } from '@/system/newlink';

// Logos..
import { TwitterLogo } from '@/components/TwitterLogo';
import { ArenaLogoIcon } from '@/components/ArenaLogo';
import { GitHubIcon } from '@/components/GitHubIcon';
import { SpotifyLogo } from '@/components/SpotifyLogo';

export const SpotifyFooter = () => {
  return (
    <>
      <Flex
        as="footer"
        css={{
          py: '0px',
          px: '5px',
          height: '58px',
          jc: 'space-between',
          position: 'relative',
          // bottom: '0',
          margin: '0',
          backgroundColor: '$translucent',
          width: '100vw',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          saturate: '200%',
          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <Link href="/" passHref>
          <Box
            as="a"
            css={{
              width: '100px',
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}>
            <SpotifyLogo />
          </Box>
        </Link>

        {/* NAVIGATION SECTION */}

        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            '@sm': {
              display: 'none',
            },
          }}>
          <Link href="/next" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$sage8',
                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$blue10',
                },
              }}>
              <GitHubIcon />
            </NewLink>
          </Link>

          <Link href="/showcase" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$sage8',

                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$yellow9',
                },
              }}>
              <TwitterLogo />
            </NewLink>
          </Link>

          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$sage8',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$red9',
                },
              }}>
              <ArenaLogoIcon />
            </NewLink>
          </Link>
        </Flex>

        {/* <!-- JSX ELEMENT --> */}

        <Flex css={{ alignItems: 'center', px: '0px' }}>
          <Box
            css={{
              justifyContent: 'right',
              width: '100px',
              mr: '$1',
              display: 'inline-flex',

              '@bp2': { mr: '$4' },
            }}>
            {/* <!-- THEME SWITCH --> */}
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
