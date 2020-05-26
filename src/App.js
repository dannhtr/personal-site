import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme/index"
import GlobalStyle from "./theme/globalStyle"
import "./fonts/fonts.css"

import { Intro } from "./sections"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Intro />
    </ThemeProvider>
  )
}

export default App
