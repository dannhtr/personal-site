import styled from 'styled-components';
import { motion } from 'framer-motion';

import Container from './container';

const WrapperOrb = styled.div`
  position: fixed;
  height: auto;
  width: 100%;
  pointer-events: none;
  /* mix-blend-mode: difference; */
  /* overflow-x: hidden;

  display: flex;
  justify-content: center; */

  display: flex;
  justify-content: center;
  align-items: center;
  mix-blend-mode: color-dodge;
  top: 30px;
`;

const StyledOrb = styled(motion.div)`
  /* position: relative;
  z-index: 1;
  width: 1200px;
  height: 1200px;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 60%);
  left: calc(50% - 260px);
  top: -300px;
  opacity: 0.5; */

  position: absolute;
  margin: 0 auto;
  /* top: 50px; */

  display: flex;
  width: 400px;
  height: 400px;
  filter: blur(40px);

  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};

  /* ${({ theme }) => theme.mediaQueries.sm} {
    width: 120px;
    height: 120px;
    right: 20%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    width: 180px;
    height: 180px;
    right: 23%;
  } */
`;

const StyledBlackOrb = styled(motion.div)`
  position: absolute;

  display: flex;
  width: 360px;
  height: 360px;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  filter: blur(5px);
`;

const Orb = () => {
  return (
    <WrapperOrb>
      {/* <Container> */}
      <StyledOrb />
      <StyledBlackOrb />
      {/* </Container> */}
    </WrapperOrb>
  );
};

export default Orb;
