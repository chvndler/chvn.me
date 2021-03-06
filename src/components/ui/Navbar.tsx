import React from 'react';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Text } from '@/system';
import { Flex } from '@/system/flex';
import { NewLink } from '@/system/newlink';
// import { ChvnLogo } from '@/components/ChvnLogo';

// FUNCTIONS
import { ThemeSwitch } from '@/functions/ThemeSwitch';
import { PopoverPanel } from '@/functions/PopoverPanel';

export const Navbar = () => {
  return (
    <>
      <Flex
        as="header"
        css={{
          py: '0px',
          px: '4px',
          height: '48px',
          jc: 'space-between',
          position: 'fixed',
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
              width: '120px',
              ml: '12px',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '12px' },
            }}>
            <Text
              font="aero"
              css={{
                zIndex: '999',
                // fontWeight: 'bold',
                fontFamily: '$aeroportMono',
                fontSize: '15px',
                color: '$chvn4',
                lineHeight: '48px',
                letterSpacing: '-0.03rem',
              }}>
              chvn.me/
            </Text>

            {/* <!--  <ChvnLogo /> --> */}
          </Box>
        </Link>

        {/* <!-- Nav Link #1 --> */}
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
          <Link href="/blog" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$sage11',
                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$blue10',
                },
              }}>
              journal
            </NewLink>
          </Link>

          {/* <!-- Nav Link #2 --> */}
          <Link href="/projects" passHref>
            <NewLink
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$sage11',

                '@sm': { marginRight: '$2' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$yellow9',
                },
              }}>
              projects
            </NewLink>
          </Link>

          {/* <!-- Nav Link #3 --> */}
          <Link href="/archive" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$sage11',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$red9',
                },
              }}>
              archive
            </NewLink>
          </Link>

          {/* <!-- Nav Link #4 --> */}
          <Link href="/cover" passHref>
            <NewLink
              variant="subtle"
              css={{
                display: 'none',
                color: '$sage11',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
                '&:hover': {
                  textDecoration: 'none',
                  color: '$orange9',
                },
              }}>
              ideas
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
              '@xs': { marginRight: '-5px' },
            }}>
            {/* <!-- THEME SWITCH --> */}
            <ThemeSwitch />
          </Box>

          <PopoverPanel />
        </Flex>
      </Flex>
    </>
  );
};
