import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

const StyledSocial = styled.div<SpaceProps>`
  ${space}

  a {
    margin-right: ${({ theme }) => theme.space.medium}px;
  }
`;

interface SocialProps extends SpaceProps {
  networks: {
    icon: {
      [key: string]: string;
    };
    url: string;
  }[];
}

const Social = ({ networks, ...props }: SocialProps) => {
  return (
    <StyledSocial {...props}>
      {networks.map((item) => {
        return (
          <a key={item.icon.name} href={item.url} target="_blank" rel="noopener noreferrer">
            <img src={item.icon.url} alt="github" />
          </a>
        );
      })}
    </StyledSocial>
  );
};

export default Social;
