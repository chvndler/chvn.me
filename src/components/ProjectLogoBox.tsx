import React from 'react';
import { styled } from '@stitches/react';

type ProjectLogoBoxProps = {
  title?: string;
  children?: JSX.Element;
  href?: string;
};

const ProjectBox = styled('a', {
  minHeight: '200px',
  width: '100%',
  padding: '5px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',
  backgroundColor: '$rhythmA2',
  // border: '1px solid $sage5',
  boxShadow: '0 0 0 1px $colors$chvn4',
  '&:hover': {
    backgroundColor: '$rhythm4',
    cursor: 'pointer',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});

export const ProjectLogoBox = ({ title, href, children, ...props }: ProjectLogoBoxProps) => {
  return (
    <>
      <ProjectBox href={href} target="_blank" rel="noopener noreferrer" title={`${title}`}>
        {children}
      </ProjectBox>
    </>
  );
};

export default ProjectLogoBox;
