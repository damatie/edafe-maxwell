import { motion, useReducedMotion } from 'framer-motion';

const Reveal = ({ children, delay = 0, y = 12, as = 'div', className, style, id }) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      style={style}
      initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{
        duration: reduce ? 0 : 0.6,
        ease: [0.2, 0.8, 0.2, 1],
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
