import React from 'react'
import Router from 'next/router'
import NextLink from 'next/link'

// ATELIER® DESIGN SYSTEM
import { Box } from '@system/box'
import { Flex } from '@system/flex'
import { Text } from '@system/text'
import { Link } from '@system/link'
// import { ThemeSwitch } from '@components/theme_switch'
// import { PopoverPanel } from '@fnctns/PopoverPanel'
import { CaretRightIcon } from '@radix-ui/react-icons'

const Navbar = () => {
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
          backgroundColor: '$light100',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          saturate: '300%',

          zIndex: '9999'
        }}
      >
        {/* <!-- LOGO SECTION --> */}
        <NextLink href="/atelier" passHref>
          <Box
            as="a"
            css={{
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none'
              },
              '@bp2': { ml: '$5' }
            }}
          >
            <Text
              css={{
                zIndex: '999',
                fontFamily: '$neuewide',
                fontWeight: '800',
                fontSize: '18px',
                color: '$gray12',
                lineHeight: '48px',
                letterSpacing: '-0.03rem'
              }}
            >
              ATELIER®
            </Text>
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}
        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: '$inter',
            fontSize: '12px',
            '@sm': {
              display: 'none'
            }
          }}
        >
          <NextLink href="/shop" passHref>
            <Link
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$gray12',
                '@sm': { marginRight: '$2' }
              }}
            >
              Shop <CaretRightIcon />
            </Link>
          </NextLink>

          <NextLink href="/showcase" passHref>
            <Link
              variant="subtle"
              css={{
                marginRight: '$3',
                color: '$gray12',
                '@sm': { marginRight: '$2' }
              }}
            >
              Showcase
            </Link>
          </NextLink>

          <NextLink href="https://docs.ady.world" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' }
              }}
            >
              Docs
            </Link>
          </NextLink>
          <NextLink href="https://developer.ady.world" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$5' }
              }}
            >
              Blog
            </Link>
          </NextLink>
        </Flex>
        {/* <!-- JSX ELEMENT --> */}

        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: '$inter',
            fontSize: '12px'
          }}
        >
          {/* <!-- THEME SWITCH
          <ThemeSwitch />
          --> */}

          {/* <!-- JSX ELEMENT --> */}
          <Link
            href="/login"
            // target="_blank"
            // rel="norefferer"
            css={{
              fontSize: '13px',
              color: '$gray12',
              border: '0px solid $crimson9',
              borderRadius: '6px',
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingLeft: '10px',
              paddingRight: '10px',
              mr: '$3',
              '@sm': { display: 'none', mr: '$3' },
              '&:hover': { cursor: 'pointer' }
            }}
          >
            Log In
          </Link>
          {/* <!--
          <PopoverPanel />
          -->*/}
        </Flex>
      </Flex>
    </>
  )
}
