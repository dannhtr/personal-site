import React from "react"
import styled from "styled-components"
import { space } from "styled-system"

import theme from "../theme"

const StyledSocial = styled.div`
  ${space}

  a {
    margin-right: ${theme.space.medium}px;
  }
`

const Social = (props) => {
  return (
    <StyledSocial {...props}>
      <a href='https://github.com/dannhtr' target='_blank' rel='noopener noreferrer'>
        <img src='./github.png' alt='github' />
      </a>
      <a href='https://instagram.com/dannhtr' target='_blank' rel='noopener noreferrer'>
        <img src='./instagram.png' alt='instagram' />
      </a>
      <a href='https://www.linkedin.com/in/dannhtr/' target='_blank' rel='noopener noreferrer'>
        <img src='./linkedin.png' alt='linkedin' />
      </a>
    </StyledSocial>
  )
}

export default Social
