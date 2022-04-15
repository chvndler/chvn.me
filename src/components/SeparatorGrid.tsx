import React from 'react';
import { styled } from 'stitches.config';
import { violet } from '@radix-ui/colors';
import { Text, Box } from 'atelier.design';
import { Avatar } from '@/components/Avatar';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$sage5',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

// Exports
export const Separator = StyledSeparator;

// Your app...
// const Box = styled('div', {});
const Flex = styled('div', { display: 'flex' });
/*
const Text = styled('div', {
  color: '$superLogo',
  fontSize: 15,
  lineHeight: '20px',
});
*/

export const SeparatorGrid = () => {
  return (
    <Box css={{ width: '100%', maxWidth: 300, margin: '0 8px' }}>
      <Flex css={{ height: 20, alignItems: 'center' }}>
        <Box css={{ position: 'relative', boxSizing: 'border-box' }}>
          <Flex css={{ flexDirection: 'column', alignItems: 'left', paddingBottom: '15px' }}>
            <Avatar size="4" shape="circle" alt="John Smith" src="" fallback="L" />
          </Flex>
        </Box>
        <Separator decorative orientation="vertical" css={{ bc: '$translucent', margin: '0 8px' }} />
        <Flex css={{ flexDirection: 'column', alignItems: 'left' }}>
          <Text size="2" css={{ fontWeight: 600, paddingBottom: '4px' }}>
            Song Name
          </Text>
          <Text size="1" css={{ fontWeight: 300 }}>
            Artist
          </Text>
        </Flex>
      </Flex>
      <Separator css={{ bc: '$translucent', margin: '8px 0' }} />

      <Flex css={{ height: 20, alignItems: 'center' }}>
        <Text size="1" css={{ fontWeight: 500 }}>
          Album Name
        </Text>
        <Separator decorative orientation="vertical" css={{ margin: '0 8px' }} />

        <Text size="1" css={{ fontWeight: 500 }}>
          Listen on Spotify
        </Text>
      </Flex>
    </Box>
  );
};

// export default SeparatorGrid;
