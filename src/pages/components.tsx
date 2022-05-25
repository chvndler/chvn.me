import { Box, Heading, Text, Container, Section } from 'atelier.design';
import { SmallSpacer } from '@/components/space';
import { CustomContainer } from '@/components/CustomContainer';
import { Grid } from '@/system';

// APP BEGIN / Components Page
const Components = () => {
  return (
    <>
      <Box css={{ minWidth: '100vw', paddingTop: '80px', bc: '$rhythmA1' }}>
        <Section size="2">
          <Container size="3" css={{ bc: '$rhythmA2', padding: '10px' }}>
            <Heading size="4" css={{ fontWeight: '600' }}>
              Heading 4
            </Heading>
            <Heading size="3">Heading 3</Heading>
            <Heading size="2">Heading 2</Heading>
            <Heading size="1">Heading 1</Heading>
            <SmallSpacer />
            <Text size="3">Text Size 3</Text>
            <Text size="2">Text Size 2</Text>
            <Text size="1">Text Size 1</Text>
          </Container>
        </Section>

        <CustomContainer css={{ bc: '$rhythmA4', borderRadius: '10px', padding: '18px', marginBottom: '10px' }}>
          <Text size="1">MY CUSTOM CONTAINER</Text>
          <Text size="2" css={{ fontWeight: '600' }}>
            Connect
          </Text>
        </CustomContainer>

        <Container size="4" css={{ bc: '$rhythmA4', padding: '10px' }}>
          <Text size="2">Container Size = 4</Text>
        </Container>
        <Container size="3" css={{ bc: '$rhythmA5', padding: '10px' }}>
          <Text size="2">Container Size = 3</Text>
        </Container>
        <Container size="2" css={{ bc: '$rhythmA6', padding: '10px' }}>
          <Text size="2">Container Size = 2</Text>
        </Container>
        <Container size="1" css={{ bc: '$rhythmA7', padding: '10px' }}>
          <Text size="2">Container Size = 1</Text>
        </Container>

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
              <Box css={{ height: '200px', width: 'auto', bc: '$superLime', padding: '20px' }}>( $superLime)</Box>
              <Box css={{ height: '200px', width: 'auto', bc: '$superLime3', padding: '20px' }}>( $superLime3 )</Box>
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
            </Grid>
          </Container>
        </Section>
      </Box>
    </>
  );
};

export default Components;
