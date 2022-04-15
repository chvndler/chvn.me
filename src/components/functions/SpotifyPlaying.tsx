import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';
import Link from 'next/link';

import fetcher from '@/lib/fetcher';
import { NowPlayingSong } from '@/types/tracks';
import { SpotifyLogo } from '@/components/SpotifyLogo';
import AnimatedBars from '@/components/AnimatedBars';

import { Box, Paragraph, Text, Container, Flex, Status, Avatar, AvatarGroup, AvatarNestedItem, Heading } from 'atelier.design';
import { Link2Icon } from '@radix-ui/react-icons';

export const SpotifyPlaying = () => {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <Container size="3">
      <Flex css={{}}>
        {data?.songUrl ? <AnimatedBars /> : <SpotifyLogo />}

        <Flex css={{}}>
          {data?.songUrl ? (
            <Box>
              <Link href={data.songUrl} passHref>
                <a target="_blank" rel="noopener noreferrer">
                  <Text size="2">{data.title}</Text>
                </a>
              </Link>
              <Box
                css={{
                  position: 'relative',
                }}>
                <Avatar size="3" alt="John Smith" src={data.albumImageUrl} fallback="J" />
              </Box>
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}>
                <Status size="2" variant="green"></Status>
              </Box>
            </Box>
          ) : (
            <Box>
              <Paragraph size="1">Not Playing</Paragraph>
              <Box
                css={{
                  position: 'relative',
                }}>
                <Avatar size="3" alt="John Smith" src="" fallback="J" />
              </Box>
              <Box
                as="span"
                css={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  boxShadow: '0 0 0 3px $colors$loContrast',
                  borderRadius: '$round',
                  mr: '-3px',
                  mb: '-3px',
                }}>
                <Status size="2" variant="red"></Status>
              </Box>
            </Box>
          )}
          <span className="capsize mx-2 text-gray-500 dark:text-gray-300 hidden sm:block">{' – '}</span>
          <Paragraph size="1">{data?.artist ?? 'Spotify'}</Paragraph>
        </Flex>
      </Flex>
    </Container>
  );
};
