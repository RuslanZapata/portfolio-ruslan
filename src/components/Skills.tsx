import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import SkillCard from './SkillCard';
import { SkillCategory } from '../types';
import { getSkillCategories } from '../data/skillCategories';
import SkillsSummary from './SkillsSummary';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const skillCategories: SkillCategory[] = getSkillCategories(t);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-4"></div>
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        {/* Skills Summary */}
        <SkillsSummary skillCategories={skillCategories} />
      </div>
    </section>
  );
};

export default Skills;