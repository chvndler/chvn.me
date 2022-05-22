import React from 'react';
import { Flex, Image as RadixImage } from '@modulz/radix';
import { AspectRatioComponent } from '@/components/AspectRatio';
// import { Section } from '@/system';

type VideoPlayerProps = { id?: string; poster?: string; videoId?: string };

export const VideoPlayer = ({ id, poster, videoId, ...props }: VideoPlayerProps) => {
  const [hasStartedPlaying, setHasStartedPlaying] = React.useState(false);
  const [posterUrl, setPosterUrl] = React.useState(poster || undefined);

  React.useEffect(() => {
    if (!poster) {
      const img = new Image();
      img.src = `https://cdn.ady.systems/chvn/vi/${id}.jpg`;

      img.onload = () => {
        if (img.width <= 120) {
          setPosterUrl(`https://cdn.ady.systems/chvn/vi/50.jpg`);
        } else {
          setPosterUrl(img.src);
        }
      };
    }
  }, []);

  return (
    <AspectRatioComponent ratio="16:9">
      <Flex
        as="button"
        aria-label="Play video"
        onClick={() => setHasStartedPlaying(true)}
        sx={{
          appearance: 'none',
          border: 0,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          bg: 'gray200',
          ':hover, :focus': {
            '[data-part-id="box"]': {
              transform: 'scale(1.2)',
            },
          },
        }}>
        {posterUrl && <RadixImage src={posterUrl} sx={{ width: '100%', height: '100%' }} />}
      </Flex>

      {hasStartedPlaying && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?controls=0?autoplay=1`}
          frameBorder={0}
          //controls={0}
          //fs={1}
          //  modestbranding={1}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 2, width: '100%', height: '100%' }}
          {...props}></iframe>
      )}
    </AspectRatioComponent>
  );
};
