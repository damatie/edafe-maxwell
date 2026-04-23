import Head from 'next/head';
import Link from 'next/link';
import { FiArrowUpLeft } from 'react-icons/fi';
import { projects } from '../data/projects';
import { site } from '../data/site';
import SectionHeader from '../components/SectionHeader';
import ProjectRow from '../components/ProjectRow';
import Reveal from '../components/Reveal';
import styles from '../styles/Work.module.css';

export default function Work() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <>
      <Head>
        <title>Work · Edafe Maxwell</title>
        <meta
          name="description"
          content="Full archive of shipped projects by Edafe Maxwell, Senior Frontend Engineer · Founder."
        />
        <meta property="og:title" content="Work · Edafe Maxwell" />
        <meta
          property="og:description"
          content="Every project shipped or in flight since 2018: AI platforms, payment rails, banking apps, marketplaces, and e-commerce."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/work`} />
        <meta property="og:image" content={`${site.url}/api/og`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${site.url}/api/og`} />
        <link rel="canonical" href={`${site.url}/work`} />
      </Head>

      <div className={styles.page}>
        <SectionHeader
          id="archive"
          number="·"
          kicker="Archive"
          title="The full list."
        />

        <Reveal>
          <p className={styles.lede}>
            Everything shipped or in flight since 2018: AI platforms, payment rails,
            banking apps, marketplaces, and e-commerce. Live rows open in a new tab;
            WIP rows are still being built.
          </p>
        </Reveal>

        <Reveal>
          <ul className={styles.list} aria-label="Project archive">
            {sorted.map((p, i) => (
              <ProjectRow key={p.slug} project={p} index={i} />
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <Link href="/" className={styles.back}>
            <FiArrowUpLeft />
            <span>Back to index</span>
          </Link>
        </Reveal>
      </div>
    </>
  );
}
