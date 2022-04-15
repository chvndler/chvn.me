import React from 'react';
import Link from 'next/link';
import { Box, Text, Heading } from 'atelier.design';

import { styled } from '@stitches/react';

const Title = styled('div', {
  // mixBlendMode: 'difference',
  color: '$superLogo',
  fontFamily: '$inter',
  fontSize: '15px',
  fontWeight: '800',
  marginBottom: '10px',
  lineHeight: '1',

  // textTransform: 'uppercase',
});

const Artist = styled('div', {
  // mixBlendMode: 'difference',
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '1',

  color: '$sage8',
});

const Card = styled('div', {
  display: 'flex',
  backgroundColor: '$translucent',
  border: 'solid 1px $slate7',
  // borderTopWidth: '0',
  // borderBottomWidth: '1px',
  // borderLeftWidth: '0',
  // borderRightWidth: '0',
  position: 'relative',
  borderRadius: '8px',
  marginTop: '4px',
  marginBottom: '0',
  padding: '18px',
  alignItems: 'left',
  webkitScrollbar: 'none',
  height: '110px',

  '&:hover': {
    // color: '$slate1',
    cursor: 'pointer',
    backgroundColor: '$sage3',
  },
});

export default function Track(track) {
  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <Card css={{}}>
          <section>
            <Box
              css={{
                position: 'absolute',
                bottom: '0',
                left: '0',

                marginLeft: '18px',
                marginRight: '18px',
                marginBottom: '20px',
              }}>
              <Heading size="1" css={{}}>
                {track.ranking}
              </Heading>

              <Link href={track.songUrl} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Title>{track.title}</Title>
                </a>
              </Link>

              <Text>
                <Artist>{track.artist}</Artist>
              </Text>
            </Box>
          </section>
        </Card>
      </Box>
    </>
  );
}
