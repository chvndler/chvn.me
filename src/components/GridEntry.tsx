import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

// @/system
import { Box } from '@/system/box';

import { styled } from '@stitches/react';

const imagePrefix = `https://cdn.ady.systems`;

const Title = styled('div', {
  // mixBlendMode: 'difference',
  color: '$rhythmA12',
  fontFamily: '$inter',
  fontSize: '17px',
  fontWeight: '700',
  marginBottom: '10px',
  lineHeight: '0.6',
  letterSpacing: '-0.05rem',

  // textTransform: 'uppercase',
});

const Description = styled('div', {
  // mixBlendMode: 'difference',
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '0.8',

  color: '$rhythmA10',
});

const EntryLink = styled('a', {
  width: '100%',
  display: 'block',
  textDecoration: 'none',
  outline: 'none',
});

const Card = styled('div', {
  transition: 'all .4s ease-in-out',
  display: 'flex',
  backgroundColor: '$rhythmA2',
  color: '$rhythm3',
  border: 'solid 1px $rhythmA4',
  position: 'relative',
  borderRadius: '20px',
  marginTop: '0',
  marginBottom: '0',
  padding: '18px',
  alignItems: 'left',
  webkitScrollbar: 'none',
  height: '140px',
  // boxShadow: '1px 1px 1px 1px $colors$rhythm12',

  '&:hover': {
    // color: '$slate1',
    //   animation: '${scaleUp} 200ms',
    background: '$rhythmPx',
    // boxShadow: '1px 1px 0 1px $colors$rhythm12',
  },
});

export const GridEntry = ({ title, description, image, href }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
        {/* <!-- Grid Will Render this asChild.. --> */}
        <Card
          css={{
            backgroundImage: image ? (!inView ? 'none' : `url('${imagePrefix}/${image}')`) : 'none',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            objectFit: 'cover',
          }}>
          <EntryLink
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            ref={ref}
            title={`${title} - ${description}`}>
            <section>
              <Box
                css={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',

                  marginLeft: '18px',
                  marginRight: '18px',
                  marginBottom: '20px',
                }}>
                <Title>{title}</Title>
                <Description>{description}</Description>
              </Box>
            </section>
          </EntryLink>
        </Card>
      </Box>
    </>
  );
};

export default GridEntry;
