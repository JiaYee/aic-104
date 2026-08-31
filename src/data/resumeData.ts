/**
 * resumeData.ts
 * --------------
 * Central place for all placeholder resume content.
 * Workshop students: edit this file to personalize the app with your own info.
 */

import type { Language, Profile, Role, TechnicalSkill } from '../types/resume';

export const profile: Profile = {
  name: 'Tai Jia Yee',
  title: 'Lead AI Engineer',
  bio:
    'Lead AI Engineer with 11 years of experience building web and mobile products. ' +
    'Specializes in Angular, React, React Native, and cloud platforms (GCP & AWS). ' +
    'Passionate about delivering high-performance, user-friendly applications in Agile teams.',
  email: 'taijiayee@gmail.com',
  linkedin: 'linkedin.com/in/jiayeetai',
  phone: 'wa.me/60107789729',
};

/** Combined technical skills with years of experience (9yr + 2yr stacks merged). */
export const technicalSkills: TechnicalSkill[] = [
  { name: 'Angular', years: 9 },
  { name: 'TypeScript', years: 9 },
  { name: 'JavaScript', years: 9 },
  { name: 'MySQL', years: 9 },
  { name: 'NoSQL', years: 9 },
  { name: 'Google Cloud Platform (GCP)', years: 9 },
  { name: 'ReactJS', years: 2 },
  { name: 'NextJS', years: 2 },
  { name: 'NodeJS', years: 2 },
  { name: 'Python', years: 2 },
  { name: 'FastAPI', years: 2 },
  { name: 'Amazon Web Services (AWS)', years: 2 },
  { name: 'React Native', years: 2 },
];

/** Spoken languages — shown on the Languages tab with proficiency bars. */
export const languages: Language[] = [
  { name: 'Chinese', level: 'Native', proficiency: 100, initial: '中' },
  { name: 'Cantonese', level: 'Native', proficiency: 100, initial: '粤' },
  { name: 'English', level: 'Professional', proficiency: 85, initial: 'EN' },
  { name: 'Malay', level: 'Professional', proficiency: 80, initial: 'MY' },
];

/** Past roles — newest first, matching a typical CV layout. */
export const roles: Role[] = [
  {
    title: 'Lead AI Engineer',
    company: 'The Employees Provident Fund (EPF)',
    location: 'Remote / Kuala Lumpur',
    period: 'Jan 2023 – Present',
    highlights: [
      'Revamped i-Akaun with dashboard and withdrawal features.',
      'Deployed 10+ features and resolved critical bugs in Agile teams.',
      'Reduced initial load times by 30% with lazy loading.',
    ],
  },
  {
    title: 'Development Team Lead (China)',
    company: 'VMware',
    location: 'Remote / Kuala Lumpur',
    period: 'May 2022 – Dec 2022',
    highlights: [
      'Led 1 backend engineer and 1 QA engineer.',
      'Reported to manager in Palo Alto, California, USA.',
      "Liaised with vendors in Xi'An, Shaanxi, China.",
    ],
  },
  {
    title: 'Senior Angular Developer',
    company: 'VMware',
    location: 'Remote / Kuala Lumpur',
    period: 'Jul 2021 – Apr 2022',
    highlights: [
      'Built high-performance web products with US, India, and China teams.',
      'Enhanced Technology Partner Hub with announcement and ticketing features.',
    ],
  },
  {
    title: 'Senior Hybrid Mobile App Developer',
    company: 'Hong Leong Bank',
    location: 'Remote / Kuala Lumpur',
    period: 'Jul 2020 – Jun 2021',
    highlights: [
      'Migrated HLB Pocket Connect App back into HLB Centre of Engineering.',
      'Grew user base from 0 to 8k with the business unit.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Hades Trading',
    location: 'Remote / Kota Bharu',
    period: 'Jul 2015 – Jun 2020',
    highlights: [
      'Delivered projects for clients in Atlanta, Dubai, and Sydney.',
    ],
  },
];
