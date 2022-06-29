import React from 'react';

import { Grid } from '@/system/grid';
import { Section } from '@/system/section';

// Components..
import { GridEntry } from '@/components/GridEntry';

// Data
import { data as items } from '@/projects/current.json';

export const CurrentProjects = () => {
  return (
    <>
      {/* <!-- Current Projects.. --> */}
      <Section size="2" css={{ paddingTop: '0', paddingBottom: '80px' }}>
        <Grid
          css={{
            gap: '4px',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '4px',
              gridTemplateColumns: '1fr 1fr',
            },
          }}>
          {items.map(entry => {
            return (
              <GridEntry
                key={entry.title}
                title={entry.title}
                image={entry.image}
                href={entry.url}
                description={entry.description}
              />
            );
          })}
        </Grid>
      </Section>
    </>
  );
};
