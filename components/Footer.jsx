import { useEffect, useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { site } from '../data/site';
import styles from '../styles/Footer.module.css';

const clockFormatter = new Intl.DateTimeFormat('en-GB', {
  timeZone: site.timezone,
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZoneName: 'short',
});

const Footer = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => setTime(clockFormatter.format(new Date()));
    tick();
    const id = setInterval(tick, 15_000);
    return () => clearInterval(id);
  }, []);

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.col}>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.label}>Manchester</span>
        <span className={styles.sep} aria-hidden="true">
          /
        </span>
        <time className={styles.time} suppressHydrationWarning>
          {time ?? '--:--'}
        </time>
      </div>

      <div className={styles.col}>
        <a
          href={site.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.icon}
        >
          <BsLinkedin />
        </a>
        {site.contact.github && (
          <a
            href={site.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className={styles.icon}
          >
            <BsGithub />
          </a>
        )}
        <span className={styles.mark}>© {year} Edafe Maxwell</span>
      </div>
    </footer>
  );
};

export default Footer;
