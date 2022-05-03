import React from 'react';

// ATELIER® DESIGN SYSTEM
import { styled } from 'stitches.config';

const GradientBar = styled('div', {
  position: 'fixed',
  width: '100vw',
  height: '6px',
  left: '0',
  top: '0',
  // background: 'linear-gradient(110deg, $blue9 0%, $orange10 40%, $lime9 100%)',
  background: 'linear-gradient(110deg, #3A1C71 0%, #D76D77 40%, #FFAF7B 100%)',
  // background: '-webkit-linear-gradient(to right, #5D26C1, #a17fe0, #59C173)',

  //background: '#59C173',

  zIndex: '9999',
});

export const AppBar = () => {
  return (
    <>
      <GradientBar />
    </>
  );
};
