import React from 'react';
import NextLink from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@/system/box';
import { Flex } from '@/system/flex';
import { Text } from '@/system/text';

export const CoverFooter = () => {
  return (
    <>
      <Flex
        as="footer"
        css={{
          py: '11px',
          px: '5px',
          jc: 'center',
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          margin: '0',
          backgroundColor: 'transparent',
          width: '100vw',
          // backdropFilter: 'blur(10px)',
          // WebkitBackdropFilter: 'blur(10px)',
          saturate: '300%',

          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              alignItems: 'center',
              textAlign: 'center',
              ml: '8px',
              mr: '8px',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '8px', mr: '8px' },
            }}>
            <Text
              css={{
                textAlign: 'center',
                zIndex: '999',
                fontWeight: 'bold',
                fontSize: '12px',
                color: '$rhythm8',
                lineHeight: '30px',
                mr: '10px',

                '&:hover': {
                  color: '$rhythm9',
                },
              }}>
              ©hvn.
            </Text>
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}
      </Flex>
    </>
  );
};
