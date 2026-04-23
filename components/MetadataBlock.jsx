import styles from '../styles/MetadataBlock.module.css';

const MetadataBlock = ({ items }) => (
  <dl className={styles.dl}>
    {items.map((it) => (
      <div key={it.label} className={styles.row}>
        <dt className={styles.term}>{it.label}</dt>
        <dd className={styles.desc}>{it.value}</dd>
      </div>
    ))}
  </dl>
);

export default MetadataBlock;
