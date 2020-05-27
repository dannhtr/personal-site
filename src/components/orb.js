import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

import theme from "../theme"

const StyledOrb = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 80px;
  height: 80px;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(62, 253, 94, 1) 0%, rgba(0, 0, 0, 0) 60%);
  right: 20%;
  margin-top: 100px;

  ${theme.mediaQueries.sm} {
    width: 120px;
    height: 120px;
    right: 20%;
  }

  ${theme.mediaQueries.md} {
    width: 180px;
    height: 180px;
    right: 23%;
  }
`

const WrapperOrb = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;

  overflow-x: hidden;
  pointer-events: none;
`

const Orb = () => {
  return (
    <WrapperOrb>
      <StyledOrb
        animate={{ scale: [1.5, 2], opacity: [0.4, 0.8], top: ["35%", "20%"] }}
        transition={{
          flip: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      ></StyledOrb>
    </WrapperOrb>
  )
}

export default Orb
