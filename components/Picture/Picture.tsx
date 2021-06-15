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

interface PictureProps {
  location: string;
  photo: {
    dimensions: { width: number; height: number };
    alt: string;
    copyright: string;
    url: string;
  };
}

const Picture = ({ picture }: { picture: PictureProps }) => {
  return (
    <StyledPicture>
      <Container>
        <Row>
          <Col>
            <figure>
              <img src={picture.photo.url} alt={picture.photo.alt} width="100%" />
              <figcaption>
                <Icon name="location" size={24} />
                <Heading as="h5" fontWeight="500" ml="small" color="gray">
                  {picture.location}
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
