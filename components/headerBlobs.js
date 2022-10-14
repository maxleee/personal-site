import { useState, useRef } from 'react';
const { motion } = require('framer-motion');

export default function HeaderBlobs() {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
    console.log(mousePosition);
  };
  function getRelativeCoordinates(event, referenceElement) {
    const position = {
      x: event.pageX,
      y: event.pageY,
    };

    const offset = {
      left: referenceElement.offsetLeft,
      top: referenceElement.offsetTop,
      width: referenceElement.clientWidth,
      height: referenceElement.clientHeight,
    };

    let reference = referenceElement.offsetParent;

    while (reference) {
      offset.left += reference.offsetLeft;
      offset.top += reference.offsetTop;
      reference = reference.offsetParent;
    }
    const center = {
      x: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
      y: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
    };

    return {
      x: position.x - offset.left,
      y: position.y - offset.top,
      width: offset.width,
      height: offset.height,
      yellowX: center.x * -50,
      yellowY: center.y * -30,
      greenX: center.x * 20,
      greenY: center.y * 60,
    };
  }

  const parent = {
    init: {},
    hover: {},
  };

  const yellowBlob = {
    init: {},
    hover: { translateX: mousePosition.yellowX, translateY: mousePosition.yellowY },
  };
  const greenBlobX = {
    init: {},
    hover: { translateX: 30, translateY: mousePosition.greenY, scale: 1.2 },
  };
  const greenBlobY = {
    init: {},
    hover: { translateX: mousePosition.greenX, scale: 1.2 },
  };

  return (
    <motion.div
      ref={boxRef}
      variants={parent}
      whileHover='hover'
      initial='init'
      onMouseMove={e => handleMouseMove(e)}>
      <svg
        width='786'
        height='642'
        viewBox='0 0 786 642'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ position: 'absolute', top: 0, right: 0, zIndex: 0, overflow: 'visible' }}>
        <g filter='url(#filter0_f_303_2)'>
          <path
            d='M966.496 217.668C961.531 387.142 802.551 546.338 626.207 541.172C546.197 380.097 203.174 340.067 212.197 32.0967C217.163 -137.377 479.844 -103.711 656.188 -98.5449C832.532 -93.3784 971.462 48.1951 966.496 217.668Z'
            fill='#FFA8BA'
          />
        </g>
        <g filter='url(#filter1_f_303_2)'>
          <motion.ellipse
            variants={greenBlobY}
            animate='hover'
            initial='init'
            transition={{ type: 'spring', stiffness: 100 }}
            cx='786'
            cy='210.217'
            rx='210.016'
            ry='233.5'
            fill='#00473E'
          />
          <motion.g
            variants={greenBlobX}
            animate='hover'
            initial='init'
            transition={{ type: 'spring', stiffness: 25 }}
            style={{ mixBlendMode: 'overlay' }}>
            <ellipse cx='637' cy='13.5' rx='265' ry='146.5' fill='#00473E' />
          </motion.g>
        </g>
        <g style={{ mixBlendMode: 'overlay' }} filter='url(#filter2_f_303_2)'>
          <ellipse cx='538' cy='179' rx='248' ry='40' fill='#FAAE2B' />
        </g>
        <motion.g
          variants={yellowBlob}
          animate='hover'
          transition={{ type: 'spring', stiffness: 50 }}
          style={{ mixBlendMode: 'overlay' }}
          filter='url(#filter3_f_303_2)'>
          <ellipse rx='248' ry='201.5' transform='matrix(1 0 0 -1 348 186.5)' fill='#FAAE2B' />
        </motion.g>

        <defs>
          <filter
            id='filter0_f_303_2'
            x='0'
            y='-204.671'
            width='954.603'
            height='845.965'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_303_2' />
          </filter>
          <filter
            id='filter1_f_303_2'
            x='272'
            y='-233'
            width='824.016'
            height='876.717'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_303_2' />
          </filter>
          <filter
            id='filter2_f_303_2'
            x='190'
            y='39'
            width='696'
            height='280'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_303_2' />
          </filter>
          <filter
            id='filter3_f_303_2'
            x='0'
            y='-115'
            width='696'
            height='603'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'>
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='50' result='effect1_foregroundBlur_303_2' />
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
}
