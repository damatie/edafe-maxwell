# Edafe Maxwell — Portfolio

Personal portfolio for Edafe Maxwell, Senior Frontend Engineer & Founder based in Manchester, UK. Currently building [Kweve](https://kweve.com) and [Knoledg](https://knoledg.com).

Live site: **TBD** (see Deploy below)

---

## Stack

- **Next.js 16** (pages router, Turbopack)
- **React 19**
- **framer-motion 12** (house spring `{ stiffness: 120, damping: 20, mass: 0.8 }`, scroll-linked progress, `useReducedMotion` gated)
- **react-icons** (tree-shaken imports only)
- **CSS Modules** + token system (no Tailwind, no component library — bespoke editorial)
- **next/font** self-hosted Fraunces (serif, variable opsz + SOFT) and JetBrains Mono
- **Edge runtime** for on-demand OG image generation via `next/og`
- **ESLint 9** flat config (`eslint-config-next/core-web-vitals`)

## Design direction — "Editorial Engineering"

A technical quarterly's aesthetic. Large Fraunces display type on warm near-black (`#0E0E0C`), JetBrains Mono captions and kickers, a single oxidised-red accent (`#C8533A`). Hairline rules animate in as the rhythm of the page. No gradients, no purple, no AI-slop.

Design tokens live in [styles/tokens.css](styles/tokens.css). The frontend-design + web-design-guidelines skills are installed under [.claude/skills/](.claude/skills/) for anyone forking this repo.

---

## Scripts

```bash
npm install         # install dependencies
npm run dev         # dev server → http://localhost:3000
npm run build       # production build (must pass before deploy)
npm run start       # serve the production build locally
npm run lint        # eslint across the repo
```

Targets Node 20+.

---

## Structure

```
data/           Single source of truth for every section on the site.
├── site.js          name, role, location, contact, metadata chips
├── experience.js    reverse-chronological role history
├── projects.js      every shipped / WIP project (both featured + archive)
├── skills.js        three grouped columns for the Skills index
├── education.js     degrees
└── research.js      peer-reviewed papers + conference talks

components/     All React components. One module.css per .jsx.
├── Masthead.jsx         01 · INDEX hero
├── SectionHeader.jsx    02–08 section title + hairline + kicker
├── HairlineRule.jsx     animated scaleX primitive
├── Reveal.jsx           framer-motion whileInView wrapper
├── MetadataBlock.jsx    dl with Based / Since / Stack / Building
├── ExperienceRow.jsx    one role row
├── ProjectTile.jsx      2x2 featured grid tile (home)
├── ProjectRow.jsx       tabular row (/work archive)
├── SkillsIndex.jsx      3-column editorial skills index
├── ResearchEntry.jsx    paper card with findings + links
├── ContactBlock.jsx     email / linkedin / cv / etc.
├── ScrollProgress.jsx   1px ember progress bar
├── Navbar.jsx           fixed, translucent-on-scroll
├── Footer.jsx           Manchester-local clock + socials
└── Layout.js            skip-link + main landmark + chrome

pages/
├── index.js             long-scroll home: 01 Index → 08 Contact
├── work.jsx             full project archive
├── api/og.js            edge-runtime OG image (1200x630)
├── _app.js              next/font loader + globals
└── _document.js         <html lang="en-GB"> + theme-color

styles/         Per-component CSS Modules + globals.css + tokens.css
public/         CV PDF, ISNCC certificate, favicon
.claude/skills/ Claude Code skills for design + guidelines
```

## Adding / editing content

All copy lives in [data/](data/). To update a project, edit [data/projects.js](data/projects.js). To update a role, edit [data/experience.js](data/experience.js). To add a new paper, push another object into [data/research.js](data/research.js). No component edits needed for typical content updates.

`featured: true` on a project shows it as a tile in the home `04 · Featured work` grid (the grid expects exactly 4 featured).

---

## Accessibility

- `<html lang="en-GB">`, one `<main>` / `<nav>` / `<footer>`, skip-to-main link
- All text/background pairs pass WCAG AA
- `:focus-visible` rings in `--ember` (2 px, 3 px offset)
- All interactive elements have keyboard focus states
- `useReducedMotion()` + `@media (prefers-reduced-motion: reduce)` gate every motion component
- `<time datetime="YYYY-MM">` for all dates so screen readers speak them correctly

## Performance

- JS payload target: ≤ 90 KB gzipped first-load for `/`
- LCP ≈ FCP (largest element is the display-size name, text not image)
- CLS = 0 (fonts preloaded via `next/font`, no layout shift on hydration)
- No runtime Google Fonts fetch on page loads

## Deploy

The site deploys to [Vercel](https://vercel.com) with zero config:

```bash
npx vercel          # first deploy
npx vercel --prod   # promote to production
```

After deploy, update `site.url` in [data/site.js](data/site.js) so OG / canonical / Twitter card tags resolve to the real domain. The OG image route (`/api/og`) uses the `edge` runtime and runs on Vercel's edge network automatically.

To preview the OG image locally: [http://localhost:3000/api/og](http://localhost:3000/api/og).

---

## Research

One paper currently in [data/research.js](data/research.js):

- **Real-Time Email Phishing Detection Using a Custom DistilBERT Model** — IEEE ISNCC 2024, Washington DC. [IEEE Xplore](https://ieeexplore.ieee.org/document/10759011). First author with Amna Eleyan & Tarek Bejaoui. Oral presentation. Certificate PDF at [public/isncc-2024-certificate.pdf](public/isncc-2024-certificate.pdf).

## Licence

Portfolio content © Edafe Maxwell. Code in this repo is a personal project; if you want to fork it as a starting point for your own portfolio, go ahead — just replace the content in `data/` first.
