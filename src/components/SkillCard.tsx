import { skills } from "../data/skills";
import { Icon } from '@iconify/react';

interface Category {
  id: string;
  label: string;
  color: string;
}

interface SkillCardProps {
  category: Category;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const filteredSkills = skills.filter(
    (skill) => skill.category === category.id
  );

  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl pr-4 pl-4 pt-4 pb-8 shadow-lg">
      <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
        {category.label}
      </h3>
      <div className="space-y-4">
        <ul className="flex flex-wrap gap-4 px-1 justify-center max-w-xl mx-auto">
        {filteredSkills.map((skill) => (
          <li className="flex flex-col items-center justify-center rounded-md w-full max-w-32 bg-gradient-to-r from-blue-600 to-purple-600 gap-2 py-2 px-3 undefined">
            <Icon icon={skill.icon} width="40" height="40" />
            <p className="text-center font-medium text-gray-200 leading-none">{skill.name}</p>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillCard;
