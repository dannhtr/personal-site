import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import { Container, Heading } from '..';

const StyledPicture = styled.section`
  background-color: ${({ theme }) => theme.colors.secondary}};

  figure {
    margin: 0;
    position: relative;
    top: -100px;
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
                <Heading as="h5" fontWeight="500" mt="small" color="gray">
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
