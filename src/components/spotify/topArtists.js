import React from 'react';
import Image from 'next/image';
import { useSWR } from 'swr';

// import { ImageList } from '@material-ui/core';
// import { ImageListItem } from '@material-ui/core';
// import { useTheme } from '@mui/material/styles';
// import { makeStyles } from '@material-ui/core/styles';

// @/system
import { Box, Heading } from 'atelier.design';
import { styled } from '@stitches/react';

const Title = styled('div', {
  // mixBlendMode: 'difference',
  color: '$superLime2',
  fontFamily: '$inter',
  fontSize: '15px',
  fontWeight: '800',
  marginBottom: '10px',
  lineHeight: '1',

  textTransform: 'uppercase',
});

const Description = styled('div', {
  // mixBlendMode: 'difference',
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '1',

  color: '$sage5',
});

const EntryLink = styled('a', {
  width: '100%',
  display: 'block',
  textDecoration: 'none',
  outline: 'none',
});

const Card = styled('div', {
  display: 'flex',
  backgroundColor: '$sage3',
  border: 'solid 1px $slate7',
  position: 'relative',
  borderRadius: '20px',
  marginTop: '4px',
  marginBottom: '0',
  padding: '18px',
  alignItems: 'left',
  webkitScrollbar: 'none',
  height: '200px',

  '&:hover': {
    // color: '$slate1',
    background: '$sage9',
    transition: 'opacity 0.1s, transform 0.1s',
    // background: 'linear-gradient(to bottom left, rgba(255, 255, 130, 0.8) 20%, rgba(255, 55, 193, 0.6) 100%)',
    //   background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(63,255,221,0.5690651260504201) 35%, rgba(0,255,0,1) 100%)',
  },
});

const fetcher = (...args) => fetch(...args).then(res => res.json());

const TopArtist = props => {
  const theme = useTheme();
  const api = '/api/topArtists';
  const { data, error } = useSWR(api, fetcher);

  if (error) return <div>FELFELFEL</div>;

  if (!data) return <div>Laddar artister..</div>;
  const columns = 10;
  const w = 164;

  if (window.innerWidth < 700) {
    columns = 5;
    w = 82;
  }
  if (window.innerWidth < 300) {
    columns = 3;
    w = 41;
  }

  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
        {/* PRODUCT ROW ONE */}

        <Heading size="2">My top Artists on Spotify:</Heading>

        <Box>
          {data.map(img => (
            <Card
              key={img.img}
              css={{
                // backgroundImage: image ? (!inView ? 'none' : `url('${imagePrefix}/${image}')`) : 'none',
                // backgroundPosition: 'center',
                // backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                objectFit: 'cover',
              }}>
              <a className={classes.a} href={img.url}>
                <Image className={classes.img} src={img.img} loading="lazy" width={w} height={w} />
              </a>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TopArtist;
