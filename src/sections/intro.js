import React from "react"
import styled from "styled-components"
import theme from "../theme"

import { Heading, Text, Container } from "../components"

const StyledIntro = styled.section`
  height: auto;
  background-color: ${theme.colors.secondary};

  background-image: url("/hero-mobile.png");
  background-size: 120%;
  background-position: left 420px;
  background-repeat: no-repeat;
  padding-top: 190px;
  padding-bottom: 100px;

  ${theme.mediaQueries.xs} {
    background-size: 120%;
    background-position: left 300px;
    background-repeat: no-repeat;
  }

  ${theme.mediaQueries.sm} {
    height: 100%;
    background-image: url("/hero.png");
    background-size: cover;
    background-position: center;
    padding-top: unset;
    padding-bottom: unset;

    display: flex;
    justify-content: start;
    align-items: center;
  }
`
const Content = styled.div`
  display: flex;
`

const Item = styled.div`
  flex: 0 1 100%;

  ${theme.mediaQueries.sm} {
    flex: 0 1 51%;
  }
`

const Intro = () => {
  return (
    <StyledIntro>
      <Container>
        <Content>
          <Item>
            <Heading level={1} fontSize={{ _: "xlarge", lg: "gigant" }} color='white' lineHeight='default' mb='24px'>
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
              maxWidth={{ _: "200px", sm: "none" }}
            >
              UI/UX DESIGNER - FRONTEND DEV
            </Heading>
            <Text color='white' maxWidth={{ lg: "500px" }} marginTop={{ _: "220px", sm: "auto" }}>
              Resido en Santiago de Chile y como un híbrido raro de diseñador / desarrollador, entiendo que una interfaz
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
