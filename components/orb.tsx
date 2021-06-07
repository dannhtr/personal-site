import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledOrb = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 1200px;
  height: 1200px;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 60%);
  right: 5%;
  top: -300px;
  opacity: 0.5;

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

const WrapperOrb = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  /* 
  overflow-x: hidden; */
  pointer-events: none;

  mix-blend-mode: overlay;
`;

const Orb = () => {
  return (
    <WrapperOrb>
      <StyledOrb
      // animate={{ scale: [1.5, 2], opacity: [0.4, 0.8], top: ['35%', '20%'] }}
      // transition={{
      //   flip: Infinity,
      //   duration: 2,
      //   ease: 'easeInOut',
      // }}
      ></StyledOrb>
    </WrapperOrb>
  );
};

export default Orb;
