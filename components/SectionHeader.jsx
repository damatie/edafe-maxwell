import HairlineRule from './HairlineRule';
import styles from '../styles/SectionHeader.module.css';

const SectionHeader = ({ number, kicker, title, id }) => {
  return (
    <header className={styles.wrap} id={id}>
      <HairlineRule />
      <div className={styles.row}>
        <span className={styles.kicker} aria-hidden="true">
          {number} / {kicker}
        </span>
      </div>
      <h2 className={styles.title}>{title}</h2>
    </header>
  );
};

export default SectionHeader;
