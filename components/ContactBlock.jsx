import { FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { site } from '../data/site';
import styles from '../styles/ContactBlock.module.css';

const ContactBlock = () => {
  const rows = [
    {
      label: 'Email',
      text: site.contact.email,
      href: `mailto:${site.contact.email}`,
      icon: FiArrowUpRight,
      external: false,
    },
    {
      label: 'LinkedIn',
      text: site.contact.linkedin.replace(/^https?:\/\//, ''),
      href: site.contact.linkedin,
      icon: FiArrowUpRight,
      external: true,
    },
    site.contact.github && {
      label: 'GitHub',
      text: site.contact.github.replace(/^https?:\/\//, ''),
      href: site.contact.github,
      icon: FiArrowUpRight,
      external: true,
    },
    {
      label: 'Curriculum Vitae',
      text: 'edafe-maxwell-cv.pdf',
      href: site.contact.cv,
      icon: FiDownload,
      external: false,
      download: true,
    },
  ].filter(Boolean);

  return (
    <div className={styles.block}>
      <p className={styles.headline}>
        Looking for a senior frontend lead who ships. Drop me a line.
      </p>
      <ul className={styles.rows}>
        {rows.map(({ label, text, href, icon: Icon, external, download }) => (
          <li key={label}>
            <a
              className={styles.row}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              {...(download ? { download: '' } : {})}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.text}>{text}</span>
              <span className={styles.icon} aria-hidden="true">
                <Icon />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactBlock;
