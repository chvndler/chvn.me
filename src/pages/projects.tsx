import React from 'react';
import { Container, Section, Grid, Heading } from '@/system';
import { ProjectLogoBox } from '@/components/ProjectLogoBox';

const Projects = () => {
  return (
    <>
      <Container css={{ paddingTop: '100px', paddingBottom: '0px' }} size={{ '@initial': 2, '@bp2': 3 }}>
        <Heading size="3" css={{ fontFamily: '$inter', fontWeight: '700', textAlign: 'center' }}>
          Current Projects
        </Heading>
      </Container>

      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Grid
            align="center"
            columns={{ '@initial': 1, '@bp1': 2, '@bp2': 3 }}
            css={{ gap: '8px', placeItems: 'stretch', gridAutoRows: '200px', mb: '$8' }}>
            <ProjectLogoBox title="Atelier Design Yield®" href="https://ady.world" variant="Atelier Design Yield" />
            <ProjectLogoBox title="ADY® Interval" href="https://ady.world" variant="Interval" />
            <ProjectLogoBox title="chvn.me/" href="https://chvn.me" variant="chvn.me" />
            <ProjectLogoBox title="three.space" href="https://ady.world" variant="three.space" />
            <ProjectLogoBox title="next.start" href="https://ady.world" variant="Next.Start" />
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Projects;
