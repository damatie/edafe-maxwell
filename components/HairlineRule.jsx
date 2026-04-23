import { motion, useReducedMotion } from 'framer-motion';

const HairlineRule = ({ thickness = 1, color = 'var(--rule)', delay = 0 }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      style={{
        height: thickness,
        background: color,
        transformOrigin: 'left center',
        width: '100%',
      }}
      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: reduce ? 0 : 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
    />
  );
};

export default HairlineRule;
