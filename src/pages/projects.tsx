import React from 'react';
import { Container, Section, Grid, Heading } from '@/system';
import { ProjectLogoBox } from '@/components/ProjectLogoBox';
import { ProjectLogo } from '@/components/ProjectLogo';
// Components..
import { Navbar } from '@/ui/Navbar';

const Projects = () => {
  return (
    <>
      <Navbar />
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
            <ProjectLogoBox title="Atelier Design Yield®" href="https://ady.world">
              <ProjectLogo variant="Atelier Design Yield" />
            </ProjectLogoBox>

            <ProjectLogoBox title="ADY® Interval" href="https://ady.world">
              <ProjectLogo variant="Interval" />
            </ProjectLogoBox>

            <ProjectLogoBox title="chvn.me/" href="https://ady.world">
              <ProjectLogo variant="chvn.me" />
            </ProjectLogoBox>

            <ProjectLogoBox title="three.space" href="https://ady.world">
              <ProjectLogo variant="three.space" />
            </ProjectLogoBox>

            <ProjectLogoBox title="Next.Start" href="https://ady.world">
              <ProjectLogo variant="Next.Start" />
            </ProjectLogoBox>
          </Grid>
        </Section>
      </Container>
    </>
  );
};

export default Projects;
