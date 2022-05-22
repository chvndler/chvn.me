import React from 'react';
import { Box, Container } from '@/system';
// import { styled } from 'stitches.config';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';

type AspectRatioComponentProps = { ratio?: string; children?: JSX.Element[] };

// Exports
export const AspectRatio = AspectRatioPrimitive;

// Your app...
/*
const Img = styled('img', {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});
*/

export const AspectRatioComponent = ({ ratio, children, ...props }: AspectRatioComponentProps) => {
  return (
    <Container size="3">
      <Box
        css={{
          width: '100%',
          borderRadius: '18px',
          border: '1.5px solid $chvn7',
          overflow: 'hidden',
          // boxShadow: `0 2px 10px $gray11`,
        }}>
        <AspectRatio.Root ratio={16 / 9}>
          {children}
          {/* <Img src="https://cdn.ady.systems/chvn/vi/max.jpg" alt="Landscape photo by Tobias Tullius" /> */}
        </AspectRatio.Root>
      </Box>
    </Container>
  );
};

// export default AspectRatioComponent;
