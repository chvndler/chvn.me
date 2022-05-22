import React from 'react';
import { styled } from '@stitches/react';

const ProjectTitle = styled('div', {
  // mixBlendMode: 'difference',
  color: '$sage12',
  fontFamily: '$urbane',
  fontSize: '15px',
  fontWeight: '700',
  marginBottom: '10px',
  lineHeight: '0.6',
  // letterSpacing: '-0.02rem',
  letterSpacing: 'normal',

  textTransform: 'uppercase',
});

const ProjectBox = styled('a', {
  minHeight: '200px',
  width: '100%',

  padding: '5px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '27px',

  backgroundColor: '$gray5',
  // border: '1px solid $sage5',
  boxShadow: '0 0 0 1px $colors$sage5',

  '&:hover': {
    backgroundColor: '$chvn4',
    cursor: 'pointer',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});

export const ProjectHeading = ({ title, href }) => {
  return (
    <>
      <ProjectBox href={href} target="_blank" rel="noopener noreferrer" title={`${title}`}>
        <ProjectTitle>{title}</ProjectTitle>
      </ProjectBox>
    </>
  );
};

export default ProjectHeading;
