import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import 'intersection-observer';

// @/system
import { Box } from '@/system/box';
import { Container } from '@/system/container';
import { Section } from '@/system/section';
import { Heading } from '@/system/heading';
import { Paragraph } from '@/system/paragraph';
import { Text } from '@/system/text';
import { Grid } from '@/system/grid';
import { SmallButton } from '@/components/buttons/DefaultButton';
import { Button } from '@/components/buttons/DefaultButton';

import { styled } from '@stitches/react';

const imagePrefix = `https://cdn.ady.systems`;

const Title = styled('div', {
  mixBlendMode: 'difference',
  color: '$blend',
  fontFamily: '$inter',
  fontSize: '15px',
  fontWeight: '800',
  marginBottom: '10px',
  lineHeight: '1',

  textTransform: 'uppercase',
});

const Description = styled('div', {
  mixBlendMode: 'difference',
  fontFamily: '$inter',
  fontWeight: '500',
  fontSize: '13px',
  lineHeight: '1',

  color: '$blend',
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
  height: '150px',

  '&:hover': {
    color: '$slate1',
    transition: 'opacity 1s, transform 1s',
    background: 'linear-gradient(to bottom left, rgba(255, 255, 130, 0.8) 20%, rgba(255, 55, 193, 0.6) 100%)',
  },
});

export const GridEntry = ({ title, description, image, href }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <>
      <Box css={{ paddingTop: '0px', paddingBottom: '0px' }}>
        {/* PRODUCT ROW ONE */}
        <Box>
          <Card
            css={{
              backgroundImage: image ? (!inView ? 'none' : `url('${imagePrefix}/${image}')`) : 'none',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              objectFit: 'cover',
            }}
          >
            <EntryLink
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              ref={ref}
              title={`${title} - ${description}`}
            >
              <section>
                <Box
                  css={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',

                    marginLeft: '18px',
                    marginRight: '18px',
                    marginBottom: '20px',
                  }}
                >
                  <Title>{title}</Title>
                  <Description>{description}</Description>
                </Box>
              </section>
            </EntryLink>
          </Card>
        </Box>
      </Box>
    </>
  );
};

export default GridEntry;