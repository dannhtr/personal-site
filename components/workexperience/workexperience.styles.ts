import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.space.colossus * 2}px;
  padding-bottom: ${({ theme }) => theme.space.colossus * 4}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Jobs = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-auto-rows: 1fr;
  gap: 2rem;
`;

export const JobItem = styled.div`
  padding: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;
