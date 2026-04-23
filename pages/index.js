import Head from 'next/head';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import { site } from '../data/site';
import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { education } from '../data/education';
import { research } from '../data/research';

import Masthead from '../components/Masthead';
import SectionHeader from '../components/SectionHeader';
import MetadataBlock from '../components/MetadataBlock';
import Reveal from '../components/Reveal';
import ExperienceRow from '../components/ExperienceRow';
import ProjectTile from '../components/ProjectTile';
import SkillsIndex from '../components/SkillsIndex';
import ResearchEntry from '../components/ResearchEntry';
import ContactBlock from '../components/ContactBlock';

import styles from '../styles/Home.module.css';

const monthFmt = new Intl.DateTimeFormat('en-GB', { year: 'numeric' });
const fmtYear = (iso) => monthFmt.format(new Date(`${iso}-01T00:00:00Z`));

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const experienceReversed = [...experience];

  return (
    <>
      <Head>
        <title>Edafe Maxwell · Senior Frontend Engineer · Founder</title>
        <meta
          name="description"
          content="Edafe Maxwell · Senior Frontend Engineer · Founder, Manchester, UK. Shipping user interfaces since 2018. Currently building Kweve and Knoledg, two AI products, solo."
        />
        <meta property="og:title" content="Edafe Maxwell · Senior Frontend Engineer · Founder" />
        <meta
          property="og:description"
          content="Shipping user interfaces since 2018. Currently building Kweve and Knoledg, two AI products, solo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${site.url}/`} />
        <meta property="og:image" content={`${site.url}/api/og`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Edafe Maxwell, Senior Frontend Engineer · Founder. Shipping since 2018. Building Kweve and Knoledg." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edafe Maxwell · Senior Frontend Engineer · Founder" />
        <meta name="twitter:description" content="Shipping user interfaces since 2018. Currently building Kweve and Knoledg, two AI products, solo." />
        <meta name="twitter:image" content={`${site.url}/api/og`} />
        <link rel="canonical" href={`${site.url}/`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <Masthead />

        {/* 02 · PROFILE */}
        <section aria-labelledby="profile-title" className={styles.section}>
          <SectionHeader id="profile" number="02" kicker="Profile" title="A senior engineer’s notebook." />
          <div className={styles.profileGrid}>
            <Reveal className={styles.prose}>
              <p>
                I build interfaces for people who don&apos;t notice them, until they do.
                Shipping since 2018. Currently running two products solo as founder and
                engineer: <span className={styles.productName}>Kweve</span>, an AI revenue
                chief of staff, and{' '}
                <a
                  href="https://knoledg.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  Knoledg
                </a>
                , an AI study platform. Frontend, backend, infrastructure, payments. All
                mine.
              </p>
              <p>
                Before founding either, I led frontend at Prestmit, rebuilding a gift-card,
                crypto, and bill-payment platform used across Africa. My work lives at the
                intersection of performance, accessibility, and taste: pixel-perfect
                implementations, WCAG compliance as a baseline rather than a bolt-on, and
                features that survive contact with production traffic.
              </p>
              <p>
                I recently completed an MSc in Cybersecurity at Manchester Metropolitan
                University and published{' '}
                <a
                  href="https://ieeexplore.ieee.org/document/10759011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.inlineLink}
                >
                  IEEE research
                </a>{' '}
                on real-time email phishing detection using a custom DistilBERT model.
                Between builds, I mentor junior engineers and contribute to React Native
                mobile surfaces.
              </p>
            </Reveal>
            <Reveal className={styles.meta} delay={0.12}>
              <MetadataBlock items={site.metadata} />
            </Reveal>
          </div>
        </section>

        {/* 03 · EXPERIENCE */}
        <section aria-labelledby="experience-title" className={styles.section}>
          <SectionHeader
            id="experience"
            number="03"
            kicker="Experience"
            title="Five roles, one through-line."
          />
          <Reveal>
            <div className={styles.experience}>
              {experienceReversed.map((entry, i) => (
                <ExperienceRow
                  key={entry.company}
                  entry={entry}
                  index={i}
                  total={experienceReversed.length}
                />
              ))}
            </div>
          </Reveal>
        </section>

        {/* 04 · FEATURED WORK */}
        <section aria-labelledby="work-title" className={styles.section}>
          <SectionHeader
            id="work"
            number="04"
            kicker="Featured work"
            title="Four that I&rsquo;ll stand behind."
          />
          <Reveal>
            <div className={styles.tiles}>
              {featured.map((p, i) => (
                <ProjectTile key={p.slug} project={p} index={i} />
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/work" className={styles.seeAll}>
              <span>See the full archive</span>
              <FiArrowUpRight />
            </Link>
          </Reveal>
        </section>

        {/* 05 · SKILLS */}
        <section aria-labelledby="skills-title" className={styles.section}>
          <SectionHeader
            id="skills"
            number="05"
            kicker="Index of skill"
            title="What lives in the toolbox."
          />
          <Reveal>
            <SkillsIndex groups={skills} />
          </Reveal>
        </section>

        {/* 06 · EDUCATION */}
        <section aria-labelledby="education-title" className={styles.section}>
          <SectionHeader
            id="education"
            number="06"
            kicker="Education"
            title="Where the foundation was laid."
          />
          <Reveal>
            <ul className={styles.education}>
              {education.map((e) => (
                <li key={e.degree} className={styles.eduRow}>
                  <div className={styles.eduDates}>
                    <time dateTime={e.start}>{fmtYear(e.start)}</time>
                    <span aria-hidden="true"> – </span>
                    <time dateTime={e.end}>{fmtYear(e.end)}</time>
                  </div>
                  <div>
                    <h3 className={styles.eduDegree}>{e.degree}</h3>
                    <p className={styles.eduSchool}>{e.school}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* 07 · RESEARCH */}
        <section aria-labelledby="research-title" className={styles.section}>
          <SectionHeader
            id="research"
            number="07"
            kicker="Research"
            title="Peer-reviewed work."
          />
          <Reveal>
            <div className={styles.research}>
              {research.map((r) => (
                <ResearchEntry key={r.title} entry={r} />
              ))}
            </div>
          </Reveal>
        </section>

        {/* 08 · CONTACT */}
        <section aria-labelledby="contact-title" className={styles.section}>
          <SectionHeader
            id="contact"
            number="08"
            kicker="Contact"
            title="Say hello."
          />
          <Reveal>
            <ContactBlock />
          </Reveal>
        </section>
      </div>
    </>
  );
}
