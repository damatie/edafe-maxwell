import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import styles from '../styles/Masthead.module.css';

const statusFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: site.timezone,
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});

const Masthead = () => {
  const reduce = useReducedMotion();
  const stamp = statusFormatter.format(new Date());
  const [given, family] = site.name.split(' ');

  const container = {
    hidden: {},
    visible: reduce ? {} : { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
  };
  const line = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.7, ease: [0.2, 0.8, 0.2, 1] },
    },
  };

  return (
    <section id="masthead" className={styles.wrap} aria-labelledby="masthead-title">
      <div className={styles.kickerRow}>
        <span className={styles.kicker}>01 / INDEX</span>
        <span className={styles.kicker} suppressHydrationWarning>
          <span className={styles.dot} aria-hidden="true" />
          {stamp}
        </span>
      </div>

      <motion.h1
        id="masthead-title"
        className={styles.name}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span variants={line} className={styles.nameLine}>
          {given}
        </motion.span>
        <motion.span variants={line} className={styles.nameLine}>
          {family}
          <span className={styles.ampersand} aria-hidden="true">
            ,
          </span>
        </motion.span>
        <motion.span variants={line} className={styles.role}>
          <span className={styles.roleRule} aria-hidden="true" />
          <span>{site.role.toLowerCase()}</span>
        </motion.span>
      </motion.h1>

      <motion.p
        variants={line}
        initial="hidden"
        animate="visible"
        className={styles.lede}
      >
        {site.shortBio}
      </motion.p>

      <motion.a
        href="#experience"
        variants={line}
        initial="hidden"
        animate="visible"
        className={styles.cta}
      >
        <span>Read the archive</span>
        <span className={styles.arrow} aria-hidden="true">
          ↓
        </span>
      </motion.a>
    </section>
  );
};

export default Masthead;
