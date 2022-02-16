import React from 'react';
import useSWR from 'swr';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

const fetcher = url => fetch(url).then(res => res.json());

export default function Test() {
  const { data, error } = useSWR('https://api.github.com/repos/AtelierDesign/atelier', fetcher);

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return (
    <div>
      <Container>
        <h1>{data.name}</h1>
        <p> Descript: {data.description}</p>
        <strong>Subscriber Count: {data.subscribers_count}</strong>
        <strong>Seen: {data.stargazers_count}</strong> <strong>Fork Count: {data.forks_count}</strong>
      </Container>
    </div>
  );
}
