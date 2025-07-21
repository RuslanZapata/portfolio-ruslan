export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  category: 'web' | 'mobile' | 'fullstack';
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
  };
  footer: {
    description: string;
    rights: string;
  };
}

export type Language = 'es' | 'en';
export type Theme = 'light' | 'dark';