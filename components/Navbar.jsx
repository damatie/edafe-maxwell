import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { site } from '../data/site';

const links = [
  { href: '/#masthead', label: 'Index' },
  { href: '/work', label: 'Work' },
  { href: '/#contact', label: 'Contact' },
];

const Navbar = () => {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Primary">
      <Link href="/" className={styles.mark}>
        <span className={styles.markInitials} aria-hidden="true">
          EM
        </span>
        <span className={styles.srOnly}>{site.name}, Home</span>
      </Link>
      <ul className={styles.list}>
        {links.map((l) => {
          const isActive =
            l.href === '/work' ? router.pathname === '/work' : router.pathname === '/';
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${isActive && l.href === '/work' ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
