import styled from "styled-components"
import theme from "../theme"

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: ${theme.space.big}px;
  padding-right: ${theme.space.big}px;

  ${theme.mediaQueries.default} {
    max-width: none;
  }

  ${theme.mediaQueries.xs} {
    max-width: 540px;
  }

  ${theme.mediaQueries.sm} {
    max-width: 720px;
  }

  ${theme.mediaQueries.md} {
    max-width: 960px;
  }

  ${theme.mediaQueries.lg} {
    max-width: 1140px;
  }

  ${theme.mediaQueries.xl} {
    max-width: 1280px;
  }

  ${theme.mediaQueries.xxl} {
    max-width: 1440px;
  }
`

export default Container
