import styled from "styled-components"
import theme from "../theme"

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: ${({ theme }) => theme.space.default}px;
  padding-right: ${({ theme }) => theme.space.default}px;

  ${theme.mediaQueries.xsmall} {
    max-width: none;
  }

  ${theme.mediaQueries.small} {
    max-width: 540px;
  }

  ${theme.mediaQueries.medium} {
    max-width: 720px;
  }

  ${theme.mediaQueries.large} {
    max-width: 960px;
  }

  ${theme.mediaQueries.xlarge} {
    max-width: 1140px;
  }

  ${theme.mediaQueries.xxlarge} {
    max-width: 1280px;
  }

  ${theme.mediaQueries.xxxlarge} {
    max-width: 1440px;
  }
`

export default Container
