import { styled } from 'stitches.config';

export const TextField = styled('input', {
  // Reset
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  margin: '0',
  fontFamily: '$inter',
  outline: 'none',
  padding: '0',
  width: '100%',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // Custom
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  color: '$hiContrast',
  fontVariantNumeric: 'tabular-nums',

  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 1px $colors$blue6, inset 0 0 0 100px $colors$blue3',
  },

  '&:-webkit-autofill::first-line': {
    fontFamily: '$untitled',
    color: '$hiContrast',
  },

  '&:focus': {
    boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
    '&:-webkit-autofill': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8, inset 0 0 0 100px $colors$blue3',
    },
  },
  '&::placeholder': {
    color: '$slate9',
  },
  '&:disabled': {
    pointerEvents: 'none',
    backgroundColor: '$slate2',
    color: '$slate8',
    cursor: 'not-allowed',
    '&::placeholder': {
      color: '$slate7',
    },
  },
  '&:read-only': {
    backgroundColor: '$slate2',
    '&:focus': {
      boxShadow: 'inset 0px 0px 0px 1px $colors$slate7',
    },
  },

  variants: {
    size: {
      '1': {
        borderRadius: '$2',
        height: '$5',
        fontSize: '$1',
        px: '$2',
        lineHeight: '$sizes$5',
        '&:-webkit-autofill::first-line': {
          fontSize: '$1',
        },
      },
      '2': {
        borderRadius: '9px',
        height: '$6',
        fontSize: '$3',
        px: '$3',
        lineHeight: '$sizes$6',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
      '3': {
        // borderRadius: '$3',
        borderRadius: '12px',
        height: '42px',
        fontSize: '$3',
        px: '$3',
        lineHeight: '$sizes$6',
        '&:-webkit-autofill::first-line': {
          fontSize: '$3',
        },
      },
    },
    variant: {
      ghost: {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slateA7',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$blue8, 0px 0px 0px 1px $colors$blue8',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
      lime: {
        width: '100%',
        boxShadow: 'inset 0 0 0 2px $colors$sageA7',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 2px $colors$sageA9',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$superLime4, 0px 0px 0px 1px $colors$superLime5',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
      brand: {
        width: '100%',
        boxShadow: 'inset 0 0 0 2px $colors$rhythmA7',
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 2px $colors$rhythmA8',
          },
        },
        '&:focus': {
          backgroundColor: '$loContrast',
          boxShadow: 'inset 0px 0px 0px 1px $colors$rhythmLx, 0px 0px 0px 1px $colors$rhythmLx',
        },
        '&:disabled': {
          backgroundColor: 'transparent',
        },
        '&:read-only': {
          backgroundColor: 'transparent',
        },
      },
    },
    state: {
      invalid: {
        boxShadow: 'inset 0 0 0 1px $colors$red7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$red8, 0px 0px 0px 1px $colors$red8',
        },
      },
      valid: {
        boxShadow: 'inset 0 0 0 1px $colors$green7',
        '&:focus': {
          boxShadow: 'inset 0px 0px 0px 1px $colors$green8, 0px 0px 0px 1px $colors$green8',
        },
      },
    },
    cursor: {
      default: {
        cursor: 'default',
        '&:focus': {
          cursor: 'text',
        },
      },
      text: {
        cursor: 'text',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
});
