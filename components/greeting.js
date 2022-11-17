import { useState } from 'react';
const { motion } = require('framer-motion');

export default function Greeting() {
  let localReturning = false;
  if (typeof window !== 'undefined') {
    localReturning = localStorage.getItem('maxorenzuk');
    console.log(isReturning);
    localStorage.setItem('maxorenzuk', 'true');
  }
  const [isReturning, setIsReturning] = useState(localReturning);

  return (
    <h1 className='main-heading'>
      {isReturning && <span className='returning'>Welcome back, </span>}
      <span className='main-heading-small'>
        <motion.div
          whileHover={{ rotate: [10, -5, 8, -2, 3], scale: 1.3 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          style={{ originX: 0.8, originY: 1, display: 'inline-block', marginRight: '8px' }}>
          <span role='img' aria-label='hand waving'>
            👋🏻
          </span>
        </motion.div>
        I'm Max
      </span>
      a visual designer and frontend developer
    </h1>
  );
}
