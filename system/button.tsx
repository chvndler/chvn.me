import { css } from '@stitches/react'
import { styled } from 'stitches.config'

export const DEFAULT_TAG = 'button'

export const button = css({
  // Reset
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$5',
  px: '$2',
  fontFamily: '$inter',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none'
  },

  // SIZE
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        px: '$2',
        fontSize: '$1',
        lineHeight: '$sizes$5'
      },
      '2': {
        marginLeft: '-1px',
        height: '$6',
        fontSize: '$3',
        lineHeight: '$sizes$6'
      },
      '3': {
        borderRadius: '12px',
        height: '$7',
        px: '$4',
        fontSize: '$4',
        lineHeight: '$sizes$7'
      }
    },

    // COLOR
    variant: {
      gray: {
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slate4',
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        }
      },
      blue: {
        backgroundColor: '$blue2',
        boxShadow: 'inset 0 0 0 1px $colors$blue7',
        color: '$blue11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$blue8'
          }
        },
        '&:active': {
          backgroundColor: '$blue3',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue4',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        }
      },
      green: {
        backgroundColor: '$green2',
        boxShadow: 'inset 0 0 0 1px $colors$blue7',
        color: '$blue11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$blue8'
          }
        },
        '&:active': {
          backgroundColor: '$blue3',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue4',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        }
      },
      red: {
        backgroundColor: '$red2',
        boxShadow: 'inset 0 0 0 1px $colors$blue7',
        color: '$blue11',
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$blue8'
          }
        },
        '&:active': {
          backgroundColor: '$blue3',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blue4',
          boxShadow: 'inset 0 0 0 1px $colors$blue8'
        }
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'inherit'
      },

      transparentWhite: {
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,100%,100%,.25)'
          }
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)'
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)'
        }
      },
      transparentBlack: {
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: 'black',
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,0%,0%,.25)'
          }
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)'
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)'
        }
      }
    },

    // STATE
    state: {
      // ACTIVE
      active: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: '$slate11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate5'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8'
        }
      },

      // LOADING
      waiting: {
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8'
          }
        },
        '&:active': {
          backgroundColor: '$slate5'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8'
        }
      }
    },
    ghost: {
      true: {
        backgroundColor: 'transparent',
        color: '$slate8',
        boxShadow: 'none'
      }
    }
  },

  compoundVariants: [
    {
      variant: 'gray',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        color: '$hiContrast',
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
            boxShadow: 'none'
          }
        },
        '&:active': {
          backgroundColor: '$slateA4'
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$slateA4',
          boxShadow: 'none'
        }
      }
    },
    {
      variant: 'blue',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$blueA3',
            boxShadow: 'none'
          }
        },
        '&:active': {
          backgroundColor: '$blueA4'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blueA8, 0 0 0 1px $colors$blueA8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$blueA4',
          boxShadow: 'none'
        }
      }
    },
    {
      variant: 'green',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$greenA3',
            boxShadow: 'none'
          }
        },
        '&:active': {
          backgroundColor: '$greenA4'
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$greenA8, 0 0 0 1px $colors$greenA8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$greenA4',
          boxShadow: 'none'
        }
      }
    },
    {
      variant: 'red',
      ghost: 'true',
      css: {
        backgroundColor: 'transparent',
        '@hover': {
          '&:hover': {
            backgroundColor: '$redA3',
            boxShadow: 'none'
          }
        },
        '&:active': {
          backgroundColor: '$redA4'
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$redA8, 0 0 0 1px $colors$redA8'
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]': {
          backgroundColor: '$redA4',
          boxShadow: 'none'
        }
      }
    }
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray'
  }
})

export const Button = styled(DEFAULT_TAG, button)
