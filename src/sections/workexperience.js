import React from "react"
import styled from "styled-components"
import { Row, Col } from "react-grid-system"

import { Container, Heading, Text } from "../components"

const StyledWorkExperience = styled.section`
  padding-top: ${({ theme }) => theme.space.colossus * 2}px;
  padding-bottom: ${({ theme }) => theme.space.colossus * 4}px;
  background-color: ${({ theme }) => theme.colors.secondary};
`

const WorkExperience = () => {
  return (
    <StyledWorkExperience>
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
          Work Experience
        </Heading>
        <Row>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              UI/UX Designer / Frontend Dev
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' lineHeight='medium'>
              Haip / Santiago. Chile
            </Heading>
            <Heading
              level={6}
              color='white'
              fontWeight='400'
              fontSize='mini'
              mb='medium'
              lineHeight='medium'
              opacity='0.7'
            >
              2018 - PRESENTE
            </Heading>
            <Text color='white' opacity='0.5'>
              Encargado del diseño de la interfaces de usuario y desarrollo front-end en React JS de las diferentes
              plataformas del producto en Haip.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              UI/UX Designer / Frontend Dev
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' lineHeight='medium'>
              Eniax / Santiago. Chile
            </Heading>
            <Heading
              level={6}
              color='white'
              fontWeight='400'
              fontSize='mini'
              mb='medium'
              lineHeight='medium'
              opacity='0.7'
            >
              2017 - 2018
            </Heading>
            <Text color='white' opacity='0.5'>
              Labores diferentes tanto en diseño como en la creación de flujos de navegación para la agenda médica
              online y plataforma admin interna
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              UI Designer
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' lineHeight='medium'>
              2Brains para BCI / Santiago. Chile
            </Heading>
            <Heading
              level={6}
              color='white'
              fontWeight='400'
              fontSize='mini'
              mb='medium'
              lineHeight='medium'
              opacity='0.7'
            >
              2017
            </Heading>
            <Text color='white' opacity='0.5'>
              Llevé a cabo tareas de creación de prototipos navegables en HTML/CSS/JS para el testeo de flujos de
              clientes empresas BCI en la solicitud de créditos.
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              Web & Graphic Designer
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' lineHeight='medium'>
              Wemake / Santiago. Chile
            </Heading>
            <Heading
              level={6}
              color='white'
              fontWeight='400'
              fontSize='mini'
              mb='medium'
              lineHeight='medium'
              opacity='0.7'
            >
              2015 - 2016
            </Heading>
            <Text color='white' opacity='0.5'>
              Creación de diseños webs para diferentes clientes de la agencia, además de implementación de estos usando
              CMS Wordpress
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              Web & Graphic Designer
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' lineHeight='medium'>
              Triple V / Santiago. Chile
            </Heading>
            <Heading
              level={6}
              color='white'
              fontWeight='400'
              fontSize='mini'
              mb='medium'
              lineHeight='medium'
              opacity='0.7'
            >
              2014 - 2015
            </Heading>
            <Text color='white' opacity='0.5'>
              Diseño gráfico en general para diferentes clientes de la agencia, además de construir sitios webs usando
              Wordpress
            </Text>
          </Col>
          <Col md={4} style={{ marginBottom: 56 }}>
            <Heading level={4} color='primary' fontWeight='500' fontSize='default' mb='medium'>
              Graphic Designer
            </Heading>
            <Heading level={4} color='white' fontWeight='400' fontSize='default' mb='medium' lineHeight='medium'>
              Freelance / Santiago. Chile
            </Heading>
            <Text color='white' opacity='0.5'>
              Always On, cuando se puede realizo trabajos de diseño gráfico en general o sitios web.
            </Text>
          </Col>
        </Row>
      </Container>
    </StyledWorkExperience>
  )
}

export default WorkExperience
