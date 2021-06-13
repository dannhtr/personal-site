import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import { Container, Heading, Icon } from '..';

const StyledPicture = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary};

  position: relative;
  z-index: 2;
  border-radius: ${({ theme }) => theme.radii.large}px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ theme }) => theme.space.large}px;
  }

  figure {
    margin: 0;
    position: relative;
    top: -100px;

    figcaption {
      display: flex;
      align-items: center;
      margin-top: ${({ theme }) => theme.space.small}px;
    }

    img {
      border-radius: 16px;
    }
  }
`;

const Picture = () => {
  return (
    <StyledPicture>
      <Container>
        <Row>
          <Col>
            <figure>
              <img src="./atacama.png" alt="San Pedro de Atacama" width="100%" />
              <figcaption>
                <Icon name="location" size={24} />
                <Heading as="h5" fontWeight="500" ml="small" color="gray">
                  San Pedro de Atacama. Chile
                </Heading>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </Container>
    </StyledPicture>
  );
};

export default Picture;
