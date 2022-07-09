import { Box } from '@/system/box';
import { darkTheme, styled } from 'stitches.config';
import React from 'react';

export const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$5',
  px: '$4',
  fontFamily: '$inter',
  fontWeight: '600',
  borderRadius: '$2',
  fontSize: '13px',
  lineHeight: '$sizes$6',

  backgroundColor: '$rhythmA12',
  color: '$rhythm1',
  boxShadow: '$$backlight',

  $$backlight: `
    0 0 0 2px $colors$purpleA6,
    -5px 0 20px -5px $colors$purpleA9,
    0 0 30px -5px $colors$redA8,
    15px 0 30px -5px $colors$purpleA8
  `,

  '&:focus': {
    boxShadow: '$$backlight, 0 0 0 2px $colors$blueA8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: '$$backlight',
  },
  '&:disabled': {
    bc: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },
  '&[href]': {
    cursor: 'pointer',
  },

  [`.${darkTheme} &`]: {
    color: '$white',
    backgroundColor: '$rhythm4',
    boxShadow: '$$backlight',
    $$backlight: `
      0 0 0 2px $colors$rhythmPx,
      -5px 0 20px -5px $colors$orangeA8,
      0 0 30px -5px $colors$pinkA8,
      15px 0 30px -5px $colors$rhythmPx
    `,
    '&:focus': {
      boxShadow: '$$backlight, 0 0 0 2px $colors$blueA8',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: '$$backlight',
    },
  },
});

type MarketingButtonProps = {
  as: any;
  icon?: React.ComponentType<any>;
} & React.ComponentProps<typeof StyledButton>;

export const MarketingButton = React.forwardRef<HTMLButtonElement, MarketingButtonProps>(
  ({ children, icon: Icon, ...props }, forwardedRef) => {
    return (
      <StyledButton ref={forwardedRef} {...props}>
        {children}
        {Icon && (
          <Box as="span" css={{ ml: 8, mr: -3 }}>
            <Icon />
          </Box>
        )}
      </StyledButton>
    );
  },
);
