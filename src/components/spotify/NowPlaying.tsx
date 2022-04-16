import useSWR from 'swr';
import fetcher from '@/lib/fetcher';
// import Link from 'next/link';
import { NowPlayingSong } from '@/types/tracks';
import { Box, Flex, Text } from 'atelier.design';
import { Avatar } from '@/components/Avatar';
import { Status } from 'atelier.design';

// import { TwitterLogo } from '@/components/TwitterLogo';
// import { SpotifyLogo } from '@/components/SpotifyLogo';

export default function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>('/api/now-playing', fetcher);

  return (
    <Box>
      <Flex css={{ border: '1px solid $white', padding: '10px' }}>
        <Box css={{ width: '100%' }}>
          <Flex css={{ flexDirection: 'row' }}>
            {data?.songUrl ? (
              <>
                {/* <!-- isPlaying Component --> */}
                <Box css={{ position: 'relative', margin: 'auto' }}>
                  <Avatar size="5" alt="Spotify" src={data.albumImageUrl} fallback=""></Avatar>
                </Box>

                <Flex css={{ paddingLeft: '6px', flexDirection: 'column', margin: 'auto' }}>
                  <Text
                    css={{
                      lineHeight: '0.7',
                      margin: '1px',
                      fontSize: '13px',
                      padding: '3px',
                      fontWeight: '800',
                      color: '$sage11',
                    }}>
                    {data.title}
                  </Text>

                  <Text
                    css={{
                      lineHeight: '0.7',
                      margin: '1px',
                      fontSize: '11px',
                      padding: '3px',
                      fontWeight: '500',
                      color: '$sage9',
                    }}>
                    {data.artist}
                  </Text>

                  <Box css={{ paddingLeft: '6px', paddingRight: '6px', paddingTop: '4px' }}>
                    <Status size="1" variant="green"></Status>
                  </Box>
                </Flex>
              </>
            ) : (
              <>
                {/* <!-- Not Playing Component --> */}
                <Box css={{ position: 'relative', margin: 'auto' }}>
                  <Avatar size="5" alt="Spotify" src="" fallback="?"></Avatar>
                </Box>

                <Flex css={{ paddingLeft: '6px', flexDirection: 'column', margin: 'auto' }}>
                  <Text
                    css={{
                      lineHeight: '0.7',
                      margin: '1px',
                      fontSize: '13px',
                      padding: '3px',
                      fontWeight: '800',
                      color: '$sage11',
                    }}>
                    Not Playing
                  </Text>

                  <Text
                    css={{
                      lineHeight: '0.7',
                      margin: '1px',
                      fontSize: '11px',
                      padding: '3px',
                      fontWeight: '500',
                      color: '$sage9',
                    }}>
                    Download Spotify
                  </Text>

                  <Box css={{ paddingLeft: '6px', paddingRight: '6px', paddingTop: '4px' }}>
                    <Status size="1" variant="gray"></Status>
                  </Box>
                </Flex>
              </>
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
