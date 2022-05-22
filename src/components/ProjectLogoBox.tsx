import React from 'react';
import { ProjectLogo } from '@/components/ProjectLogo';
import { styled } from '@stitches/react';

type ProjectLogoBoxProps = {
  variant?: string;
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
  backgroundColor: '$gray6',
  // border: '1px solid $sage5',
  boxShadow: '0 0 0 1px $colors$chvn4',
  '&:hover': {
    backgroundColor: '$gray8',
    cursor: 'pointer',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});

export const ProjectLogoBox = ({ title, variant, href, ...props }: ProjectLogoBoxProps) => {
  return (
    <>
      <ProjectBox href={href} target="_blank" rel="noopener noreferrer" title={`${title}`}>
        <ProjectLogo variant={variant} />
      </ProjectBox>
    </>
  );
};

export default ProjectLogoBox;
