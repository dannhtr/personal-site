import styled from 'styled-components';
import {
  space,
  layout,
  color,
  position,
  typography,
  LayoutProps,
  SpaceProps,
  ColorProps,
  PositionProps,
  TypographyProps,
} from 'styled-system';

type Props = LayoutProps & SpaceProps & ColorProps & PositionProps & TypographyProps;

const Text = styled.p<Props>`
  font-size: ${({ theme }) => theme.fontSizes.small}px;
  line-height: ${({ theme }) => theme.lineHeights.medium};
  font-weight: 300;
  margin: 0;

  ${space};
  ${layout};
  ${color};
  ${position}
  ${typography}
`;

export default Text;
