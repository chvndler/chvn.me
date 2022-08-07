import React from 'react';
import { Container, Section, Heading } from '@/system';
// Components..
import { Navbar } from '@/ui/Navbar';

const Archive = () => {
  return (
    <>
      <Navbar />
      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Heading size="3">Archive</Heading>
        </Section>
      </Container>
    </>
  );
};

export default Archive;
