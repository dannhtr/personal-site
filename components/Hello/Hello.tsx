import { RichText } from 'prismic-reactjs';

import theme from '../../styles/theme';
import { Heading, Text, Nav, Social, Orb, Fade } from '..';
import { StyledHello, Content, Item, Title } from './Hello.styles';

const Hello = ({ intro, networks }) => {
  return (
    <StyledHello background={intro.header_image.url}>
      <Orb />
      {/* <Nav /> */}
      <Content>
        <Fade>
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
              color="white"
              lineHeight="default"
              letterSpacing="1.5px"
              mb="24px"
              gradient
            >
              {RichText.asText(intro.subtitle)}
            </Heading>
            <Text
              color="white"
              position="relative"
              maxWidth={{ lg: '800px' }}
              margin="auto"
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
        </Fade>
      </Content>
    </StyledHello>
  );
};

export default Hello;
