import styled from 'styled-components';

const Noise = styled.div`
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
  display: block;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url('/noise.gif');
  background-size: 100px 100px;
  opacity: 0.2;
  z-index: 1;
  mix-blend-mode: color-burn;
  pointer-events: none;
`;

export default Noise;
