import { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useTransform, useSpring, useViewportScroll } from 'framer-motion';

type Easing = [number, number, number, number];
type EasingFunction = () => void;

interface FadeProps {
  yOffset?: number;
  easing?:
    | Easing
    | 'linear'
    | 'easeIn'
    | 'easeOut'
    | 'easeInOut'
    | 'circIn'
    | 'circOut'
    | 'circInOut'
    | 'backIn'
    | 'backOut'
    | 'backInOut'
    | 'anticipate'
    | EasingFunction;
  triggerPoint?: number;
  fadeOut?: boolean;
  children: React.ReactElement;
}

const Fade = ({
  yOffset = 200,
  easing = 'easeOut',
  triggerPoint = 0.1,
  fadeOut = true,
  children,
  ...rest
}: FadeProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const offsetHeight = 100;

  const [elementTop, setElementTop] = useState(0);
  const [elementBottom, setElementBottom] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  const transformInitialValue = elementTop - clientHeight * triggerPoint;
  const transformFinalValue = elementTop + yOffset;

  const yRange = [transformInitialValue, transformFinalValue];

  const y = useTransform(scrollY, [200, 0], [0, -yOffset]);

  const opacityInitialValue = fadeOut ? 0 : 1;
  const opacityRange = useMemo(() => [opacityInitialValue, 1], [opacityInitialValue]);

  const yOpacityRange = [elementTop + offsetHeight * 3, elementTop - offsetHeight];
  const opacity = useTransform(scrollY, yOpacityRange, opacityRange);
  // const opacity = useSpring(transformRange, {});

  const offset = (el: HTMLDivElement) => {
    var rect = el.getBoundingClientRect();
    return rect.top;
  };

  useEffect(() => {
    if (!ref.current) return;

    const setValues = () => {
      const top = offset(ref.current);
      setElementTop(top);
      setElementBottom(top + ref.current.offsetHeight);
      setClientHeight(window.innerHeight);
    };

    setValues();
    document.addEventListener('load', setValues);
    window.addEventListener('resize', setValues);
    document.addEventListener('scroll', setValues);

    return () => {
      document.removeEventListener('load', setValues);
      window.removeEventListener('resize', setValues);
      document.removeEventListener('scroll', setValues);
    };
  }, [ref, yOffset]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, zIndex: 2 }}
      // transition={{ ease: easing }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
