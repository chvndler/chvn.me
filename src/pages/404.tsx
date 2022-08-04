import Link from 'next/link';

import { Box, Section, Heading, Text } from '@/system';
import { CustomContainer } from '@/components/CustomContainer';
import { DefaultButton } from '@/components/buttons/DefaultButton';
// Components..
import { Navbar } from '@/ui/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <Section size="3" css={{ paddingTop: '100px' }}>
        <CustomContainer>
          <Heading size="3" css={{ fontFamily: '$inter', paddingBottom: '20px' }}>
            451
          </Heading>
          <Heading size="2" css={{ fontFamily: '$inter', paddingBottom: '20px' }}>
            Unavailable For Legal Reasons
          </Heading>
          <Text size="3" css={{ lineHeight: '1.4' }}>
            Why show a generic 404 when I can make it sound mysterious? It seems you've found something that used to exist, or you spelled something
            wrong. I'm guessing you spelled something wrong. Can you double check that URL?
          </Text>

          <Box css={{ paddingTop: '40px' }}>
            <Link href="/" passHref>
              <DefaultButton color="lime">Return Home</DefaultButton>
            </Link>
          </Box>
        </CustomContainer>
      </Section>
    </>
  );
}
