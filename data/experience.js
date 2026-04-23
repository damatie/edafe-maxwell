export const experience = [
  {
    company: 'Kweve',
    role: 'Founder · Full-Stack Engineer',
    start: '2026-04',
    end: null,
    summary:
      'Building Kweve, an AI Revenue Chief of Staff: an autonomous multi-agent platform that gives SMB founders a full revenue team through one conversation. A supervisor agent (Noble) delegates to specialist agents across Gmail, Calendar, LinkedIn, CRM, and support.',
    highlights: [
      'Architected a LangGraph coordinator/specialist system: a 17-tool supervisor delegates to seven ReAct specialists with domain-specific tools for Gmail, Calendar, LinkedIn publishing, web search, analytics, CRM, and support triage.',
      'Built execution infrastructure: Celery + Redis background tasks, Celery Beat recurring workflows with per-workflow rate limiting, scheduled actions unified across email, calendar, and LinkedIn, and proactive email and calendar monitoring.',
      'Hardened for production: Sentry (backend and frontend), security-headers middleware, slowapi rate limits, JWT with Redis token blacklist, approval policies with inline chat approval, content safety, action audit log, and credit accounting.',
    ],
    stack: ['Next.js 15', 'FastAPI', 'LangGraph', 'LangChain', 'PostgreSQL', 'Redis', 'Celery', 'Pinecone', 'Cloudflare R2', 'LLMs'],
  },
  {
    company: 'Knoledg',
    role: 'Founder · Full-Stack Engineer',
    start: '2025-04',
    end: null,
    summary:
      'Building Knoledg from scratch: an AI study platform that turns students’ PDFs, images, and docs into summaries, quizzes, flashcards, and a tutor grounded in their own materials. Shipping the whole stack solo: frontend, backend, infra, and payments.',
    highlights: [
      'Designed and built the full stack end-to-end: Next.js 16 / React 19 frontend, FastAPI + PostgreSQL backend, Cloudflare edge, and LLM-powered AI tutor.',
      'Shipped a tiered freemium system with multi-currency pricing (GBP / USD / NGN) and dual payment providers: Stripe for global and Paystack for African markets, with auto-renewal, immediate-cancel refunds, and failed-payment retries.',
      'Built an admin suite with real-time analytics, user and subscription management, a quarterly referral-and-rewards engine, and a drag-and-drop email broadcast builder.',
    ],
    stack: ['Next.js 16', 'React 19', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'LLMs', 'Stripe', 'Paystack', 'Cloudflare'],
  },
  {
    company: 'Prestmit',
    role: 'Lead Frontend Engineer',
    start: '2023-04',
    end: '2025-04',
    summary:
      'Led the V2 rebuild of Prestmit’s platform: gift-card trading, crypto, bill payments, and KYC. Mentored juniors and shaped CI/CD, TypeScript, and PWA practice across the team.',
    highlights: [
      'Spearheaded V2 architecture from scratch: React, Next.js, TypeScript, Tailwind, Redux.',
      'Designed and shipped KYC verification and security hardening across the platform.',
      'Contributed to the React Native + Expo mobile app, unblocking the mobile team on gift-card and crypto flows.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'SASS', 'Redux', 'React Native', 'Expo', 'PWA'],
  },
  {
    company: 'Spring Rock Group',
    role: 'Lead Frontend Engineer',
    start: '2020-09',
    end: '2023-04',
    summary:
      'Led front-end on e-commerce and logistics platforms. Built reusable component systems, shipped real-time features, and raised team standards through code review and unit testing.',
    highlights: [
      'Led a team of frontend developers building React + Next.js + Tailwind e-commerce and logistics platforms.',
      'Implemented WebSocket for real-time merchant-customer communication.',
      'Maintained CI/CD with a strict focus on performance, security, and reliability.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'WebSocket', 'CI/CD', 'Vue.js', 'Nuxt.js'],
  },
  {
    company: 'Mintyn Online Banking',
    role: 'Senior Frontend Engineer · Contract',
    start: '2022-12',
    end: '2023-06',
    summary:
      'Built buy-now-pay-later and split-payment flows for Mintyn’s online banking platform. Accessibility-first, with Cypress E2E coverage on the critical money paths.',
    highlights: [
      'Shipped buy-now-pay-later and split-payment features end-to-end with SASS, React, and TypeScript.',
      'Applied WCAG standards to all banking interfaces: keyboard navigation, ARIA roles, and contrast.',
      'Built Cypress E2E suites around the transaction flows.',
    ],
    stack: ['React', 'TypeScript', 'SASS', 'CSS3', 'Cypress', 'REST', 'WCAG/ARIA'],
  },
  {
    company: 'My Event Pod',
    role: 'Senior Frontend Developer · Contract',
    start: '2022-06',
    end: '2022-12',
    summary:
      'Shipped event creation, booking, and dashboard features. Optimised for SEO and scale using Next.js and Tailwind.',
    highlights: [
      'Built event creation, booking, and dashboard flows with Next.js + Tailwind.',
      'Implemented React-hooks form validation patterns reused across the platform.',
      'Optimised the platform for SEO and scalability.',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML5'],
  },
  {
    company: 'Kusnap',
    role: 'Frontend Developer',
    start: '2018-06',
    end: '2020-09',
    summary:
      'Migrated the storefront to Next.js for SEO and performance. Built merchant and customer-account features with a strong tooling + CI/CD foundation.',
    highlights: [
      'Migrated the front end to Next.js for measurable SEO and performance gains.',
      'Built customer-account, order, and merchant-storefront features with React + Redux + Formik.',
      'Introduced Husky, ESLint, and Git-based CI for code quality and reliable deploys.',
    ],
    stack: ['React', 'Next.js', 'Redux', 'Formik', 'Bootstrap', 'Husky', 'ESLint'],
  },
];
