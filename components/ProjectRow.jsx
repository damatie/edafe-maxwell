import { FiArrowUpRight } from 'react-icons/fi';
import styles from '../styles/ProjectRow.module.css';

const ProjectRow = ({ project, index }) => {
  const linked = Boolean(project.url);
  const Tag = linked ? 'a' : 'div';
  const linkProps = linked
    ? {
        href: project.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': `${project.name}: ${project.description}`,
      }
    : { 'aria-label': `${project.name}: ${project.description}` };

  return (
    <li>
      <Tag className={`${styles.row} ${!linked ? styles.unlinked : ''}`} {...linkProps}>
        <div className={styles.meta}>
          <span className={styles.num} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={styles.year}>{project.year}</span>
          <span className={styles.name}>{project.name}</span>
          <span className={styles.role}>{project.role}</span>
          <span className={styles.link} aria-hidden="true">
            {linked ? <FiArrowUpRight /> : <span className={styles.badge}>WIP</span>}
          </span>
        </div>

        <div className={styles.body}>
          <p className={styles.desc}>{project.description}</p>
          <ul className={styles.stack} aria-label={`${project.name} tech stack`}>
            {project.stack.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </Tag>
    </li>
  );
};

export default ProjectRow;
