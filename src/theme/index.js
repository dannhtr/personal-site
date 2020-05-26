const colors = { primary: "#22FF95", secondary: "#202020", bg: "#FAFAFA", white: "#fff" }
const radii = { small: 4, medium: 8, large: 12 }
const fontSizes = { mini: 12, small: 18, default: 24, medium: 36, big: 42, large: 64, gigant: 86 }
const fonts = { default: "'TT-Norms', sans-serif" }
const lineHeights = { default: 1, medium: 1.5, large: 2 }
const borderWidths = { thin: 2, thick: 4 }
const space = { mini: 4, default: 8, small: 16, medium: 24, big: 32, large: 40, gigant: 48, colossus: 56 }
const breakpoints = ["576px", "768px", "992px", "1200px", "1440px", "1680px"]
const mediaQueries = {
  xsmall: `@media (max-width: ${breakpoints[0]})`,
  small: `@media (min-width: ${breakpoints[0]})`,
  medium: `@media (min-width: ${breakpoints[1]})`,
  large: `@media (min-width: ${breakpoints[2]})`,
  xlarge: `@media (min-width: ${breakpoints[3]})`,
  xxlarge: `@media (min-width: ${breakpoints[4]})`,
  xxxlarge: `@media (min-width: ${breakpoints[5]})`
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
