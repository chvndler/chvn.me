import React from 'react';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from 'atelier.design';
import { styled } from 'stitches.config';

const GradientBar = styled('div', {
  position: 'fixed',
  width: '100vw',
  height: '10px',
  left: '0',
  top: '0',
  background: 'linear-gradient(110deg, $blue9 0%, $orange10 40%, $lime9 100%)',

  zIndex: '9999',
});

export const AppBar = () => {
  return (
    <>
      <GradientBar />
    </>
  );
};
