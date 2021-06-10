import styled, { css } from 'styled-components';
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
import { motion } from 'framer-motion';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type StyledProps = {
  gradient?: boolean;
};

type Props = HeadingProps &
  StyledProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  PositionProps &
  ZIndexProps;

const StyledHeading = styled(motion.h1)<StyledProps>`
  margin: 0;

  ${({ gradient }) =>
    gradient
      ? css`
          background: ${({ theme }) => theme.colors.gradient};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `
      : null}

  ${space};
  ${color};
  ${typography}
  ${layout}
  ${position}
  ${zIndex}
`;

const Heading: React.FC<Props> = ({ gradient, ...props }) => {
  return <StyledHeading as="h1" gradient={gradient} {...props} />;
};

Heading.defaultProps = {
  color: 'secondary',
};

export default Heading;
