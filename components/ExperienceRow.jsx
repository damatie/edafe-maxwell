import styles from '../styles/ExperienceRow.module.css';

const monthFmt = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric' });

const formatRange = (start, end) => {
  const startDate = new Date(`${start}-01T00:00:00Z`);
  const startLabel = monthFmt.format(startDate);
  const endLabel = end ? monthFmt.format(new Date(`${end}-01T00:00:00Z`)) : 'Present';
  return { startLabel, endLabel, startAttr: start, endAttr: end };
};

const ExperienceRow = ({ entry, index, total }) => {
  const { startLabel, endLabel, startAttr, endAttr } = formatRange(entry.start, entry.end);
  const isCurrent = !entry.end;

  return (
    <article className={styles.row}>
      <div className={styles.when}>
        <span className={styles.index} aria-hidden="true">
          {String(total - index).padStart(2, '0')}
        </span>
        <div className={styles.dates}>
          <time dateTime={startAttr}>{startLabel}</time>
          <span className={styles.dash} aria-hidden="true">
            –
          </span>
          <time dateTime={endAttr || undefined}>{endLabel}</time>
          {isCurrent && (
            <span className={styles.current} aria-label="Current role">
              <span className={styles.currentDot} aria-hidden="true" /> Now
            </span>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <h3 className={styles.company}>{entry.company}</h3>
          <p className={styles.role}>{entry.role}</p>
        </header>
        <p className={styles.summary}>{entry.summary}</p>
        <ul className={styles.highlights}>
          {entry.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <ul className={styles.stack} aria-label="Tech stack">
          {entry.stack.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceRow;
