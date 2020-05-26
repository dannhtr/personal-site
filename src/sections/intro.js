import React from "react"
import styled from "styled-components"

import { Heading, Text, Container } from "../components"

const StyledIntro = styled.section`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  justify-content: start;
  align-items: center;
  background-image: url("/hero.png");
  background-size: cover;
  background-repeat: no-repeat;
`
const Content = styled.div`
  display: flex;
`

const Item = styled.div`
  flex: 0 1 51%;
`

const Intro = () => {
  return (
    <StyledIntro>
      <Container>
        <Content>
          <Item>
            <Heading level={1} fontSize='gigant' color='white' lineHeight='default' mb='24px'>
              Jelou! soy...
              <br /> Daniel Camargo
            </Heading>
            <Heading
              level={2}
              fontSize='small'
              fontWeight='500'
              color='primary'
              lineHeight='default'
              letterSpacing='1.5px'
              mb='24px'
            >
              UI/UX DESIGNER - FRONTEND DEVELOPER
            </Heading>
            <Text color='white'>
              Resido en Santiago de Chile y como un híbrido raro de diseñador/desarrollador, entiendo que una interfaz
              de usuario debe verse bien y funcionar aún mejor. Soy un apasionado y conocedor de los aspectos técnicos y
              visuales que hacen que la experiencia de una plataforma web sea mas audaz e intuitiva.
            </Text>
          </Item>
        </Content>
      </Container>
    </StyledIntro>
  )
}

export default Intro
