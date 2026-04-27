import React from 'react';
import { motion } from 'framer-motion';

const foregroundPaths = {
  initial:
    'M 0,220 C 320,350 420,100 640,220 C 860,340 1120,100 1440,220 V 320 H 0 Z',
  morphed:
    'M 0,220 C 280,100 480,350 640,220 C 800,100 1160,340 1440,220 V 320 H 0 Z',
};

const midgroundPaths = {
  initial:
    'M 0,190 C 320,50 420,300 640,190 C 860,80 1120,300 1440,190 V 320 H 0 Z',
  morphed:
    'M 0,190 C 280,300 480,50 640,190 C 800,300 1160,80 1440,190 V 320 H 0 Z',
};

const backgroundPaths = {
  initial:
    'M 0,160 C 320,300 420,30 640,160 C 860,290 1120,30 1440,160 V 320 H 0 Z',
  morphed:
    'M 0,160 C 280,30 480,290 640,160 C 800,30 1160,290 1440,160 V 320 H 0 Z',
};

export const Waves = () => {
  const animationProps = (paths, duration) => ({
    animate: {
      d: [paths.initial, paths.morphed, paths.initial],
    },
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  });

  return (
    <div className='absolute bottom-0 left-0 w-full h-[320px] md:h-[400px] overflow-hidden pointer-events-none z-0'>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 1440 320'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
        className='text-sky-500 dark:text-slate-700 transition-colors duration-300'
      >
        {/* Back layer */}
        <motion.path
          stroke='none'
          strokeWidth='0'
          fill='currentColor'
          fillOpacity='0.3'
          {...animationProps(backgroundPaths, 15)}
        />

        {/* Middle Layer */}
        <motion.path
          stroke='none'
          strokeWidth='0'
          fill='currentColor'
          fillOpacity='0.6'
          {...animationProps(midgroundPaths, 12)}
        />

        {/* Front Layer */}
        <motion.path
          stroke='none'
          strokeWidth='0'
          fill='currentColor'
          fillOpacity='0.9'
          {...animationProps(foregroundPaths, 10)}
        />
      </svg>
    </div>
  );
};
