import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skillCategories = [
    { id: 'frontend', label: t.skills.frontend, color: 'text-blue-600 dark:text-blue-400' },
    { id: 'backend', label: t.skills.backend, color: 'text-green-600 dark:text-green-400' },
    { id: 'mobile', label: t.skills.mobile, color: 'text-purple-600 dark:text-purple-400' },
    { id: 'tools', label: t.skills.tools, color: 'text-orange-600 dark:text-orange-400' }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className={`text-xl font-bold mb-6 ${category.color}`}>
                {category.label}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {skills.filter(s => s.category === 'frontend').length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Frontend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {skills.filter(s => s.category === 'backend').length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Backend</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {skills.filter(s => s.category === 'mobile').length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Mobile</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {skills.filter(s => s.category === 'tools').length}
              </div>
              <div className="text-gray-600 dark:text-gray-400">Tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;