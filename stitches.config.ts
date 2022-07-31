import { createStitches } from '@stitches/react';
// import type { PropertyValue, ScaleValue } from "@stitches/react";
import type * as Stitches from '@stitches/react';
import { mixins } from 'stitches-mixins';

import {
  gray,
  mauve,
  slate,
  sage,
  olive,
  sand,
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  sky,
  mint,
  cyan,
  teal,
  green,
  grass,
  lime,
  yellow,
  amber,
  orange,
  brown,
  bronze,
  gold,
  grayA,
  mauveA,
  slateA,
  sageA,
  oliveA,
  sandA,
  tomatoA,
  redA,
  crimsonA,
  pinkA,
  plumA,
  purpleA,
  violetA,
  indigoA,
  blueA,
  skyA,
  mintA,
  cyanA,
  tealA,
  greenA,
  grassA,
  limeA,
  yellowA,
  amberA,
  orangeA,
  brownA,
  bronzeA,
  goldA,
  whiteA,
  blackA,
  grayDark,
  mauveDark,
  slateDark,
  sageDark,
  oliveDark,
  sandDark,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  skyDark,
  mintDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  limeDark,
  yellowDark,
  amberDark,
  orangeDark,
  brownDark,
  bronzeDark,
  goldDark,
  grayDarkA,
  mauveDarkA,
  slateDarkA,
  sageDarkA,
  oliveDarkA,
  sandDarkA,
  tomatoDarkA,
  redDarkA,
  crimsonDarkA,
  pinkDarkA,
  plumDarkA,
  purpleDarkA,
  violetDarkA,
  indigoDarkA,
  blueDarkA,
  skyDarkA,
  mintDarkA,
  cyanDarkA,
  tealDarkA,
  greenDarkA,
  grassDarkA,
  limeDarkA,
  yellowDarkA,
  amberDarkA,
  orangeDarkA,
  brownDarkA,
  bronzeDarkA,
  goldDarkA,
} from '@radix-ui/colors';
import { rhythm, rhythmA, rhythmDark, rhythmDarkA } from 'rhythm.color';

///////////////////////////////
// Radix Scales.. Use Cases //
/////////////////////////////

// 1 [ App background ]
// 2 [ Subtle background ]
// 3 [ UI element background ]
// 4 [ Hovered UI element background ]
// 5 [ Active / Selected UI element background ]
// 6 [ Subtle borders and separators ]
// 7 [ UI element border and focus rings ]
// 8 [ Hovered UI element border ]
// 9 [ Solid backgrounds ]
// 10 [ Hovered solid backgrounds ]
// 11 [ Low-contrast text ]
// 12 [ High-contrast text ]

