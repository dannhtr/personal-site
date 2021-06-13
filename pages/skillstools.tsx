import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

import { Container, Heading, Text, Fade } from '../components';

import { frontend, design } from '../data/skills.json';

const StyledSkillsTools = styled.section`
  padding-top: ${({ theme }) => theme.space.colossus * 2}px;
  padding-bottom: ${({ theme }) => theme.space.colossus * 2}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  z-index: 2;
  border-radius: ${({ theme }) => theme.radii.large}px;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: ${({ theme }) => theme.space.large}px;
  }
`;

const SkillsTools = () => {
  return (
    <StyledSkillsTools>
      <Container>
        {/* <Fade> */}
        <Heading
          as="h1"
          fontSize={{ _: 'xlarge', lg: 'gigant' }}
          color="white"
          lineHeight="default"
          position="relative"
          zIndex={2}
          mb={100}
        >
          Skills
        </Heading>
        {/* </Fade> */}

        <Row>
          <Col md={4} style={{ marginBottom: 56 }}>
            {/* <Fade> */}
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              {frontend.title}
            </Heading>
            {/* </Fade> */}
            <Heading
              as="h4"
              color="white"
              fontWeight="400"
              fontSize="default"
              mb="medium"
              lineHeight="medium"
            >
              {frontend.skills}
            </Heading>
            <Text color="white" opacity="0.5">
              {frontend.tools}
            </Text>
          </Col>

          <Col md={4} offset={{ md: 2 }} style={{ marginBottom: 56 }}>
            <Heading
              as="h4"
              color="primary"
              fontWeight="500"
              fontSize="default"
              mb="medium"
              gradient
            >
              {design.title}
            </Heading>
            <Heading
              as="h4"
              color="white"
              fontWeight="400"
              fontSize="default"
              mb="medium"
              lineHeight="medium"
            >
              {design.skills}
            </Heading>
            <Text color="white" opacity="0.5">
              {design.tools}
            </Text>
          </Col>
        </Row>
      </Container>
    </StyledSkillsTools>
  );
};

export default SkillsTools;
