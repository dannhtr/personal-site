const colors = { primary: "#00FF85", secondary: "#202020", bg: "#FAFAFA", white: "#fff", gray: "#C4C4C4" }
const radii = { small: 4, medium: 8, large: 12 }
const fontSizes = { mini: 12, small: 18, default: 24, medium: 36, large: 42, xlarge: 64, gigant: 86 }
const fonts = { default: "'TT-Norms', sans-serif" }
const lineHeights = { default: 1, medium: 1.5, large: 2 }
const borderWidths = { thin: 2, thick: 4 }
const space = { mini: 4, default: 8, small: 16, medium: 24, big: 32, large: 40, gigant: 48, colossus: 56 }
const breakpoints = ["576px", "768px", "992px", "1200px", "1440px", "1680px"]

// breakpoints aliases
breakpoints.xs = breakpoints[0]
breakpoints.sm = breakpoints[1]
breakpoints.md = breakpoints[2]
breakpoints.lg = breakpoints[3]
breakpoints.xl = breakpoints[4]
breakpoints.xxl = breakpoints[5]

// media quieries
const mediaQueries = {
  default: `@media (max-width: ${breakpoints[0]})`,
  xs: `@media (min-width: ${breakpoints[0]})`,
  sm: `@media (min-width: ${breakpoints[1]})`,
  md: `@media (min-width: ${breakpoints[2]})`,
  lg: `@media (min-width: ${breakpoints[3]})`,
  xl: `@media (min-width: ${breakpoints[4]})`,
  xxl: `@media (min-width: ${breakpoints[5]})`
}

const theme = {
  colors,
  radii,
  fontSizes,
  fonts,
  lineHeights,
  borderWidths,
  space,
  breakpoints,
  mediaQueries
}

export default theme
