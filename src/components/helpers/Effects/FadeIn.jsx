import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children, direction, className, once = false }) => {
  const [key, setKey] = useState(0);

  const offsets = {
    top: { x: 0, y: -20 },
    bottom: { x: 0, y: 20 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offsets[direction] || offsets['none'];

  useEffect(() => {
    if (!once) setKey((prevKey) => prevKey + 1);
  }, [children, once]);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
