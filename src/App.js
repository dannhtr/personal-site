import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "./theme/index"
import "./fonts/fonts.css"

import { Intro } from "./sections"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body,
  html,
  #root {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.secondary};;
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.default};
    font-weight: normal;
    font-variant-ligatures: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Intro />
    </ThemeProvider>
  )
}

export default App
