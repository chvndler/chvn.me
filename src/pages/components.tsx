import { Box, Heading, Text, TextField } from 'atelier.design';
import { AccordionComponent } from '@/components/AccordionComponent';

// APP BEGIN / Components Page
const Components = () => {
  return (
    <>
      <Box css={{ minWidth: '100vw' }}>
        <Heading size="3">Custom Components</Heading>
        <Heading size="2">Custom Components</Heading>
        <Heading size="1">Custom Components</Heading>
        <Text size="3">Text Size 3</Text>
        <Text size="2">Text Size 2</Text>
        <Text size="1">Text Size 1</Text>

        <AccordionComponent />
      </Box>
    </>
  );
};

export default Components;