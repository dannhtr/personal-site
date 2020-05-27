import React from "react"
import styled from "styled-components"

import theme from "../theme"

const StyledNav = styled.nav`
  position: fixed;
  top: ${theme.space.big}px;
  left: ${theme.space.big}px;
`

const Nav = () => {
  return (
    <StyledNav>
      <img src='./dann-logo.png' width='80px' alt='dann logo' />
    </StyledNav>
  )
}

export default Nav
