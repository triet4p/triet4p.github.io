import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
}

export interface Education {
    institution: string;
    degree: string;
    period: string;
    details?: string;
}

export interface Experience {
    company: string;
    role: string;
    period: string;
    responsibilities: string[];
}

export interface Certificate {
    name: string;
    issuer: string;
    year: string;
}

export interface Award {
    name: string;
    issuer: string;
    year: string;
}

export interface TimelineEvent {
    year: string;
    title: string;
    description: string;
}
