import { motion } from 'framer-motion';

export const FadeIn = ({ children, direction, className }) => {
  const offsets = {
    top: { x: 0, y: -20 },
    bottom: { x: 0, y: 20 },
    left: { x: -20, y: 0 },
    right: { x: 20, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offsets[direction] || offsets['none'];

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
