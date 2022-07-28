import { styled } from 'stitches.config';
import { Text } from '@/system/text';

export const IntroLink = styled('a', {
  alignItems: 'center',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '2px',
  textDecorationColor: '$sage4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
      textUnderlineOffset: '4px',
      textDecorationColor: '$sage10',
    },
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none',
  },
  [`& ${Text}`]: {
    color: '$slate10',
    fontSize: '14px',
    fontWeight: '600',
  },
  variants: {
    variant: {
      hyper: {
        color: '$rhythm11',
        fontFamily: '$hyper',
        // fontStyle: 'italic',
        textDecoration: 'none',
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
      aero: {
        color: '$rhythm11',
        fontFamily: '$aeroportMono',
        textDecoration: 'underline',
        textUnderlineOffset: '1px',
        textDecorationColor: 'inherit',
        '&:hover': {
          textUnderlineOffset: '1px',
        },
        '&:focus': {
          outlineColor: '$rhythm8',
        },
      },
      readex: {
        color: '$rhythm11',
        fontFamily: '$readex',
        textDecoration: 'underline',
        textUnderlineOffset: '1px',
        textDecorationColor: 'inherit',
        '&:hover': {
          textUnderlineOffset: '1px',
        },
        '&:focus': {
          outlineColor: '$rhythm8',
        },
      },
      subtle: {
        color: '$bronze9',
        fontStyle: 'italic',
        textDecorationColor: '$bronze9',
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
      straight: {
        fontStyle: 'none',
        color: '$bronze9',
        textDecorationColor: '$bronze9',
        '&:focus': {
          outlineColor: '$bronze8',
        },
      },
      escape: {
        fontFamily: '$mori',
        fontStyle: 'none',
        color: '$chvn5',
        textDecorationColor: '$lime8',
        '&:focus': {
          outlineColor: '$bronze8',
        },
        '&:hover': {
          textDecorationLine: 'underline',
          textUnderlineOffset: '3px',
          textDecorationColor: '$superLime5',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'subtle',
  },
});
