import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.space.colossus * 2}px;
  padding-bottom: ${({ theme }) => theme.space.colossus * 4}px;
  background-color: ${({ theme }) => theme.colors.secondary};

  position: relative;
  z-index: 2;
  border-radius: ${({ theme }) => theme.radii.large}px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ theme }) => theme.space.large}px;
  }
`;

export const Jobs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-auto-rows: 1fr;
  gap: 3rem;
`;

export const JobItem = styled.div`
  /* border: 2px solid ${({ theme }) => theme.colors.border}; */
  /* border-radius: 0.5rem; */
  z-index: 2;
  transition: background-color 0.3s, transform 0.3s ease;

  &:hover {
    /* border: 2px solid ${({ theme }) => theme.colors.border}; */
    /* transform: translateY(-10px); */
  }
`;

export const Resume = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: center;
`;

export const Download = styled.a`
  padding: ${({ theme }) => `${theme.space.medium}px ${theme.space.gigant}px`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.medium}px;
  border: 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;

  font-size: ${({ theme }) => theme.fontSizes.small}px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: 600;

  cursor: pointer;
  transition: background-color ease-in 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
