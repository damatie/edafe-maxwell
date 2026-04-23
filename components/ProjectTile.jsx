import { FiArrowUpRight } from 'react-icons/fi';
import styles from '../styles/ProjectTile.module.css';

const ProjectTile = ({ project, index }) => {
  const linked = Boolean(project.url);
  const Tag = linked ? 'a' : 'div';
  const linkProps = linked
    ? {
        href: project.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${project.name}: open in a new tab`,
      }
    : {};

  return (
    <Tag className={`${styles.tile} ${!linked ? styles.unlinked : ''}`} {...linkProps}>
      <div className={styles.meta}>
        <span className={styles.year}>{project.year}</span>
        <span className={styles.slash} aria-hidden="true">
          /
        </span>
        <span className={linked ? styles.status : styles.statusQuiet}>{project.status}</span>
      </div>

      <h3 className={styles.name}>
        <span className={styles.num} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.name}
      </h3>

      <p className={styles.desc}>{project.description}</p>

      <div className={styles.foot}>
        <ul className={styles.stack}>
          {project.stack.slice(0, 4).map((t) => (
            <li key={t}>{t}</li>
          ))}
          {project.stack.length > 4 && (
            <li className={styles.more}>+{project.stack.length - 4}</li>
          )}
        </ul>
        {linked && (
          <span className={styles.visit} aria-hidden="true">
            Visit <FiArrowUpRight />
          </span>
        )}
      </div>
    </Tag>
  );
};

export default ProjectTile;
