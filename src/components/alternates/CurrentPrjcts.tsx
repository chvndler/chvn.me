import React from 'react';

import { Grid } from '@/system/grid';
import { Section } from '@/system/section';

// Components..
import { ProjectEntry } from '@/components/alternates/ProjectEntry';

// Data
import { prjcts as items } from '@/projects/current';

export const CurrentPrjcts = () => {
  return (
    <>
      {/* <!-- Current Projects.. --> */}
      <Section size="2" css={{ paddingTop: '0', paddingBottom: '40px' }}>
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
            return <ProjectEntry key={entry.key} title={entry.title} image={entry.image} href={entry.url} description={entry.description} />;
          })}
        </Grid>
      </Section>
    </>
  );
};
