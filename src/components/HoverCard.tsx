// REACT IMPORTS
import React from 'react';
import Link from 'next/link';

// STITCHES & RADIX-UI IMPORTS
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { keyframes } from '@stitches/react';

import { TwitterLogo } from '@/components/TwitterLogo';

// ATELIER® DESIGN SYSTEM
import { styled } from 'stitches.config';
import { Box, Text, Paragraph } from 'atelier.design';

const chvnImage = 'https://pbs.twimg.com/profile_images/1514845619222941696/Rewx3uqs_400x400.jpg';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  border: '2px solid $sage7',
  borderRadius: '22px',
  padding: '18px',
  width: '300',
  lineHeight: '1.2',
  backgroundColor: '$sage3',
  color: '$gray12',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

/*
const StyledArrow = styled(HoverCardPrimitive.Arrow, {
  margin: '0',
  padding: '0',
  fill: '$sage3',
  width: '40px',
  height: '30px',
  borderRadius: '4px',
});
*/

// Exports..
export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;
// export const HoverCardArrow = StyledArrow;

const Flex = styled('div', { display: 'flex' });

const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
});

const Img = styled('img', {
  display: 'block',
  borderRadius: '32px',
  border: '2px solid $sage7',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 5px 20px -5px, hsl(206 22% 7% / 20%) 0px 5px 8px 1px',
  variants: {
    size: {
      normal: { width: 85, height: 85 },
      large: { width: 115, height: 115 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

const ContentImg = styled('img', {
  display: 'block',
  borderRadius: '50%',
  border: '2px solid $sage7',
  // boxShadow: 'hsl(206 22% 7% / 35%) 0px 5px 20px -5px, hsl(206 22% 7% / 20%) 0px 5px 8px 1px',
  variants: {
    size: {
      normal: { width: 85, height: 85 },
      large: { width: 115, height: 115 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

// HoverCard Component...
export const HoverCardComponent = () => {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <ImageTrigger href="/welcome">
            <Box css={{ paddingLeft: '0', paddingBottom: '8px' }}>
              <Img size="normal" src={chvnImage} alt="Chandler Chappell" />
            </Box>
          </ImageTrigger>
        </HoverCardTrigger>

        <HoverCardContent sideOffset={5}>
          <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <ContentImg src={chvnImage} alt="Chandler Chappell" />
            <Flex css={{ flexDirection: 'column', gap: 15 }}>
              <Text css={{ fontFamily: '$inter' }}>
                <Text size="2" css={{ color: '$sage9', fontFamily: '$inter', fontWeight: '600', paddingBottom: '4px' }}>
                  chan
                </Text>
                <Text size="1" css={{ color: '$sage8', fontFamily: '$inter', fontWeight: '400' }}>
                  @chv_ndler
                </Text>
              </Text>
              <Paragraph size="1" css={{ color: '$sage9', fontSize: '13px', fontFamily: '$inter', fontWeight: '400' }}>
                everybody think im cool i don't like that.
              </Paragraph>
              <Flex css={{ gap: 15 }}>
                <Flex css={{ gap: 5 }}>
                  <Text size="1" css={{ color: '$superLogo', letterSpacing: '-0.05rem', fontFamily: '$inter', fontWeight: '600' }}>
                    181
                  </Text>{' '}
                  <Text size="1" css={{ color: '$sage8', fontFamily: '$inter' }}>
                    Following
                  </Text>
                </Flex>
                <Flex css={{ gap: 5 }}>
                  <Text size="1" css={{ color: '$superLogo', letterSpacing: '-0.05rem', fontFamily: '$inter', fontWeight: '600' }}>
                    333
                  </Text>{' '}
                  <Text size="1" css={{ color: '$sage8', fontFamily: '$inter' }}>
                    Followers
                  </Text>
                </Flex>
                <br />
                <Flex css={{ gap: 5 }}>
                  <TwitterLogo />
                  <Link href="https://twitter.com/chv_ndler">
                    <a target="_blank" rel="norefferer noopener">
                      <Text
                        css={{
                          color: '$blue8',
                          lineHeight: '15px',
                          alignItems: 'center',
                          fontFamily: '$inter',
                          fontWeight: '800',
                          fontSize: '11px',
                        }}>
                        FOLLOW ME
                      </Text>
                    </a>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </HoverCardContent>
      </HoverCard>
    </>
  );
};
