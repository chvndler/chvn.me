import React from 'react';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { NewLink } from '@/system/newlink';

// FUNCTIONS
import { ThemeSwitch } from '@/functions/ThemeSwitch';

// ATELIER® DESIGN SYSTEM
import { styled } from 'stitches.config';

const LogoBox = styled('div', {
  display: 'block',
  width: '40%',
  height: 'auto',
  backgroundColor: 'transparent',

  alignItems: 'left',
  textAlign: 'left',

  zIndex: '999',
});

const LogoLink = styled('a', {
  color: '$rhythm11',
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: 'normal',
  lineHeight: 'normal',
  mixBlendMode: 'difference',
});

const ToggleBox = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  width: '10%',
  height: 'auto',
  // backgroundColor: '$blue8',

  alignItems: 'right',
  textAlign: 'right',

  zIndex: '999',
});

const NavLinks = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: 'auto',
  height: 'auto',
  // backgroundColor: '$orange8',

  alignItems: 'center',
  textAlign: 'center',
  margin: 'auto',
  textDecoration: 'none',

  zIndex: '999',
});

export const Header = () => {
  return (
    <>
      <Box
        css={{
          backgroundColor: 'transparent',
          display: 'block',
          margin: 'auto',
          padding: '0px',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '680px',
          width: '100%',
          // zIndex: '9999',

          '@sm': {
            maxWidth: '100%',
            width: '100%',
          },
        }}>
        <Flex
          as="header"
          css={{
            display: 'inline-flex',
            textAlign: 'center',
            alignItems: 'center',
            paddingTop: '0px',
            paddingBottom: '0px',
            paddingLeft: '20px',
            paddingRight: '20px',
            height: '50px',
            justifyContent: 'space-between',
            position: 'fixed',
            margin: '0',
            backgroundColor: 'transparent',
            // backgroundColor: '$rhythm8',
            width: '100%',
            maxWidth: '700px',
            // backdropFilter: 'blur(12px)',
            // WebkitBackdropFilter: 'blur(12px)',
            // saturate: '200%',
          }}>
          <LogoBox>
            <LogoLink href="/">
              <strong>Chandler</strong>.Ch®
            </LogoLink>
          </LogoBox>

          <NavLinks>
            <NewLink
              href="/blog"
              css={{
                lineHeight: 'normal',
                marginRight: '12px',
                marginLeft: '12px',
                fontFamily: '$inter',
                fontSize: '13px',
                fontWeight: 'normal',

                textDecoration: 'none',

                '&:hover': {
                  textDecoration: 'none',
                },
              }}>
              blog
            </NewLink>
            <NewLink
              href="/projects"
              css={{
                lineHeight: 'normal',
                marginRight: '12px',
                marginLeft: '12px',
                fontFamily: '$inter',
                fontSize: '13px',
                fontWeight: 'normal',

                textDecoration: 'none',

                '&:hover': {
                  textDecoration: 'none',
                },
              }}>
              projects
            </NewLink>
            <NewLink
              href="/me"
              css={{
                lineHeight: 'normal',
                marginRight: '12px',
                marginLeft: '12px',
                fontFamily: '$inter',
                fontSize: '13px',
                fontWeight: 'normal',

                textDecoration: 'none',

                '&:hover': {
                  textDecoration: 'none',
                },
              }}>
              about
            </NewLink>
          </NavLinks>

          <ToggleBox>
            <ThemeSwitch />
          </ToggleBox>
        </Flex>
      </Box>
    </>
  );
};
