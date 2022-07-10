import * as React from 'react';
import { styled } from 'stitches.config';

const StyledFlex = styled('div', {
  boxSizing: 'border-box',
  // backgroundColor: '$rhythm9',
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  width: 'auto',

  padding: 0,
  margin: 0,

  alignItems: 'left',
  justifyContent: 'left',
  textAlign: 'left',
});

const BlogFlex = ({ ...props }) => {
  return (
    <>
      <StyledFlex>{props.children}</StyledFlex>
    </>
  );
};

export default BlogFlex;
