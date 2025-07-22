import React from "react";
import { skills } from "../data/skills";
import { SkillCategory } from "../types";

const SkillsSummary: React.FC<{ skillCategories: SkillCategory[] }> = ({
  skillCategories,
}) => {
  return (
    <div className="mt-16 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <div className={`text-3xl font-bold ${category.color} mb-2`}>
              {skills.filter((skill) => skill.category === category.id).length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {category.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSummary;
