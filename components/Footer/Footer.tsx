import styled from 'styled-components';
import { Icon } from '..';

const StyledFooter = styled.footer`
  padding: 100px 0;
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      Daniel Camargo | Site created by using{' '}
      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
        <Icon name="nextjs" size={24} marginX={4} />
      </a>{' '}
      , with
      <a href="https://prismic.io/" target="_blank" rel="noopener noreferrer">
        <Icon name="prismic" size={24} marginX={4} />
      </a>
      as headless cms, and deployed on
      <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
        <Icon name="vercel" size={24} marginX={4} />
      </a>
    </StyledFooter>
  );
};

export default Footer;
