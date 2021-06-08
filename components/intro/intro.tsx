import { RichText } from 'prismic-reactjs';

import theme from '../../styles/theme';
import { Heading, Text, Container, Nav, Social } from '..';
import { StyledIntro, Content, Item, Title } from './intro.styles';

const Intro = ({ intro, networks }) => {
  return (
    <StyledIntro background={intro.header_image.url}>
      <Container>
        <Nav />
        <Content>
          <Item>
            <Title
              fontSize={{ _: 'xlarge', lg: 'gigant' }}
              color="white"
              lineHeight="default"
              position="relative"
              zIndex={2}
              left="-6px"
            >
              {RichText.render(intro.introtext)}
            </Title>
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
              {RichText.asText(intro.subtitle)}
            </Heading>
            <Text
              color="white"
              position="relative"
              maxWidth={{ lg: '500px' }}
              marginTop={{ _: `${theme.space.colossus * 6}px`, sm: 'auto' }}
              letterSpacing={1}
            >
              {RichText.asText(intro.description)}
            </Text>
            <Social
              marginTop={{
                _: `${theme.space.big}px`,
                sm: `${theme.space.colossus * 2}px`,
              }}
              networks={networks}
            />
          </Item>
        </Content>
      </Container>
    </StyledIntro>
  );
};

export default Intro;
