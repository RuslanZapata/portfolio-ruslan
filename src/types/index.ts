import type { LucideIcon } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
  es: ProjectTranslation;
  en: ProjectTranslation;
}

export interface ProjectTranslation {
  description: string;
  longDescription: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'mobile' | 'tools';
  icon?: string;
}

export interface Translation {
  logo: string;
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    downloadCV: string;
    urlCV: string; // URL to download CV
  };
  about: {
    title: string;
    description: string;
    experience: string;
    projects: string;
    clients: string;
    years: string;
    award: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    viewCode: string;
    allProjects: string;
    webDev: string;
    mobileDev: string;
    fullstack: string;
    technologies: string;
    features: string;
  };
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    mobile: string;
    tools: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    intro: string;
    description: string;
    followMe: string;
  };
  footer: {
    description: string;
    rights: string;
    quickLinks: string;
    contactInfo: string;
  };
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  color: string;
}

export interface ContactInfoItem {
  icon: LucideIcon;
  label: {
    es: string;
    en: string;
  };
  value: string;
  href: string;
}

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';