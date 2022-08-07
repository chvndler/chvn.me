import React from 'react';
import { Container, Section, Heading } from '@/system';
// Components..
import { Navbar } from '@/ui/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Heading size="3">Contact</Heading>
        </Section>
      </Container>
    </>
  );
};

export default Contact;
