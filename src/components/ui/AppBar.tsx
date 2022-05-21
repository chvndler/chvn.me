import React from 'react';

// ATELIER® DESIGN SYSTEM
import { styled } from 'stitches.config';

const GradientBar = styled('div', {
  position: 'fixed',
  width: '100vw',
  height: '9px',
  left: '0',
  top: '0',
  // background: 'linear-gradient(110deg, $blue9 0%, $orange10 40%, $lime9 100%)',
  backgroundColor: 'linear-gradient(110deg, $chvn4 0%, $chvn6 40%, $chvn7 100%)',
  //backgroundColor: '-webkit-linear-gradient(to right, $chvn4 0%,, $chvn6 40%, $chvn7 100%)',

  zIndex: '999',
});

export const AppBar = () => {
  return (
    <>
      <GradientBar />
    </>
  );
};
