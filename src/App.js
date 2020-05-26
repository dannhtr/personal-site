import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./theme/index"
import GlobalStyle from "./theme/globalStyle"
import "./fonts/fonts.css"

const App = () => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1 style={{ color: `${theme.colors.white}`, fontSize: `${theme.fontSizes.gigant}px` }}>
        Jelou! soy... Daniel Camargo
      </h1>
    </ThemeProvider>
  )
}

export default App
