import styled from 'styled-components';
import { Icon } from '..';
import { space, SpaceProps } from 'styled-system';

const StyledSocial = styled.div<SpaceProps>`
  ${space}

  a {
    margin-right: ${({ theme }) => theme.space.medium}px;
    position: relative;
    top: 0;
    transition: top 0.2s ease-in;

    &:hover {
      top: -6px;
    }
  }
`;

interface SocialProps extends SpaceProps {
  networks: {
    name: string;
    url: string;
  }[];
}

const Social = ({ networks, ...props }: SocialProps) => {
  return (
    <StyledSocial {...props}>
      {networks.map((item) => {
        console.log(item.name);
        return (
          <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer">
            <Icon name={item.name} size={32} />
          </a>
        );
      })}
    </StyledSocial>
  );
};

export default Social;
