const { motion } = require('framer-motion');

export default function externalLinkIcon({ children, link }) {
  const parent = {
    init: {},
    hover: {},
  };
  const arrow = {
    init: {},
    hover: { x: 2, y: -2 },
  };
  const box = {
    init: {},
    hover: { scale: 0.9 },
  };

  return (
    <motion.a
      className='external-link'
      href={link}
      variants={parent}
      initial='init'
      whileHover='hover'
      target='_blank'>
      {children}
      <svg
        viewBox='0 0 19 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='external-link-icon'>
        <motion.path
          variants={box}
          d='M8.25 2.75H5.25C3.04086 2.75 1.25 4.54086 1.25 6.75V12.75C1.25 14.9591 3.04086 16.75 5.25 16.75H11.25C13.4591 16.75 15.25 14.9591 15.25 12.75V9.75'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <motion.path
          variants={arrow}
          d='M8.625 9.625L17.0625 1.1875M17.0625 1.1875H12M17.0625 1.1875V6'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </motion.a>
  );
}
