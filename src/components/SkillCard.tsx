import { skills } from "../data/skills";

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
    <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg">
      <h3 className={`text-xl font-bold mb-6 ${category.color}`}>
        {category.label}
      </h3>
      <div className="space-y-4">
        {filteredSkills.map((skill, index) => (
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
  );
};

export default SkillCard;
