import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-grid-system"

import { Container, Heading, Text } from "../components"

const StyledSkillsTools = styled.section`
  padding-top: ${({ theme }) => theme.space.colossus * 4}px;
  padding-bottom: ${({ theme }) => theme.space.colossus * 4}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`

const SkillsTools = () => {
  return (
    <StyledSkillsTools>
      <Container>
        <Heading
          level={1}
          fontSize={{ _: "xlarge", lg: "gigant" }}
          color='white'
          lineHeight='default'
          position='relative'
          zIndex='2'
          mb={100}
        >
          Skills & Tools
        </Heading>

        <Row>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              UI/UX Design
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' mb='medium' lineHeight='medium'>
              Landing pages, Wireframes, Prototipos, App Design, Design Systems, Atomic Design, Branding, Icon Design
            </Heading>
            <Text color='white' opacity='0.5'>
              Figma, Invision, Zeplin, Framer, Photoshop, Illustrator.
            </Text>
          </Col>
          <Col md={4} offset={{ md: 2 }} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              Development
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' mb='medium' lineHeight='medium'>
              HTML/CSS, Javascript, React Js, Styled-Components, CSS Animations, Rest Api, Node Js
            </Heading>
            <Text color='white' opacity='0.5'>
              Visual Studio Code, Postman, Github, Slack, Hyper.
            </Text>
          </Col>
        </Row>
      </Container>
    </StyledSkillsTools>
  )
}

export default SkillsTools
