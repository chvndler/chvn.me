import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

// @/system
import { ShowcaseComp } from '@/components/ShowcaseComposition';
import { Box } from '@/system/box';
import { Container, Heading } from 'atelier.design';

import { styled } from '@stitches/react';

const imagePrefix = `https://cdn.ady.systems`;

const HeadingBox = styled('a', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  margin: 'auto',
  padding: '40px',
  zIndex: '200',
  display: 'block',
  textDecoration: 'none',
  outline: 'none',
});

const Description = styled('div', {
  mixBlendMode: 'difference',
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1',

  color: '$sage8',
});

const ShowcaseBox = styled('div', {
  bc: '$translucent',
  display: 'flex',
  border: 'solid 1px $slate7',
  position: 'relative',
  borderRadius: '24px',
  margin: '0',
  padding: '18px',
  alignItems: 'left',
  webkitScrollbar: 'none',
  height: '100%',
});

export const ShowcaseEntry = ({ title, description, image, href }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <Box css={{ bc: '$translucent', paddingTop: '0px', paddingBottom: '0px' }}>
        <ShowcaseComp>
          <HeadingBox href={href} target="_blank" rel="noopener noreferrer" ref={ref} title={`${title} - ${description}`}>
            <Heading
              css={{
                fontSize: '32px',
                fontWeight: '800',
                color: '$sage10',
                textTransform: 'uppercase',
                paddingBottom: '12px',

                '@sm': {
                  fontSize: '22px',
                },
              }}>
              <span>{title}</span>
            </Heading>
            <Description>{description}</Description>
          </HeadingBox>

          <ShowcaseBox
            css={{
              bc: '$translucent',
              zIndex: '5',
              overflow: 'hidden',
              backgroundImage: image ? (!inView ? 'none' : `url('${imagePrefix}/${image}')`) : 'none',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              objectFit: 'cover',
            }}
          />
        </ShowcaseComp>
      </Box>
    </>
  );
};

export default ShowcaseEntry;
