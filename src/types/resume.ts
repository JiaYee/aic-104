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

export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}
