import React from "react"
import styled from "styled-components"
import { space, color, typography, layout, position } from "styled-system"

const StyledHeading = styled.h1`
  margin: 0;
  ${space};
  ${color};
  ${typography}
  ${layout}
  ${position}
`

const Heading = ({ level, ...rest }) => {
  return <StyledHeading as={`h${level}`} {...rest} />
}

Heading.defaultProps = {
  level: 1,
  color: "secondary"
}

export default Heading
