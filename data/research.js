export const research = [
  {
    type: 'paper',
    title: 'Real-Time Email Phishing Detection Using a Custom DistilBERT Model',
    authors: [
      { name: 'Edafe M. Damatie', primary: true, affiliation: 'Manchester Metropolitan University' },
      { name: 'Amna Eleyan', affiliation: 'Manchester Metropolitan University' },
      { name: 'Tarek Bejaoui', affiliation: 'University of Carthage' },
    ],
    venue: 'IEEE International Symposium on Networks, Computers and Communications',
    venueShort: 'ISNCC 2024',
    host: 'University of the District of Columbia',
    location: 'Washington DC, USA',
    date: '2024-10',
    dateLabel: 'October 2024',
    role: 'First author · Oral presentation',
    paperId: '1571082439',
    publisher: 'IEEE · IEEE Communications Society',
    abstract:
      'A custom DistilBERT architecture with dynamic threshold adjustment and an enhanced classifier head, optimised for email content. Integrates with Gmail via OAuth 2.0 for live monitoring and adds a daily retraining mechanism that adapts to evolving phishing tactics.',
    findings: [
      '99.29% accuracy · 0.69% false-positive rate (controlled, 82,486-email dataset).',
      '95.45% accuracy · 1.88s average response time (real-world Gmail integration).',
      'Outperforms state-of-the-art baselines including RNN-GRU (99.18%) and PhishKiller (98.30%).',
    ],
    keywords: [
      'DistilBERT',
      'Transformer models',
      'Real-time detection',
      'Adaptive retraining',
      'Cybersecurity',
    ],
    links: [
      { label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/document/10759011', external: true },
      { label: 'Conference', url: 'https://www.isncc-conf.org/', external: true },
      { label: 'Certificate (PDF)', url: '/isncc-2024-certificate.pdf', external: false },
    ],
  },
];
