import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';

export enum IconNames {
  github = 'github',
  instagram = 'instagram',
  linkedin = 'linkedin',
  location = 'location',
  nextjs = 'nextjs',
  prismic = 'prismic',
  vercel = 'vercel',
}

interface IconProps extends SpaceProps {
  name: IconNames;
  size?: number;
  fill?: string;
}

const StyledSVG = styled.div<{ fill: string }>`
  display: inline-flex;

  & * {
    fill: ${({ fill }) => fill};
  }

  ${space};
`;

const Icon = ({ name, size = 32, fill = 'white', ...props }: IconProps) => {
  const ImportedIconRef = useRef(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const importIcon = async () => {
      try {
        ImportedIconRef.current = (await import(`./svgs/${name}.svg`)).default;
      } catch (err) {
        throw err;
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);

  if (!loading && ImportedIconRef.current) {
    const { current: ImportedIcon } = ImportedIconRef;

    return (
      <StyledSVG fill={fill} {...props}>
        <ImportedIcon width={size} height={size} viewBox={`0 0 32 32`} />
      </StyledSVG>
    );
  }

  return null;
};

export default Icon;
