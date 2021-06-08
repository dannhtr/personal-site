import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  space,
  color,
  typography,
  layout,
  position,
  zIndex,
  SpaceProps,
  ColorProps,
  TypographyProps,
  LayoutProps,
  PositionProps,
  ZIndexProps,
} from 'styled-system';

export const StyledIntro = styled.section<{ background: string }>`
  height: auto;
  background-color: ${({ theme }) => theme.colors.secondary};

  background-image: url(${({ background }) => background});
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
    background-image: url(${({ background }) => background});
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

type TitleProps = SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  PositionProps &
  ZIndexProps;

export const Title = styled.div<TitleProps>`
  margin: 0;
  margin-bottom: 24px;

  h1 {
    ${space};
    ${color};
    ${typography}
    ${layout}
    ${position}
    ${zIndex}
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Item = styled(motion.div)`
  flex: 0 1 100%;
`;
