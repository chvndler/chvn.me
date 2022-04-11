// REACT IMPORTS
import React from 'react';

// STITCHES & RADIX-UI IMPORTS
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { keyframes } from '@stitches/react';

import { Box } from '@/system/box';
// import Avatar from 'boring-avatars';

// ATELIER® DESIGN SYSTEM
import { styled } from 'stitches.config';
import { Text } from '@/system/text';

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
  borderRadius: '6px',
  padding: '20px',
  width: '300',
  lineHeight: '1.2',
  backgroundColor: '$slate3',
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

const StyledArrow = styled(HoverCardPrimitive.Arrow, {
  fill: '$slate6',
});

// Exports
export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;
export const HoverCardArrow = StyledArrow;

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

// HoverCard Component...
export const HoverCardComponent = () => {
  return (
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <ImageTrigger href="/welcome">
            <Box css={{ paddingLeft: '0', paddingBottom: '8px' }}>
              {/* <!-- Disable Boring Avatar
              <Avatar
                size={55}
                name="ADY®"
                variant="marble"
                colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
              />
              --> */}

              <Img size="normal" src="https://cdn.ady.systems/chvn/avatar/chvnAvatar02.PNG" alt="Chandler Chappell" />
            </Box>
          </ImageTrigger>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={5}>
          <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <Img src="https://cdn.ady.systems/chvn/avatar/chvnAvatar01.jpg" alt="Chandler Chappell" />

            <Flex css={{ flexDirection: 'column', gap: 15 }}>
              <Text css={{ color: '$gray12', fontFamily: '$inter' }}>
                <Text css={{ color: '$gray12', fontFamily: '$inter' }}>Name</Text>
                <Text css={{ color: '$gray12', fontFamily: '$inter' }}>@handle</Text>
              </Text>
              <Text css={{ color: '$gray12', fontFamily: '$inter' }}>
                Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source.
              </Text>
              <Flex css={{ gap: 15 }}>
                <Flex css={{ gap: 5 }}>
                  <Text css={{ color: '$gray12', fontFamily: '$inter' }}>0</Text> <Text css={{ fontFamily: '$inter' }}>Following</Text>
                </Flex>
                <Flex css={{ gap: 5 }}>
                  <Text css={{ color: '$gray12', fontFamily: '$inter' }}>2,900</Text> <Text css={{ fontFamily: '$inter' }}>Followers</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <HoverCardArrow />
        </HoverCardContent>
      </HoverCard>
    </>
  );
};
