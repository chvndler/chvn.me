import React from 'react';
import { styled } from 'stitches.config';
import { blackA } from '@radix-ui/colors';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 8;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: '100%',
  height: '90%',
  borderRadius: 0,
  overflow: 'hidden',
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: '2px',
  borderRadius: SCROLLBAR_SIZE,
  background: '$blackA9',
  transition: 'background 160ms ease-out',
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$mauve9',
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: '$blackA8',
});

// Exports
export const ScrollArea = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

// Your app...
const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
  margin: '0',
});

const Tag = styled('a', {
  color: '$gray9',
  fontSize: '14px',
  lineHeight: '16px',
  marginTop: '8px',
  // borderTop: `1px solid $colors$mauveA5`,
  paddingTop: 8,

  '&:hover': {
    color: '$gray10',
  },
});

// const TAGS = Array.from({ length: 10 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

import { dTags as DTAGS } from '@/projects/design-tags';

export const ScrollBox = () => (
  <ScrollArea>
    <ScrollAreaViewport css={{ backgroundColor: 'transparent' }}>
      <Box>
        {DTAGS.map(tag => (
          <Tag key={tag.key} href={tag.url} target="_blank" rel="norefferrer noopener">
            {tag.tag}
          </Tag>
        ))}
      </Box>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollArea>
);
