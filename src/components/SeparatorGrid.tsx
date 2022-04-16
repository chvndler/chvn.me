import React from 'react';
import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';
import Link from 'next/link';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import fetcher from '@/lib/fetcher';
import { NowPlayingSong } from '@/types/tracks';
import { SpotifyLogo } from '@/components/SpotifyLogo';
import AnimatedBars from '@/components/AnimatedBars';
import { Box, Paragraph, Text, Container, Flex, Status, Heading } from 'atelier.design';
import { Avatar } from '@/components/Avatar';

import { styled } from 'stitches.config';
import { violet } from '@radix-ui/colors';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  backgroundColor: '$sage5',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
});

// Exports
export const Separator = StyledSeparator;

export const SeparatorGrid = track => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <>
      <Box css={{ width: '100%', maxWidth: 300, margin: '0 8px' }}>
        {data?.songUrl ? <AnimatedBars /> : <SpotifyLogo />}

        <Flex css={{ height: 20, alignItems: 'center' }}>
          {data?.songUrl ? (
            <Box>
              <Box css={{ position: 'relative', boxSizing: 'border-box' }}>
                <Flex css={{ flexDirection: 'column', alignItems: 'left', paddingBottom: '15px' }}>
                  <Avatar size="4" shape="circle" alt="John Smith" src={data.albumImageUrl} fallback="J" />
                </Flex>
              </Box>
              <Separator decorative orientation="vertical" css={{ bc: '$translucent', margin: '0 8px' }} />
              <Flex css={{ flexDirection: 'column', alignItems: 'left' }}>
                <Link href={data.songUrl} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Text size="2">{data.title}</Text>
                  </a>
                </Link>
                <Text size="1" css={{ fontWeight: 300 }}>
                  Artist
                </Text>
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
          ) : (
            <Box>
              <Box css={{ position: 'relative', boxSizing: 'border-box' }}>
                <Flex css={{ flexDirection: 'column', alignItems: 'left', paddingBottom: '15px' }}>
                  <Avatar size="4" shape="circle" alt="John Smith" src="" fallback="J" />
                </Flex>
              </Box>
              <Separator decorative orientation="vertical" css={{ bc: '$translucent', margin: '0 8px' }} />
              <Flex css={{ flexDirection: 'column', alignItems: 'left' }}>
                <Link href={data.songUrl} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <Text size="2">{data.title}</Text>
                  </a>
                </Link>
                <Text size="1" css={{ fontWeight: 300 }}>
                  Artist
                </Text>
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
          )}
          <span className="capsize mx-2 text-gray-500 dark:text-gray-300 hidden sm:block">{' – '}</span>
          <Paragraph size="1">{data?.artist ?? 'Spotify'}</Paragraph>
        </Flex>
      </Box>
    </>
  );
};

// export default SeparatorGrid;
