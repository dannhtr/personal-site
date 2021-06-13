import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ColorProps } from '../../styles/theme';

const StyledSVG = styled.div<{ fill: string }>`
  display: inline-block;

  & * {
    fill: ${({ fill }) => fill};
  }
`;

const Icon = ({ name, size = 32, fill = 'white', ...props }) => {
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
      <StyledSVG fill={fill}>
        <ImportedIcon width={size} viewBox={`0 0 32 32`} {...props} />
      </StyledSVG>
    );
  }

  return null;
};

export default Icon;
