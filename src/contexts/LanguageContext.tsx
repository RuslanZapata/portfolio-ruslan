import React, { createContext, useState } from 'react';
import { Language, Project, Translation } from '../types';
import { translations } from '../data/translations';
import { projects } from '../data/projects';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  p: Project[]
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t: Translation = translations[language];
  const p: Project[] = projects;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, p }}>
      {children}
    </LanguageContext.Provider>
  );
};