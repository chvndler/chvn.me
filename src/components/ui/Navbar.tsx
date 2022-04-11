import React from 'react';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';
import { NewLink } from '@/system/newlink';

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
          px: '5px',
          height: '48px',
          jc: 'space-between',
          position: 'fixed',
          margin: '0',
          backgroundColor: '$translucent',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          saturate: '300%',
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
            <Text
              css={{
                zIndex: '999',
                fontFamily: 'Inter, sans-serif',
                // fontWeight: '600',
                fontSize: '18px',
                color: '$sky11',
                lineHeight: '48px',
                letterSpacing: '-0.03rem',
              }}>
              <strong>chan</strong>®
            </Text>
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
              blog
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
              projects
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
              archive
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
                  color: '$orange9',
                },
              }}>
              film
            </NewLink>
          </Link>
        </Flex>

        {/* <!-- JSX ELEMENT --> */}

        <Flex css={{ alignItems: 'center', px: '0px' }}>
          <Box
            css={{
              justifyContent: 'right',
              width: '100px',
              mr: '$2',
              display: 'inline-flex',

              '@bp2': { mr: '$5' },
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
