import { useRef, useEffect, useState } from 'react';
import { StyledCanvas } from './BlackHole.styles';

const BlackHole = () => {
  const ref = useRef();
  const [C, setC] = useState();
  const [ctx, setCtx] = useState();
  // const [radiusLimit, setRadiusLimit] = useState();
  const [holeRadius, setHoleRadius] = useState(200);
  const [mouseDown, setMouseDown] = useState(false);

  let holeVolume = 0;

  // let addedMass = 0;
  let G = 0.1;
  let R = [];
  let num = 800;

  useEffect(() => {
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimatioFrame ||
        function (cb) {
          window.setTimeout(cb, 1000 / 60);
        }
      );
    })();
  }, []);

  const makeStar = () => {
    let x, y, r, volume, color, angle, orbitRadius, angularSpeed, randomSpeed0, acceleration;

    if (C) {
      x = C.width / 2;
      y = C.height / 2;
      r = Math.ceil(Math.random() * 2);
      volume = (4 / 3) * Math.PI * Math.pow(r, 3);
      color = `rgba(255,255,255,.${Math.random()})`;
      angle = Math.random() * (2 * Math.PI);

      // if (newStar === 0) {
      //   orbitRadius = (Math.random() * (C.width + C.height)) / 3;
      // } else {
      //   orbitRadius =
      //     Math.sqrt(
      //       (C.width / 2 - C.width) * (C.width / 2 - C.width) +
      //         (C.height / 2 - C.height) * (C.height / 2 - C.height)
      //     ) +
      //     Math.random() * 400;
      // }

      orbitRadius = Math.sqrt((C.width / 6) * (C.height / 6)) + Math.random() * 1000;

      // orbitRadius = (Math.random() * (C.width + C.height)) / 3;

      angularSpeed = 0.5 * Math.random() * (Math.PI / orbitRadius);
      randomSpeed0 = Math.random() * (Math.PI / (2 * orbitRadius));
      acceleration = 0;

      R.push({
        x,
        y,
        r,
        volume,
        color,
        angle,
        orbitRadius,
        angularSpeed,
        randomSpeed0,
        acceleration,
      });
    }
  };

  const init = () => {
    for (let i = 0; i < num; i++) {
      makeStar();
    }
  };

  const setCanvasSize = () => {
    if (C) {
      C.width = window.innerWidth;
      C.height = window.innerHeight;

      // setRadiusLimit((C.width + C.height) / 10);
    }
  };

  const setBg = () => {
    if (ctx) {
      ctx.fillStyle = 'rgba(34,39,43,0.7)';
      ctx.fillRect(0, 0, C.width, C.height);
    }
  };

  // const drawCenter = () => {
  //   if (ctx) {
  //     ctx.fillStyle = 'rgb(0,0,0)';
  //     ctx.shadowColor = `rgba(255,255,255,${+Math.random() * 0.6})`;
  //     ctx.shadowBlur = 0.5 * holeRadius;

  //     ctx.beginPath();
  //     ctx.arc(C.width / 2, C.height / 2, holeRadius, 0, 2 * Math.PI);
  //     ctx.closePath();
  //     ctx.fill();

  //     ctx.shadowColor = 'none';
  //     ctx.shadowBlu = 0;

  //     if (holeRadius <= radiusLimit) {
  //       setHoleRadius(1 * Math.sqrt(addedMass / Math.PI) + 400);
  //     }
  //   }
  // };

  const updateStar = (star, i) => {
    // console.log(star);
    star.x = C.width / 2 + Math.sin(star.angle) * star.orbitRadius;
    star.y = C.height / 40 + Math.cos(star.angle) * star.orbitRadius;

    if (!mouseDown) star.angle += star.angularSpeed;

    star.acceleration = (G * (star.r * holeVolume)) / Math.pow(star.orbitRadius, 2) + 0.1;

    star.color = `rgba(0, ${
      +Math.round(180 * ((star.orbitRadius - holeRadius) / 300)) +
      ',' +
      Math.round(140 * ((star.orbitRadius - holeRadius) / 300)) +
      '.8'
    })`;

    // star.color = `rgba(46, 250, 213,0.5)`;

    if (star.orbitRadius >= holeRadius) {
      star.orbitRadius -= star.acceleration;
    } else {
      // addedMass += star.r;
      // console.log((addedMass += star.r));
      R.splice(i, 1);
      makeStar();
    }
  };

  const isVisible = (star) => {
    if (star.x > C.width || star.x + star.r < 0 || star.y > C.height || star.y + star.r < 0)
      return false;
    return true;
  };

  const drawStar = (star) => {
    ctx.fillStyle = star.color;

    ctx.beginPath();
    ctx.fillRect(star.x, star.y, star.r, star.r);
    ctx.fill();
  };

  const loop = () => {
    setBg();
    holeVolume = (3 / 4) * Math.PI * Math.pow(holeRadius, 0.2);

    R.map((star, i) => {
      if (isVisible(star)) {
        drawStar(star);
      }
      updateStar(star, i);
    });

    // drawCenter();
    requestAnimFrame(loop);
  };

  useEffect(() => {
    setC(ref.current);
    setCtx(ref.current.getContext('2d'));

    // if (C) setRadiusLimit((C.width + C.height) / 20);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setCanvasSize();
    });

    window.addEventListener('mousedown', () => {
      setMouseDown(true);
    });

    window.addEventListener('mouseup', () => {
      setMouseDown(false);
    });

    return () => {
      window.removeEventListener('mousedown', () => {
        setMouseDown(true);
      });
      window.removeEventListener('mouseup', () => {
        setMouseDown(false);
      });
    };
  }, []);

  useEffect(() => {
    setCanvasSize();
    setBg();
    init();
    loop();
  }, [C]);

  return <StyledCanvas ref={ref}></StyledCanvas>;
};

export default BlackHole;
