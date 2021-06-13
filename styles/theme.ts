import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorProps;
    radii: typeof radii;
    fontSizes: typeof fontSizes;
    fonts: typeof fonts;
    lineHeights: typeof lineHeights;
    borderWidths: typeof borderWidths;
    space: typeof space;
    breakpoints: typeof breakpoints;
    mediaQueries: typeof mediaQueries;
  }
}

export type ColorProps = typeof colors;

const colors = {
  primary: '#2EFAD5',
  secondary: '#22272B',
  bg: '#FAFAFA',
  white: '#fff',
  gray: '#C4C4C4',
  border: '#272D31',
  gradient:
    'linear-gradient(353deg,rgb(80 255 247) 0%,rgba(0,0,0,0) 80%),linear-gradient(90deg,#00ff85 0%,rgb(255 255 255 / 0%) 100%),linear-gradient(255deg,#3686ff 0%,rgb(47 253 91) 80%)',
};

const radii = { small: 4, medium: 8, large: 12 };
const fontSizes = {
  mini: 14,
  small: 18,
  default: 24,
  medium: 36,
  large: 42,
  xlarge: 64,
  gigant: 86,
};
const fonts = { default: "'TT Norms Pro', sans-serif" };
const lineHeights = { default: 1, medium: 1.5, large: 2 };
const borderWidths = { thin: 2, thick: 4 };
const space = {
  mini: 4,
  default: 8,
  small: 16,
  medium: 24,
  big: 32,
  large: 40,
  gigant: 48,

  colossus: 56,
};
const breakpointsSizes = ['576px', '768px', '992px', '1200px', '1440px', '1680px'];

const breakpoints = {
  xs: breakpointsSizes[0],
  sm: breakpointsSizes[1],
  md: breakpointsSizes[2],
  lg: breakpointsSizes[3],
  xl: breakpointsSizes[4],
  xxl: breakpointsSizes[5],
};

// media quieries
const mediaQueries = {
  default: `@media (max-width: ${breakpoints.xs})`,
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`,
  xxl: `@media (min-width: ${breakpoints.xxl})`,
};

const myTheme: DefaultTheme = {
  colors,
  radii,
  fontSizes,
  fonts,
  lineHeights,
  borderWidths,
  space,
  breakpoints,
  mediaQueries,
};

export default myTheme;
