import { styled } from 'stitches.config';

// Container..
export const CustomContainer = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,
  maxWidth: '760px',
  padding: '8px',
  margin: 'auto',

  // border
  border: '1px dashed $sage4',
  borderTopWidth: '0',
  borderBottomWidth: '0',
  borderLeftWidth: '1px',
  borderRightWidth: '1px',

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',
  mt: '0',
});
