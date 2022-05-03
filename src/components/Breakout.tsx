import { ReactNode, useEffect } from 'react';
import { styled } from 'stitches.config';

interface Props {
  children: ReactNode;
}

const ContainerHack = styled('div', {
  margin: '0 auto',
  width: '0',
});

const BreakoutContainer = styled('div', {
  width: 'calc(100vw - var(--scrollbar-width, 0px))',
  marginLeft: '-50vw',
  padding: '12px',

  fontFamily: '$inter',
  fontSize: '48px',
  fontWeight: '600',
  letterSpacing: '-0.2rem',
});

export const Breakout = ({ children }: Props) => {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--scrollbar-width',
      window.innerWidth - document.documentElement.clientWidth + 'px',
    );
  });

  return (
    <>
      <ContainerHack>
        <BreakoutContainer>{children}</BreakoutContainer>
      </ContainerHack>
    </>
  );
};
