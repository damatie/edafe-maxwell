import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import styles from '../styles/ResearchEntry.module.css';

const ResearchEntry = ({ entry }) => {
  return (
    <article className={styles.paper} aria-labelledby={`paper-${entry.paperId || entry.title}`}>
      <header className={styles.meta}>
        <time className={styles.date} dateTime={entry.date}>
          {entry.dateLabel}
        </time>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className={styles.venueShort}>{entry.venueShort}</span>
        <span className={styles.dot} aria-hidden="true">
          ·
        </span>
        <span className={styles.location}>{entry.location}</span>
      </header>

      <h3 id={`paper-${entry.paperId || entry.title}`} className={styles.title}>
        {entry.title}
      </h3>

      <div className={styles.authors}>
        {entry.authors.map((a, i) => (
          <span key={a.name} className={a.primary ? styles.primary : undefined}>
            {a.name}
            {i < entry.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </div>

      <p className={styles.role}>{entry.role}</p>

      <p className={styles.abstract}>{entry.abstract}</p>

      <div className={styles.findings}>
        <span className={styles.findingsLabel}>Key findings</span>
        <ul>
          {entry.findings.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>
        <ul className={styles.keywords} aria-label="Keywords">
          {entry.keywords.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>

        <ul className={styles.links} aria-label="Paper links">
          {entry.links.map((l) => (
            <li key={l.url}>
              <a
                href={l.url}
                {...(l.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : { target: '_blank' })}
                className={styles.link}
              >
                <span>{l.label}</span>
                {l.label.toLowerCase().includes('pdf') ? <FiDownload /> : <FiArrowUpRight />}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.venue}>
        <span className={styles.venueLabel}>Venue</span>
        <span className={styles.venueFull}>
          {entry.venue}. Hosted at {entry.host}. {entry.publisher}.
        </span>
      </div>
    </article>
  );
};

export default ResearchEntry;
