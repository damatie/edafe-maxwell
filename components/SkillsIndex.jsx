import styles from '../styles/SkillsIndex.module.css';

const SkillsIndex = ({ groups }) => (
  <div className={styles.grid}>
    {groups.map((g, gi) => (
      <div key={g.heading} className={styles.col}>
        <header className={styles.colHead}>
          <span className={styles.num} aria-hidden="true">
            {String(gi + 1).padStart(2, '0')}
          </span>
          <h3 className={styles.heading}>{g.heading}</h3>
        </header>
        <ul className={styles.list}>
          {g.items.map((s) => (
            <li key={s} className={styles.item}>
              <span className={styles.bullet} aria-hidden="true">
                ·
              </span>
              {s}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default SkillsIndex;
