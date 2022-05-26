import Head from 'next/head';
import { Box, Text, Heading } from '@/system';
// import { SocialLinks } from '@/components/SocialLinks';

import { styled } from 'stitches.config';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100%',
  minWidth: '100vw',
  height: '100%',
  minHeight: '100vh',
  // backgroundColor: '$translucent',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  saturate: '300%',
  overflowY: 'hidden',
  overflowX: 'hidden',
});

const TextBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

export default function Intro() {
  return (
    <>
      <Box
        css={{
          position: 'fixed',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          padding: '0px',
          height: '100vh',
          width: '100vw',
          zIndex: '0',
          overflowY: 'visible',
          overflowX: 'visible',
        }}>
        <Head>
          <title>chvn.me/</title>
        </Head>

        <CoverBox>
          <TextBox>
            <Heading
              size="3"
              css={{
                color: '$rhythmA12',
                lineHeight: 'normal',
                fontFamily: '$inter',
                fontWeight: '800',
              }}>
              Chandler Chappell
            </Heading>
            <Text css={{ color: '$rhythm9', fontSize: '16px', fontWeight: '500', lineHeight: 'normal' }}>
              Front-end Developer, Designer, and Director
            </Text>

            {/* <!-- <SocialLinks /> --> */}
          </TextBox>
        </CoverBox>
      </Box>
    </>
  );
}
