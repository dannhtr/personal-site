import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: ${({ theme }) => theme.space.default};
  padding-right: ${({ theme }) => theme.space.default};

  @media (min-width: 1280px) {
    max-width: 1000px;
  }

  @media (min-width: 1440px) {
    max-width: 1280px;
  }
`

export default Container
