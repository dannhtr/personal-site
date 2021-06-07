import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Heading, Text, Container, Nav, Social, Orb } from '../components';
import theme from '../styles/theme';

const StyledIntro = styled.section`
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondary};

  background-image: url('/keyboard.png');
  background-size: 400px;
  /* background-position: left 50%; */
  background-repeat: no-repeat;
  padding-top: 190px;
  padding-bottom: 200px;

  background-position-y: 100%;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: 600px;
    background-position: center 55%;
    background-repeat: no-repeat;
    background-position-y: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 100%;
    background-image: url('/keyboard.png');
    background-size: 800px;
    background-position: bottom right;
    padding-top: unset;
    padding-bottom: unset;

    display: flex;
    justify-content: start;
    align-items: center;

    background-position-y: 75%;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    background-size: 800px;
    background-position-y: 75%;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    background-size: 900px;
  }

  ${({ theme }) => theme.mediaQueries.xl} {
    background-size: 1009px;
    background-position-x: 80%;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    background-position-x: 80%;
  }
`;

const Content = styled.div`
  display: flex;
`;

const Item = styled(motion.div)`
  flex: 0 1 100%;
`;

const Intro = () => {
  // const { scrollY } = useViewportScroll();
  const ref = useRef();

  // useEffect(() => {
  //   scrollY.onChange((e) => console.log(e));
  // }, []);

  return (
    <StyledIntro>
      <Container>
        <Nav />
        <Content>
          <Item ref={ref}>
            <motion.div>
              <Heading
                as="h1"
                fontSize={{ _: 'xlarge', lg: 'gigant' }}
                color="white"
                lineHeight="default"
                mb="24px"
                position="relative"
                zIndex={2}
              >
                Jelou! soy...
                <br /> Daniel Camargo
              </Heading>
            </motion.div>
            <Heading
              as="h2"
              fontSize="small"
              fontWeight="500"
              color="primary"
              lineHeight="default"
              letterSpacing="1.5px"
              mb="24px"
              maxWidth={{ _: '200px', sm: 'none' }}
            >
              FRONTEND ENGINEER - UI/UX DESIGNER
            </Heading>
            <Text
              color="white"
              position="relative"
              maxWidth={{ lg: '500px' }}
              marginTop={{ _: `${theme.space.colossus * 6}px`, sm: 'auto' }}
              letterSpacing={1}
            >
              Resido en Santiago de Chile y como un híbrido raro de diseñador / desarrollador,
              entiendo que una interfaz de usuario debe verse bien y funcionar aún mejor. Soy un
              apasionado y conocedor de los aspectos técnicos y visuales que hacen que la
              experiencia de una plataforma web sea mas audaz e intuitiva.
            </Text>
            <Social
              marginTop={{
                _: `${theme.space.big}px`,
                sm: `${theme.space.colossus * 2}px`,
              }}
            />
          </Item>
        </Content>
      </Container>
    </StyledIntro>
  );
};

export default Intro;
