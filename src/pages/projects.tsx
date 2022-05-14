import React from 'react';
import { Container, Section, Grid } from '@/system';
import { ProjectHeading } from '@/components/ProjectHeading';

// Data
import { data as items } from '@/projects/current.json';

const Projects = () => {
  return (
    <>
      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{ gap: 1, placeItems: 'stretch', gridAutoRows: '200px', mb: '$8' }}>
            {/* <!-- ONE --> */}
            {items.map(entry => {
              return <ProjectHeading key={entry.title} title={entry.title} href={entry.url} />;
            })}
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Projects;
