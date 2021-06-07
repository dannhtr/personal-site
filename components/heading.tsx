import styled from 'styled-components';
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

type Props = HeadingProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
  LayoutProps &
  PositionProps &
  ZIndexProps;

const StyledHeading = styled(motion.h1)`
  margin: 0;
  ${space};
  ${color};
  ${typography}
  ${layout}
  ${position}
  ${zIndex}
`;

const Heading: React.FC<Props> = ({ ...props }) => {
  return <StyledHeading as="h1" {...props} />;
};

Heading.defaultProps = {
  color: 'secondary',
};

export default Heading;
