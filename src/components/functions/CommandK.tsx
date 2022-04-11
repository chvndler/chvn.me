import React from 'react';
import * as KBarProvider from 'kbar';
import { KBarPortal, KBarPositioner, KBarAnimator, KBarSearch } from 'kbar';
import { violet, blackA, mauve } from '@radix-ui/colors';
import { DefaultButton } from '@/components/buttons/DefaultButton';
import { Box, Text } from 'atelier.design';

import { styled, keyframes } from '@stitches/react';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(KBarPortal.Overlay, {
  backgroundColor: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
});

const StyledContent = styled(KBarPositioner.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
  '&:focus': { outline: 'none' },
});

function Content({ children, ...props }) {
  return (
    <KBarPortal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </KBarPortal>
  );
}

// Exports
export const KBar = KBarProvider.Root;
export const KBarContent = Content;
export const KBarClose = KBarProvider.Close;

// ...
const CommandK = () => {
  // KBar Actions..
  const actions = [
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['b'],
      keywords: 'writing words',
      perform: () => (window.location.pathname = 'blog'),
    },
    {
      id: 'contact',
      name: 'Contact',
      shortcut: ['c'],
      keywords: 'email',
      perform: () => (window.location.pathname = 'contact'),
    },
  ];

  return (
    <>
      <KBar>
        <KBarProvider actions={actions}>
          {/* <!-- // Handles the show/hide and height animations --> */}
          <KBarPortal>
            {/* <!-- Centers the content --> */}
            <KBarPositioner>
              <KBarAnimator>
                <KBarContent>
                  <Box css={{ height: '400px', width: '500px', bc: '$blue4' }}>
                    {/* <!-- // Begin Dialog --> */}
                    <KBarSearch />
                    <Text size="1">Command One</Text>
                    <KBarClose asChild>
                      <button aria-label="Close">Save changes</button>
                    </KBarClose>
                  </Box>
                </KBarContent>
              </KBarAnimator>
            </KBarPositioner>
          </KBarPortal>
        </KBarProvider>
      </KBar>
    </>
  );
};

export default CommandK;
