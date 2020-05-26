import styled from "styled-components"
import { space, layout, color, border } from "styled-system"

const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  line-height: ${({ theme }) => theme.lineHeights.medium};
  font-weight: 300;
  margin: 0;
  ${space};
  ${layout};
  ${color};
  ${border}
`

export default Text