import React from 'react';
import { Box } from '@/system/box';
import { Container } from '@/system/container';
import { Grid } from '@/system/grid';

export const ShowcaseComp = ({ children }) => {
  return (
    <Box css={{ backgroundColor: '$slate1' }}>
      <Container size="4" css={{ px: '0px', py: '10px', position: 'relative' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '$2',
            borderRadius: '26px',
            px: '0px',
            border: '3px solid',
            borderColor: '$slate6',
            zIndex: '20',
            position: 'relative',
          }}>
          <Box
            css={{
              height: '400px',
              width: '100%',
              position: 'relative',
              padding: '0',
              margin: '0',
              zIndex: '100',
              saturate: '200%',
            }}>
            {children}
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
