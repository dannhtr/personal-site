import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-grid-system"

import { Container, Heading, Text } from "../components"

const StyledValuesHobbies = styled.section`
  padding-top: ${({ theme }) => theme.space.colossus * 2}px;
  padding-bottom: ${({ theme }) => theme.space.colossus * 4}px;
  background-color: ${({ theme }) => theme.colors.white};
`

const ValuesHobbies = () => {
  return (
    <StyledValuesHobbies>
      <Container>
        <Heading
          level={1}
          fontSize={{ _: "xlarge", lg: "gigant" }}
          color='secondary'
          lineHeight='default'
          position='relative'
          zIndex='2'
          mb={100}
        >
          Values & Hobbies
        </Heading>
        <Row>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='secondary' fontWeight='500' fontSize='default' mb='medium'>
              Buen diseño y menos es mas{" "}
              <span role='img' aria-label='Pile of books icon'>
                Diamond emoji
              </span>
            </Heading>
            <Text color='secondary'>
              Mantenerlo simple y legible es primordial, logrado eso podemos ponernos creativos y darle un toque extra.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='secondary' fontWeight='500' fontSize='default' mb='medium'>
              Si no lo se, aprendo!{" "}
              <span role='img' aria-label='Pile of books emoji'>
                📚
              </span>
            </Heading>
            <Text color='secondary'>
              Por que esperar que alguien lo haga por ti cuando siempre se puede encontrar un buen tutorial que te
              enseñe a hacerlo.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='secondary' fontWeight='500' fontSize='default' mb='medium'>
              (Casi) todo se puede
              <span role='img' aria-label='Robotic strong arm emoji'>
                🦾
              </span>
            </Heading>
            <Text color='secondary'>
              Si no es de una manera, puede ser de otra, la idea es siempre tratar de ofrecer la solución mas factible y
              que cumpla con el objetivo.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='secondary' fontWeight='500' fontSize='default' mb='medium'>
              Not a pro Gamer{" "}
              <span role='img' aria-label='Gamer controller emoji'>
                🎮
              </span>
            </Heading>
            <Text color='secondary'>
              Me gustan los First Person Shooters (PUBG, Overwatch, CoD, Apex Legends) y perder siempre en Fifa.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='secondary' fontWeight='500' fontSize='default' mb='medium'>
              Mas casa y viajes{" "}
              <span role='img' aria-label='Sun and sea emoji'>
                🌅
              </span>
            </Heading>
            <Text color='secondary'>
              Me gusta pasar tiempo en casa en familia, pero trato de compensar con viajes fuera de la ciudad cuando sea
              posible.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='secondary' fontWeight='500' fontSize='default' mb='medium'>
              Wannabe de Artista{" "}
              <span role='img' aria-label='Fire emoji'>
                🔥
              </span>
            </Heading>
            <Text color='secondary'>
              Con 2 marcas de poleras fallidas (Hater Clothing, Fire Riders Company) espero algun dia dedicarle sufiente
              tiempo a ilustrar para @unluckydeath y quiza emprender de nuevo.
            </Text>
          </Col>
        </Row>
      </Container>
    </StyledValuesHobbies>
  )
}

export default ValuesHobbies
