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
  height: 'auto',
  marginLeft: '-50vw',
  padding: '12px',

  border: '1px dashed $sage4',
  borderTopWidth: '0',
  borderBottomWidth: '1px',
  borderLeftWidth: '0',
  borderRightWidth: '0',

  // backgroundImage: 'linear-gradient(25deg, #03bafb, #a4bab8, #f2f2f2, #fff)',
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
