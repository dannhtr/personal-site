import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import { Container, Heading, Text } from '..';

const StyledHobbies = styled.section`
  padding-top: ${({ theme }) => theme.space.colossus * 2}px;
  padding-bottom: ${({ theme }) => theme.space.colossus}px;
  background-color: ${({ theme }) => theme.colors.secondary};

  position: relative;
  z-index: 2;
  border-radius: ${({ theme }) => theme.radii.large}px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ theme }) => theme.space.large}px;
  }
`;

const Hobbies = () => {
  return (
    <StyledHobbies>
      <Container>
        <Heading
          as="h1"
          fontSize={{ _: 'xlarge', lg: 'gigant' }}
          color="white"
          lineHeight="default"
          position="relative"
          mb={100}
        >
          Values & Hobbies
        </Heading>
        <Row>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading>
              <span role="img" aria-label="Pile of books icon">
                🔮
              </span>
            </Heading>
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              Buen diseño y menos es mas{' '}
            </Heading>

            <Text color="white">
              Mantenerlo simple y legible es primordial, logrado eso podemos ponernos creativos y
              darle un toque extra.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              Si no lo se, aprendo!{' '}
              <span role="img" aria-label="Pile of books emoji">
                📚
              </span>
            </Heading>
            <Text color="white">
              Por que esperar que alguien lo haga por ti cuando siempre se puede encontrar un buen
              tutorial que te enseñe a hacerlo.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              (Casi) todo se puede
              <span role="img" aria-label="Robotic strong arm emoji">
                🦾
              </span>
            </Heading>
            <Text color="white">
              Si no es de una manera, puede ser de otra, la idea es siempre tratar de ofrecer la
              solución mas factible y que cumpla con el objetivo.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              Not a pro Gamer{' '}
              <span role="img" aria-label="Gamer controller emoji">
                🎮
              </span>
            </Heading>
            <Text color="white">
              Me gustan los First Person Shooters (PUBG, Overwatch, CoD, Apex Legends) y perder
              siempre en Fifa.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              Mas casa y viajes{' '}
              <span role="img" aria-label="Sun and sea emoji">
                🌅
              </span>
            </Heading>
            <Text color="white">
              Me gusta pasar tiempo en casa en familia, pero trato de compensar con viajes fuera de
              la ciudad cuando sea posible.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              Wannabe de Artista{' '}
              <span role="img" aria-label="Fire emoji">
                🔥
              </span>
            </Heading>
            <Text color="white">
              Con 2 marcas de poleras fallidas (Hater Clothing, Fire Riders Company) espero algun
              dia dedicarle sufiente tiempo a ilustrar para @unluckydeath y quiza emprender de
              nuevo.
            </Text>
          </Col>
        </Row>
      </Container>
    </StyledHobbies>
  );
};

export default Hobbies;
