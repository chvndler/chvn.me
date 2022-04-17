import React from 'react';
// import { Fragment } from 'react';
import { useState } from 'react';
import { keyframes } from '@stitches/react';
import { styled } from 'stitches.config';
import { SmallSpacer, MediumSpacer } from '@/components/space';
// import { DotFilledIcon, CheckIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Cross as Hamburger } from 'hamburger-react';
import { Box, Text } from 'atelier.design';

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

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: '94vw',
  backgroundColor: '$sage12',
  borderRadius: '20px',
  padding: '10px',
  margin: 'auto',
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationFillMode: 'forwards',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: 'unset',
  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '22px',
  lineHeight: '2',
  color: '$superLogo',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  height: 'auto',
  padding: '0 5px',
  position: 'relative',
  paddingLeft: '25px',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$lime9',
    color: '$lime1',
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: '$lime4',
    color: '$lime11',
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: '$mauve11',
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: 'white',
});

// Exports
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuLabel = StyledLabel;
// export const DropdownMenuSeparator = StyledSeparator;
export const DropdownMenuArrow = StyledArrow;

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: '0',
  paddingRight: '20px',
  fontSize: '14px',
  color: '$mauve11',
  ':focus > &': { color: 'white' },
  '[data-disabled] &': { color: '$mauve8' },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '20%',
  height: 40,
  width: 40,
  padding: '0',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$lime9',
  backgroundColor: '$translucent',
  boxShadow: `0 2px 10px $blackA7`,
  '&:hover': { backgroundColor: '$translucent' },
  '&:focus': { boxShadow: `0 0 0 2px transparent` },
});

export const MobileDropdown = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            {/* <!--  <HamburgerMenuIcon /> --> */}
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              direction="right"
              duration={0.4}
              distance="sm"
              color="blue"
              hideOutline={true}
            />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <SmallSpacer />
          <DropdownMenuItem>
            index <RightSlot>⌘+T</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            projects <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            blog <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <DropdownMenuItem>
            contact <RightSlot>⌘+N</RightSlot>
          </DropdownMenuItem>
          <MediumSpacer />

          <Box css={{ width: '100%' }}>
            <Text size="1" css={{ color: '$white', textAlign: 'left', alignItems: 'left' }}>
              Copyright © 2022
            </Text>
          </Box>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default MobileDropdown;
