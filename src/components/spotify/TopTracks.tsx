import useSWR from 'swr';

import fetcher from '@/lib/fetcher';
import { Box, Grid } from 'atelier.design';
import { TopTracks } from '@/types/tracks';
import Track from '@/components/spotify/Track';

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/top-tracks', fetcher);

  if (!data) {
    return null;
  }

  return (
    <>
      {/* PRODUCT ROW ONE */}
      <Box>
        <Grid
          css={{
            gap: '4px',
            gridTemplateColumns: '1fr 1fr',
            '@bp1': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr',
            },
          }}>
          {data.tracks.map((track, index) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