// Exports..
export type { VariantProps } from '@stitches/react';
export const { styled, css, theme, createTheme, getCssText, globalCss, keyframes, config } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...mauve,
      ...slate,
      ...sage,
      ...olive,
      ...sand,
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...sky,
      ...mint,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...lime,
      ...yellow,
      ...amber,
      ...orange,
      ...brown,
      ...bronze,
      ...gold,

      ...grayA,
      ...mauveA,
      ...slateA,
      ...sageA,
      ...oliveA,
      ...sandA,
      ...tomatoA,
      ...redA,
      ...crimsonA,
      ...pinkA,
      ...plumA,
      ...purpleA,
      ...violetA,
      ...indigoA,
      ...blueA,
      ...skyA,
      ...mintA,
      ...cyanA,
      ...tealA,
      ...greenA,
      ...grassA,
      ...limeA,
      ...yellowA,
      ...amberA,
      ...orangeA,
      ...brownA,
      ...bronzeA,
      ...goldA,

      ...whiteA,
      ...blackA,

      ...rhythm,
      ...rhythmA,

      // Custom Colors..
      white: 'hsl(0, 0%, 100%)',
      gray500: 'hsl(206,10%,76%)',
      blue500: 'hsl(206,100%,50%)',
      purple500: 'hsl(252,78%,60%)',
      green500: 'hsl(148,60%,60%)',
      red500: 'hsl(352,100%,62%)',

      chvn1: '#f1f1f1',
      chvn2: '#cccab8',
      chvn3: '#cefe71',
      chvn4: '#a493f8',
      chvn5: '#837e95',
      chvn6: '#2b4570',
      chvn7: '#413a3c',

      // rhythm00: 'hsl(0, 0%, 9.0%)',
      rhythmLx: 'hsl(95, 98%, 63%)',
      rhythmPx: 'hsl(312, 44.0%, 44.0%)',

      // SuperLime..
      superLime0: '#ebffe9',
      superLime1: '#b8ffb3',
      superLime2: '#65ff59',
      superLime3: '#3df330',
      superLime4: '#39e12c',
      superLime5: '#34ce28',
      superLogo: '#6e6d5d',
      superLime: '#96F550',

      // Translucents..
      light100: 'rgba(240, 240, 240, 0.5)',
      light50: 'rgba(240, 240, 240, 0.8)',
      clear100: 'rgba(240, 240, 240, 0.2)',

      // Neons..
      blend: '#aeff00',
      superYellow: '#F6F930',
      slime: '#FFFD8E',
      lime9Alpha: 'rgba(153,213,42, 0.2)',
      sky9Alpha: 'rgba(104,221,253,0.3)',

      // Semantics..
      hiContrast: '$slate12',
      semiTransparent: '$light100',
      loContrast: '$slate1',
      panel: '$gray12',

      // Low Contrast..
      canvas: 'hsl(0 0% 93%)',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 15%)',
      shadowDark: 'hsl(206 22% 7% / 40%)',
    },

    // Fonts..
    fonts: {
      inter: "'Inter', 'sans-serif'",
      olympic: "'Olympic Sans', 'sans-serif'",
      mori: "'Mori Gothic', 'sans-serif'",
      hyper: "'Atkinson Hyperlegible', 'sans-serif'",
      mono: "'Monument Grotesk Semi-Mono', monospaced",
      aeroportMono: "'Aeroport Mono', monospaced",
      readex: "'Readex Pro', sans-serif",
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    fontWeights: {
      100: '100',
      200: '200',
      300: '300',
      400: '400',
      500: '500',
      600: '600',
      700: '700',
      800: '800',
      900: '900',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',

    xs: '(max-width: 480px)',
    sm: '(max-width: 540px)',
    md: '(max-width: 800px)',
    lg: '(max-width: 2000px)',
    xl: '(min-width: 2001px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },

  // Utilities..
  utils: {
    include: mixins({
      orchidShadow: {
        boxShadow: '0 25px 50px -12px orchid',
      },
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),
    brc: (value: Stitches.PropertyValue<'borderColor'>) => ({
      borderColor: value,
    }),
    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),
    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({
      lineHeight: value,
    }),
    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
});

// Export CSS..
export type CSS = Stitches.CSS<typeof config>;

// darkTheme..
export const darkTheme = createTheme('darkTheme', {
  colors: {
    ...grayDark,
    ...mauveDark,
    ...slateDark,
    ...sageDark,
    ...oliveDark,
    ...sandDark,
    ...tomatoDark,
    ...redDark,
    ...crimsonDark,
    ...pinkDark,
    ...plumDark,
    ...purpleDark,
    ...violetDark,
    ...indigoDark,
    ...blueDark,
    ...skyDark,
    ...mintDark,
    ...cyanDark,
    ...tealDark,
    ...greenDark,
    ...grassDark,
    ...limeDark,
    ...yellowDark,
    ...amberDark,
    ...orangeDark,
    ...brownDark,
    ...bronzeDark,
    ...goldDark,

    ...grayDarkA,
    ...mauveDarkA,
    ...slateDarkA,
    ...sageDarkA,
    ...oliveDarkA,
    ...sandDarkA,
    ...tomatoDarkA,
    ...redDarkA,
    ...crimsonDarkA,
    ...pinkDarkA,
    ...plumDarkA,
    ...purpleDarkA,
    ...violetDarkA,
    ...indigoDarkA,
    ...blueDarkA,
    ...skyDarkA,
    ...mintDarkA,
    ...cyanDarkA,
    ...tealDarkA,
    ...greenDarkA,
    ...grassDarkA,
    ...limeDarkA,
    ...yellowDarkA,
    ...amberDarkA,
    ...orangeDarkA,
    ...brownDarkA,
    ...bronzeDarkA,
    ...goldDarkA,

    ...rhythmDark,
    ...rhythmDarkA,

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    shadowLight: 'hsl(206 22% 7% / 35%)',
    shadowDark: 'hsl(206 22% 7% / 20%)',

    // CUSTOM FOR DARK
    white: 'hsl(0, 0%, 100%)',
    superLime: '#7A306C',
    slime: '#c9cccd',
    light100: 'rgba(0, 0, 0, 0.4)',
    light50: 'rgba(0, 0, 0, 0.8)',

    chvn1: '#413a3c',
    chvn2: '#2b4570',
    chvn3: '#837e95',
    chvn4: '#a493f8',
    chvn5: '#cefe71',
    chvn6: '#cccab8',
    chvn7: '#f1f1f1',

    // SuperLime..
    superLime0: '#ebffe9',
    superLime1: '#b8ffb3',
    superLime2: '#65ff59',
    superLime3: '#3df330',
    superLime4: '#39e12c',
    superLime5: '#34ce28',
    superLogo: '#65ff59',
  },
  utils: {},
});

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
  html: {
    overflowX: 'hidden',

    // iOS MOBILE VIEWPORT FIX
    minHeight: '-webkit-fill-available',
  },
  body: {
    backgroundColor: '$sage1',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    height: '100vh',

    // iOS MOBILE VIEWPORT FIX
    minHeight: '-webkit-fill-available',
  },
  ul: {
    listStyle: 'none',
  },
});
