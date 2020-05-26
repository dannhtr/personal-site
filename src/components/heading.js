import React from "react"
import styled from "styled-components"
import { space, color, typography, layout } from "styled-system"

const StyledHeading = styled.h1`
  margin: 0;
  transition: all ease 1s;
  ${space};
  ${color};
  ${typography}
  ${layout}
`

const Heading = ({ level, ...rest }) => {
  return <StyledHeading as={`h${level}`} {...rest} />
}

Heading.defaultProps = {
  level: 1,
  color: "secondary"
}

export default Heading
