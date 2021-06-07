import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-left: ${({ theme }) => theme.space.big}px;
  padding-right: ${({ theme }) => theme.space.big}px;

  ${({ theme }) => theme.mediaQueries.default} {
    max-width: none;
  }

  ${({ theme }) => theme.mediaQueries.xs} {
    max-width: 540px;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 720px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 960px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    max-width: 1140px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    max-width: 1280px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    max-width: 1440px;
  }
`;

export default Container;
