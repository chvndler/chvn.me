import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import Image from 'next/image';
import { Flex } from '@/system/flex';
import { Box } from '@/system/box';
import chvnProfileImg from '@/public/img/chvn.jpg';

import { styled } from 'stitches.config';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: '100px',
  height: '100px',
  borderRadius: '35px',
  border: '2px solid $lime9',
  backgroundColor: '$blackA3',
  marginBottom: '20px',
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  layout: 'fill',
  borderRadius: '32px',
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  color: '$violet11',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
});

// Exports
export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

export const RadixAvatar = () => {
  return (
    <Flex css={{ gap: 9 }}>
      <Box>
        <Avatar>
          <AvatarImage src="https://cdn.ady.systems/chvn/assets/chvn.jpg" alt="Chvn" />
          <AvatarFallback delayMs={600}>Ch</AvatarFallback>
        </Avatar>
      </Box>
    </Flex>
  );
};

export default RadixAvatar;
