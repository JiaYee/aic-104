/**
 * resume.ts
 * ----------
 * TypeScript interfaces for resume data shapes.
 */

export interface Profile {
  name: string;
  title: string;
  bio: string;
  email: string;
  linkedin: string;
  phone: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

/** A technical skill with years of hands-on experience. */
export interface TechnicalSkill {
  name: string;
  years: number;
}

/** A spoken language with proficiency level for the Languages tab. */
export interface Language {
  name: string;
  level: 'Native' | 'Professional' | 'Conversational' | 'Basic';
  /** 0–100 — drives the proficiency bar width */
  proficiency: number;
  /** Short label shown in the avatar circle */
  initial: string;
}

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}
