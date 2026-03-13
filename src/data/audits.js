import miladyStationA from './MiladyStationA.md?raw';
import miladyStationClassic from './MiladyStationClassic.md?raw';

export const AUDITS = [
  {
    slug: 'MiladyStationA',
    title: 'MiladyStation Upgraded (MiladyStationA)',
    date: 'December 2025',
    severity: { critical: 0, high: 1, medium: 1, low: 2, info: 125 },
    content: miladyStationA,
  },
  {
    slug: 'MiladyStationClassic',
    title: 'MiladyStation Classic',
    date: 'December 2025',
    severity: { critical: 1, high: 2, medium: 3, low: 2, info: 193 },
    content: miladyStationClassic,
  },
];
