import { Box, Heading, Text, Container, Section } from 'atelier.design';
import { SmallSpacer } from '@/components/space';
import { CustomContainer } from '@/components/CustomContainer';
import { Grid } from '@/system';
import { RhythmColorSystem } from '@/components/RhythmColorSystem';

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

        <RhythmColorSystem />
      </Box>
    </>
  );
};

export default Components;
