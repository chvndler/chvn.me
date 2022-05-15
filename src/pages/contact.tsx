import React from 'react';
import { Container, Section, Heading } from '@/system';

const Contact = () => {
  return (
    <>
      <Container size={{ '@initial': 2, '@bp2': 3 }}>
        <Section>
          <Heading size="3">Contact</Heading>
        </Section>
      </Container>
    </>
  );
};

export default Contact;
