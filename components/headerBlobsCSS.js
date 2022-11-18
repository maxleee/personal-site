import { useState, useRef } from 'react';
const { motion } = require('framer-motion');

export default function HeaderBlobs() {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = e => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
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
      yellowX: center.x * -80,
      yellowY: center.y * -60,
      greenX: center.x * 20,
      greenY: center.y * 60,
      scaleX: center.x * -20,
      scaleY: center.y / 10 + 1,
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
    hover: { translateX: 30, translateY: mousePosition.greenY },
  };
  const greenBlobY = {
    init: {},
    hover: { translateX: mousePosition.greenX, scale: mousePosition.scaleY },
  };

  return (
    <>
      <div className='noise-layer'></div>
      <motion.div
        ref={boxRef}
        variants={parent}
        whileHover='hover'
        initial='init'
        onMouseMove={e => handleMouseMove(e)}
        className='blobs-wrapper'>
        <div className='pink-blob'></div>
        <div className='pink-blob-top'></div>
        <motion.div
          className='green-oval-side'
          variants={greenBlobY}
          animate='hover'
          initial='init'
          transition={{ type: 'spring', stiffness: 100 }}></motion.div>
        <motion.div
          className='green-oval-top'
          variants={greenBlobX}
          animate='hover'
          initial='init'
          transition={{ type: 'spring', stiffness: 25 }}></motion.div>
        <div className='mustard-oval'></div>
        <motion.div
          className='mustard-circle'
          variants={yellowBlob}
          animate='hover'
          transition={{ type: 'spring', stiffness: 50 }}></motion.div>
      </motion.div>

      <svg
        viewBox='0 0 500 500'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
        style={{ display: 'none' }}>
        <filter id='noiseFilter'>
          <feTurbulence type='fractalNoise' baseFrequency='1' numOctaves='2' stitchTiles='stitch' />
        </filter>
      </svg>
    </>
  );
}
