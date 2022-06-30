import { styled } from 'stitches.config';

// Container..
export const CustomContainer = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  maxWidth: '1000px',
  padding: '8px',
  margin: 'auto',

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  mt: '0',
});

// Container..
export const ChvnContainer = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  maxWidth: '650px',
  padding: '8px',
  margin: 'auto',

  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '$5',
  paddingRight: '$5',
  marginTop: '0',
});
