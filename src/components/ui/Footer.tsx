// React Imports
import React from 'react';
import NextLink from 'next/link';

// ATELIER® DESIGN YIELD
import { Box } from '@/system/box';
import { Container } from '@/system/container';
import { Grid } from '@/system/grid';
import { Text } from '@/system/text';

// Stitches
import { styled } from '@stitches/react';

const Card = styled('div', {
  display: 'flex',
  backgroundColor: 'none',
  position: 'relative',
  bottom: '0',
  left: '0',
  right: '0',
  borderRadius: '20px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none',

  height: '120px',
});

export const Footer = () => {
  return (
    <>
      <Box
        css={{
          borderTop: '2px solid',
          borderColor: '$lime4',
          bc: '$translucent',
          paddingTop: '30px',
          paddingBottom: '80px',
          margin: 'auto',
          px: '0',
          height: 'auto',
        }}>
        {/* NAVIGATION SECTION */}
        <Container size="3" css={{ px: '18px' }}>
          <Grid
            css={{
              gap: '0px',
              gridTemplateColumns: '1fr',
              '@bp1': {
                gap: '0px',
                gridTemplateColumns: '1fr 1fr 1fr',
              },
              '@bp2': {
                gap: '0px',
                gridTemplateColumns: '1fr 1fr 1fr',
              },
            }}>
            {/* PRODUCT ROW ONE */}

            <Box>
              <Card>
                <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                  <Text
                    size="2"
                    css={{
                      fontFamily: '$inter',
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '1.4',
                      textAlign: 'left',
                    }}>
                    https://chvn.me
                  </Text>

                  <Text
                    size="1"
                    css={{
                      fontWeight: '400',
                      fontSize: '11px',
                      lineHeight: '1.5',
                      letterSpacing: '-.03rem',
                    }}>
                    Copyright © 2021
                  </Text>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                  <Text css={{ fontSize: '15px', fontWeight: '700', lineHeight: '2' }}>Projects</Text>

                  {/* (Information) FOOTER LINK 01 */}
                  <NextLink href="/privacy" passHref>
                    <Text
                      size="1"
                      css={{
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '2',
                        '&:hover': {
                          cursor: 'pointer',
                        },
                      }}>
                      Current Projects
                    </Text>
                  </NextLink>

                  {/* (Information) FOOTER LINK 02 */}
                  <NextLink href="/privacy" passHref>
                    <Text
                      size="1"
                      css={{
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '2',
                        '&:hover': {
                          cursor: 'pointer',
                        },
                      }}>
                      Film
                    </Text>
                  </NextLink>

                  {/* (Information) FOOTER LINK 03 */}
                  <Text size="1" css={{ fontWeight: '400', fontSize: '13px', lineHeight: '2' }}>
                    Archive
                  </Text>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                  <Text css={{ fontSize: '15px', fontWeight: '700', lineHeight: '2' }}>Connect</Text>

                  {/* (RESOURCES) FOOTER LINK 01 */}
                  <NextLink href="/test" passHref>
                    <Text
                      size="1"
                      css={{
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '2',
                        '&:hover': {
                          cursor: 'pointer',
                        },
                      }}>
                      Twitter
                    </Text>
                  </NextLink>

                  {/* (RESOURCES) FOOTER LINK 02 */}
                  <NextLink href="/connect" passHref>
                    <Text
                      size="1"
                      css={{
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '2',
                        '&:hover': {
                          cursor: 'pointer',
                        },
                      }}>
                      Are.na
                    </Text>
                  </NextLink>

                  <NextLink href="/connect" passHref>
                    <Text
                      size="1"
                      css={{
                        fontWeight: '400',
                        fontSize: '13px',
                        lineHeight: '2',
                        '&:hover': {
                          cursor: 'pointer',
                        },
                      }}>
                      GitHub
                    </Text>
                  </NextLink>

                  {/* (RESOURCES) FOOTER LINK 03 */}
                  <Text size="1" css={{ fontWeight: '400', fontSize: '13px', lineHeight: '2' }}>
                    Instagram
                  </Text>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
