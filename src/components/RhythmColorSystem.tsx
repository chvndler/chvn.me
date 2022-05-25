import React from 'react';
import { Section, Container, Heading, Grid, Box, Text } from '@/system';

export const RhythmColorSystem = () => {
  return (
    <>
      <Section size="3">
        <Container size="3">
          <Heading size="2">
            <strong>rhythm</strong> Color System.
          </Heading>
          <Heading size="1" css={{ fontFamily: '$inter', fontSize: '13px' }}>
            ($rhythm~x) by Atelier Design Yield®.
          </Heading>

          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{
              gap: '8px',
              placeItems: 'stretch',
              gridAutoRows: '200px',
              mb: '$8',
              fontSize: '12px',
              fontWeight: '600',
            }}>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm1', padding: '20px' }}>( $rhythm1 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm2', padding: '20px' }}>( $rhythm2 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm3', padding: '20px' }}>( $rhythm3 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm4', padding: '20px' }}>( $rhythm4 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm5', padding: '20px' }}>( $rhythm5 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm6', padding: '20px' }}>( $rhythm6 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm7', padding: '20px' }}>( $rhythm7 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm8', padding: '20px' }}>( $rhythm8 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm9', padding: '20px' }}>( $rhythm9 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm10', padding: '20px' }}>( $rhythm10 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm11', padding: '20px' }}>( $rhythm11 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythm12', padding: '20px' }}>( $rhythm12 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhyth00', padding: '20px' }}>( $rhythm00 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmLx', padding: '20px' }}>( $rhythmLx )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmPx', padding: '20px' }}>( $rhythmPx )</Box>
          </Grid>
        </Container>
      </Section>

      <Section size="3">
        <Container size="3">
          <Heading size="2">
            <strong>rhythm</strong> Alpha Test.
          </Heading>
          <Heading size="1" css={{ fontFamily: '$inter', fontSize: '13px' }}>
            ($rhythmAx)
          </Heading>

          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{
              gap: '8px',
              placeItems: 'stretch',
              gridAutoRows: '200px',
              mb: '$8',
              fontSize: '12px',
              fontWeight: '600',
            }}>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA1', padding: '20px' }}>( $rhythmA1 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA2', padding: '20px' }}>( $rhythmA2 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA3', padding: '20px' }}>( $rhythmA3 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA4', padding: '20px' }}>( $rhythmA4 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA5', padding: '20px' }}>( $rhythmA5 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA6', padding: '20px' }}>( $rhythmA6 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA7', padding: '20px' }}>( $rhythmA7 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA8', padding: '20px' }}>( $rhythmA8 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA9', padding: '20px' }}>( $rhythmA9 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA10', padding: '20px' }}>( $rhythmA10 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA11', padding: '20px' }}>( $rhythmA11 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA12', padding: '20px' }}>( $rhythmA12 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmA00', padding: '20px' }}>( $rhythmA00 )</Box>
            <Box css={{ height: '200px', width: 'auto', bc: '$rhythmALime', padding: '20px' }}>( $rhythmALime )</Box>
          </Grid>
        </Container>
      </Section>

      <Section size="3">
        <Container size="3">
          <Heading size="2">
            <strong>rhythm</strong> Type Testing.
          </Heading>
          <Heading size="1" css={{ fontFamily: '$inter', fontSize: '13px' }}></Heading>

          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{
              gap: '8px',
              placeItems: 'stretch',
              gridAutoRows: '200px',
              mb: '$8',
              fontSize: '12px',
              fontWeight: '600',
            }}>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm1' }}>
              ( $rhythm1 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm2' }}>
              ( $rhythm2 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm3' }}>
              ( $rhythm3 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm4' }}>
              ( $rhythm4 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm5' }}>
              ( $rhythm5 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm6' }}>
              ( $rhythm6 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm7' }}>
              ( $rhythm7 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm8' }}>
              ( $rhythm8 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm9' }}>
              ( $rhythm9 )
            </Text>
            <Text css={{ fontSize: '24px', fontFamily: '$inter', fontWeight: '700', color: '$rhythm10' }}>
              ( $rhythm10 )
            </Text>
          </Grid>
        </Container>
      </Section>
    </>
  );
};
